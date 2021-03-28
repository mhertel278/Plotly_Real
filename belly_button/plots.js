function init() {
    var selector = d3.select("#selDataset");

    // call in the json file
    d3.json("samples.json").then((data) => {
    console.log(data);
    // get the array of test subject IDs from the data object
    var sampleNames = data.names;
    // for each ID name, append an option to the drop down menu 
    sampleNames.forEach((sample) => {        
        selector    
            .append("option")
            .text(sample)
            .property("value", sample);
    });
   

})
}
// function called when drop down menu is changed
function optionChanged(newSample) {
    buildMetadata(newSample);
    // buildCharts(newSample);
}
// function to build the Metadata for each subject in the Demographic Info Panel
function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        var PANEL = d3.select("#sample-metadata");

        PANEL.html("");
        Object.entries(result).forEach(info => PANEL.append("h6").text(`${info[0].toUpperCase()}: ${info[1]}`));
    })
}
init();