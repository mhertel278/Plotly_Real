// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);
// Plotly.newPlot("barChart", [{x: [1,2,3,4,5], y: [7,4,2,6,9], type: 'bar'}]);
// Plotly.newPlot("pieChart", [{x: ['sop','alto','tenor','bari'], y: [10,20,30,40], type: 'pie'}], {height: 10, width: 10});

// Save data to a variable object, then pass the variable to plot
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10,18,5],
    // if not line chart, specificy type of chart as 3rd parameter
    type: "bar"
};
// create separate object variable to hold optional layout customization (plot size, title, etc)
var layout = {
    title: "Luncheon Survey",
    // pass axis labels as objects with keys "title"
    xaxis: {title: "Food Options"},
    yaxis: {title: "Number of Respondents"}
};
// to plot, first param = div id, second parameter must be an array (if using a variable that is not an array, pass as the only element of an array),
// optional layout customization can be passed as 3rd parameter, either directly or as a variable (not an array like the second param)
Plotly.newPlot("tracePlot", [trace], layout);

// create bar chart
var drinks = [{
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
}];
var drinkLayout = {
    title: "Beverage Orders",
    xaxis: {title: "Drinks"},
    yaxis: {title: "Percentage of Orders"}
};
Plotly.newPlot("drinkChart", drinks, drinkLayout);
// create pie chart
var drinks = [{
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
}];
var pieLayout = {
    title: "'Pie' Chart"
    
};
Plotly.newPlot("drinkPieChart", drinks, pieLayout);
// create scatter plot
var trace1 = {
    x: [5,6,7,8],
    y: [1,2,3,4],
    mode: "marker",
    type: 'scatter'

};
var trace2 = {
    x: [10,15,20,25],
    y: [5,6,7,8],
    mode: 'lines',
    type: 'scatter'
};
var trace3 = {
    x: [1,2,3,4],
    y: [10,11,12,13],
    mode: 'lines+markers',
    type: 'scatter',
};
var data = [trace1, trace2, trace3]
var scatterLayout = {
    title: "Scatter Plot",
    xaxis: {title: "Horizontal"},
    yaxis: {title: "Vertical"}

};
Plotly.newPlot("scatterPlot", data, scatterLayout);