// Code your solution in this file
const drivers =
[{name: "Bobby"},
{name: "Fred"},
{name: "tammy"}
]

function findMatching(drivers, value){
  let matching = drivers.filter(function(driver){
  return  driver.name == value
  })
  return matching
}

// let newCollection = []

// function findMatching(value, driver){
//   for (let i = 0; i <= driver.length; i++){
//     if (value === driver[i].name){
//      newCollection.push(value)
//     }
//   }
//   return newCollection
// }
