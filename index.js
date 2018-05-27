// Code your solution in this file
const drivers =
[{name: "Bobby"},
{name: "Fred"},
{name: "tammy"}
]

let newCollection = []
newCollection = drivers.filter(drivers, findMatching)

function findMatching(name){
  return drivers.name == name
}

// function findMatching(drivers, name){
//   newCollection = drivers.filter(function(name)
//    {return  drivers.name == name})
// return newCollection
// }
