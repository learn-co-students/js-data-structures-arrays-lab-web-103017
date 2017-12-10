// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  return drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift();
}

function appendDriver(name) {
  return newarray = [...drivers, name];
}

function prependDriver(name) {
  return newarray = [name, ...drivers];
}

function removeLastDriver() {
  return newarray = drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver() {
  return newarray = drivers.slice(1)
}
