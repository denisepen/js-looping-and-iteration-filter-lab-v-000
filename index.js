// Code your solution in this file
const drivers =
[{name: "Bobby"},
{name: "Fred"},
{name: "tammy"}
]


function findMatching(drivers, name){
  newCollection = drivers.filter(function(name)
   { name == drivers.name})
return newCollection
}
