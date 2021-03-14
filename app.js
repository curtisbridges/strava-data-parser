import { readFile, writeFile, parseData } from './file.js'

// read in data file
const buffer = readFile('data.txt')
// console.log(buffer)

// filter out chaff
// const filtered = data.match(/^(?!Edit  Delete   Share)/gm)

// collect in data structure
const activities = parseData(buffer)

// calculate stats
const reducer = (total, activity) => total += parseFloat(activity.distance)
let totalDistance = activities.reduce(reducer, 0.0)
console.log(totalDistance)

// write out new data file
//writeFile(filter)
