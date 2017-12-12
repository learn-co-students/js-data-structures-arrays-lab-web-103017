// Write your solution here!

const drivers = ["Milo","Otis","Garfield"]

function destructivelyAppendDriver(name){
  drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name){
  drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift(name)
}

function appendDriver(name){
  let arr = [...drivers,name]
  return arr
}

function prependDriver(name){
  let arr = [name,...drivers]
  return arr
}

function removeLastDriver(name){
  return drivers.slice(0, drivers.length-1)
}

function removeFirstDriver(name){
  return drivers.slice(1)
}
