// Code your solution in this file
const drivers =
[{name: "betty"},
{name: "dave"},
{name: "frank"},
{name: "sandy"}]


function findMatching(drivers, name){
  newCollection = drivers.filter(function(name) {
  return  name == drivers.name
})
  return newCollection;
}
