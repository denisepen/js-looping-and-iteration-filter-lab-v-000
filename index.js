// Code your solution in this file
const drivers =
[{name: "Bobby"},
{name: "Fred"},
{name: "tammy"}
]

// let newCollection = []

// function findMatching(value, driver){
//   for (let i = 0; i <= driver.length; i++){
//     if (value === driver[i].name){
//      newCollection.push(value)
//     }
//   }
//   return newCollection
// }


function findMatching(driver, value){
  let matching = drivers.filter(function(driver, value){
    driver.name ==value
  })
  return matching
}
// function findMatching(drivers, name){
// newCollection = drivers.filter(findMatching(name, drivers))
//    {return  drivers.name === name})
// return newCollection
// }
