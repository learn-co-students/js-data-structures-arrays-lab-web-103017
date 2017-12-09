const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(name){
  return drivers.push(name)
}

function destructivelyPrependDriver(name){
  return drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
  return drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  return drivers.shift()
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
  return drivers.slice(0, drivers.length - 1)
}

function removeFirstDriver(){
  return drivers.slice(1)
}
