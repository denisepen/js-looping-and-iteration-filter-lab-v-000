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
      return name
    }
  }
}

// function findMatching(drivers, name){
newCollection = drivers.filter(findMatching(name, drivers))
//    {return  drivers.name === name})
// return newCollection
// }
