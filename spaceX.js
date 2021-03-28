const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(function(receivedData) {
    console.log(receivedData);
    // get latitudes and longitudes for launch location
    var lats = receivedData.map(x => x.location.latitude);
    console.log(lats);
    var longs = receivedData.map(x => x.location.longitude);
    console.log(longs);

  
}
)  