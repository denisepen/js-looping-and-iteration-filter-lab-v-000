// Code your solution in this file
const drivers =
[{name: "Bobby"},
{name: "Fred"},
{name: "tammy"}
]


function findMatching(value, driver){
  for (let i = 0, i <= driver.length, i++)
  return value === driver.name.toLowerCase
}
let newCollection = drivers.filter(findMatching)
//
// function findMatching(name, drivers){
//   return drivers.name == name
// }


// function findMatching(drivers, name){
//   newCollection = drivers.filter(function(name)
//    {return  drivers.name === name})
// return newCollection
// }
