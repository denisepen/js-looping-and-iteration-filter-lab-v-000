// Code your solution in this file
const drivers =
[{name: "Bobby"},
{name: "Fred"},
{name: "tammy"}
]


// function findMatching(drivers, name){
//   newCollection = drivers.filter(function(name)
//    {return  drivers.name == name})
// return newCollection
// }

newCollection = drivers.filter(findMatching)

function findMatching(drivers,name){
  return drivers.name == name
}
