d3.json("samples.json").then(function(data) {
    console.log(data);
//     // get array of washing frequency of each person
//     wfreq = data.metadata.map(person => person.wfreq)
// .sort((a,b) => b-a);
//     console.log(wfreq);
//     filteredWfreq = wfreq.filter(element => element != null);
//     console.log(filteredWfreq);
    // print all metadata for the first person
    let person1 = data.metadata[0];
    Object.entries(person1).forEach(([key,value]) => console.log(`${key}: ${value}`));
   
})