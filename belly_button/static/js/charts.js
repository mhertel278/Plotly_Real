function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;
    console.log(data);
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel

    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var samples = data.samples;
    console.log(samples);
    // // 4. Create a variable that filters the samples for the object with the desired sample number.
    var filteredSamples = samples.filter(sampleObj => sampleObj.id == sample);
    console.log(filteredSamples);
    //  5. Create a variable that holds the first sample in the array.
    var sampleSelected = filteredSamples[0];

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = sampleSelected.otu_ids;
    // console.log(otu_ids);
    var otu_labels = sampleSelected.otu_labels;
    // console.log(otu_labels);
    var sample_values = sampleSelected.sample_values;
    console.log(sample_values);

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 
    

    var yticks = otu_ids.slice(0,10).map(tick => `OTU ${tick}`).reverse();
    console.log(yticks);

    // 8. Create the trace for the bar chart. 
    var barData = [{
      x: sample_values.slice(0,10).reverse(),
      y: yticks,
      text: otu_labels.slice(0,10).reverse(),
      type: "bar",
      orientation: "h"
    }
      
    ];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
      xaxis: {title: "Number of Culters"},
      yaxis: {title: "Type of Bacteria"},
      title: "<b>Top 10 Bacteria Cultures Found</b>"
     
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);

    // 1. Create the trace for the bubble chart.
    var bubbleData = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
        color: otu_ids,
        size: sample_values

      }
    }
   
    ];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "Bacteria Cultures per Sample",
      xaxis: {title: "OTU_ID"},
      hovermode: "closest"
      
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var resultArray = data.metadata.filter(sampleObj => sampleObj.id == sample);
   
    // 2. Create a variable that holds the first sample in the metadata array.
    var result = resultArray[0];

    // 3. Create a variable that holds the washing frequency.
    var washFreq = result.wfreq
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      value: washFreq,
      type: "indicator",
      mode: "gauge+number",
      title: "<b>Belly Button Washing Frequency</b><br>Scrubs Per Week",
      gauge: {
        axis: {range: [null, 10]},
        bar: {color: "black"},
        steps: [
          { range: [0,2], color: "red" },
          {  range: [2,4], color: "orange" },
          {  range: [4,6], color: "yellow" },
          {  range: [6,8], color: "limegreen" },
          {  range:[8,10], color: "green" }
        ]
      }
    }
     
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      width: 400, 
      height: 500, 
      margin: { t: 0, b: 0 }
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);

  });

}
