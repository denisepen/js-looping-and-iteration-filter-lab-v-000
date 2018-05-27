// Code your solution in this file
const drivers =
[{name: "Bobby"},
{name: "Fred"},
{name: "tammy"}
]

let newCollection = []
newCollection = drivers.filter(findMatching)

function findMatching(name, drivers){
  return drivers.name == name
}

// function findMatching(drivers, name){
//   newCollection = drivers.filter(function(name)
//    {return  drivers.name == name})
// return newCollection
// }
