// // sort cityGrowths by population increase descending
// var sortedGrowths = cityGrowths.sort((a, b) => b.Increase_from_2016 - a.Increase_from_2016);
// console.log(sortedGrowths)
// // get top 5 cities from sorted order
// var topFive = sortedGrowths.slice(0,5);
// console.log(topFive);
// // create arrays for the top 5 city names and their populations
// var topCities = topFive.map(city => city.City);
// console.log(topCities);
// var topPops = topFive.map(city => parseInt(city.Increase_from_2016));
// console.log(topPops);
// // plot the top cities and their populations
// var trace1 = {
//     x: topCities,
//     y: topPops,
//     type: "bar"
// };

// var data = [trace1];

// var layout = {
//     xaxis: {title: "City"},
//     yaxis: {title: "Population Increase"},
//     title: "Fastest Growing Cities",

// };
// Plotly.newPlot("bar-plot", data, layout);

// sort cityGrowths by population increase descending
var sortedGrowths = cityGrowths.sort((a, b) => b.Increase_from_2016 - a.Increase_from_2016);
console.log(sortedGrowths)
// get top 7 cities from sorted order
var topSeven = sortedGrowths.slice(0,7);
console.log(topSeven);
// create arrays for the top 7 city names and their populations
var topCities = topSeven.map(city => city.City);
console.log(topCities);
var topPops = topSeven.map(city => parseInt(city.Increase_from_2016));
console.log(topPops);
// plot the top cities and their populations
var trace1 = {
    x: topCities,
    y: topPops,
    type: "bar"
};

var data = [trace1];

var layout = {
    xaxis: {title: "City"},
    yaxis: {title: "Population Increase"},
    title: "Fastest Growing Cities",

};
Plotly.newPlot("bar-plot", data, layout);



