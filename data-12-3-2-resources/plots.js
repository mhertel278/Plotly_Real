function init() {
    data = [{
        x: [1,2,3,4,5],
        y: [1,2,4,6,8]
    }];
    Plotly.newPlot("plot", data);
};

d3.selectAll("#dropdownMenu").on("change", updatePlotly);
function updatePlotly() {
    var dropdownMenu = d3.select("#dropdownMenu");
    console.log(dropdownMenu);
    var dataset = dropdownMenu.property("value");
    console.log(dataset);

    // var xData = [1,2,3,4,5];
    var yData = [];

    if (dataset === "dataset1") {
        yData = [1,2,4,6,8];
    } 
    if (dataset === 'dataset2') {
        yData = [1,10,100,1000,10000];
    
    };
    console.log(yData);
    // var trace = {
    //     x: [xData],
    //     y: [yData]
    // };
    Plotly.restyle("plot", "y", [yData]);
};
// d3.json("samples.json").then(function(data) {
//     console.log(data);
//     // get array of washing frequency of each person
//     wfreq = data.metadata.map(person => person.wfreq)
// .sort((a,b) => b-a);
//     console.log(wfreq);
//     filteredWfreq = wfreq.filter(element => element != null);
//     console.log(filteredWfreq);
//     // print all metadata for the first person
//     let person1 = data.metadata[0];
//     Object.entries(person1).forEach(([key,value]) => console.log(`${key}: ${value}`));
   
// })
init();