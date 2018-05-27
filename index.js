// Code your solution in this file
const drivers =
[{name: "Bobby"},
{name: "Fred"},
{name: "tammy"}
]

let newCollection = []
function findMatching(name, drivers){
  for (let i = 0; i <= drivers.length; i++){
    if (name === drivers[i].name){
      return newCollection.push(name)
    }
  }
}
// function findMatching(drivers, name){
//   newCollection = drivers.filter(function(name)
//    {return  drivers.name === name})
// return newCollection
// }
