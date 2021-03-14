import { readFile, writeFile, parseData } from './file.js'

// read in data file
const buffer = readFile('data.txt')
// console.log(buffer)

// filter out chaff
// const filtered = data.match(/^(?!Edit  Delete   Share)/gm)

// collect in data structure
const activities = parseData(buffer)

const walks = activities?.Walk
const runs = activities?.Run

// calculate stats
const reducer = (total, activity) => total += parseFloat(activity.distance)

const totalWalkDistance = walks.reduce(reducer, 0.0)
console.log('totalWalkDistance', totalWalkDistance)

const totalRunDistance = runs.reduce(reducer, 0.0)
console.log('totalRunDistance', totalRunDistance)

// write out new data file
//writeFile(filter)
