// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
    drivers.pop(name)
}

function destructivelyRemoveFirstDriver() {
    drivers.shift(name)
}

function appendDriver(name) {
  return arr = [...drivers, name]
}

function prependDriver(name){
  return arr = [name, ...drivers]
}

function removeLastDriver() {
    return arr = drivers.slice(0, -1)
}

function removeFirstDriver() {
    return drivers.slice(1)
}
