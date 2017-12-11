// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop(name)
}

function destructivelyRemoveFirstDriver() {
  drivers.shift(name)
}

function appendDriver(name) {
  let arr = [...drivers, name];
  return arr;
}

function prependDriver(name) {
  let arr = [name, ...drivers];
  return arr;
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver() {
  return drivers.slice(1)
}
