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

function appendDriver(name) {
  const driversNew = [...drivers, name]
  return driversNew
}

function prependDriver(name) {
  const driversNew = [name, ...drivers]
  return driversNew
}

function removeLastDriver() {
  const copyDrivers = drivers.slice(0, -1)
  return copyDrivers
}

function removeFirstDriver() {
  const copyDrivers = drivers.slice(1)
  return copyDrivers
}
