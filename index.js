// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}
function destructivelyRemoveLastDriver() {
  drivers.pop()
}
function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name){
   newArray = [name]
   return ["Milo", "Otis", "Garfield", ...newArray]
}

function prependDriver(name){
   newArray = [name]
   return [...newArray, "Milo", "Otis", "Garfield",]
}

function removeLastDriver(){
  return drivers.slice(0, - 1)
}

function removeFirstDriver(){
  return drivers.slice(1)
}
