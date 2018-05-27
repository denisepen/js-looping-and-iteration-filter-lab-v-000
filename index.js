// Code your solution in this file
const drivers =
[{name: "Bobby"},
{name: "Fred"},
{name: "tammy"}
]

// let newCollection = []
// function findMatching(name, driver){
//   for (let i = 0; i <= driver.length; i++){
//     if (name === driver[i].name){
//       return name
//     }
//   }
// }

let collection = []
collection = drivers.filter(findMatching(value){return value == drivers.name})

function findMatching(value, drivers){
  return value;
}

// function findMatching(drivers, name){
// newCollection = drivers.filter(findMatching(name, drivers))
//    {return  drivers.name === name})
// return newCollection
// }
