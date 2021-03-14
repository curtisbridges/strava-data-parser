import fs from 'fs'


export const readFile = (filename) => {
  if (!fs.existsSync(filename)) {
    throw new Error(`${filename} doesn't exist.`)
  }

  return fs.readFileSync(filename, 'utf8')
}

export const writeFile = (data) => {
  fs.writeFileSync(data)
}

export const parseFile = (filename) => {
  return Papa.parse(filename, { delimiter: '\t' })
}

export const parseData = (buffer) => {
  let activities = []
  const lines = buffer.split('\n')
  for (let line of lines) {
    if (!line.startsWith('Edit  Delete   Share')) {
      // Walk	Sat, 3/13/2021	Afternoon Walk	50:23	3.24 mi	95 ft	9
      const fields = line.split('\t')
      activities.push({
        type: fields[0],
        date: fields[1],
        name: fields[2],
        time: fields[3],
        distance: fields[4].split(' ')[0],
        elevation: fields[5],
        effort: fields[6] ?? 0
      })
    }
  }
  return activities
}


// export const parseData = (data) => {
//   return parse(data, {
//     columns: false,
//     delimiter: '\t',
//     skip_lines_with_error: true,
//   })
// }

// export const parseFile = (filename) => {
//   fs.createReadStream(filename)
//     .pipe(csv.parse({ headers: false }))
//     .on('error', (error) => console.error(error))
//     .on('data', (row) => console.log(row))
//     .on('end', (rowCount) => console.log(`Parsed ${rowCount} rows`))
// }
