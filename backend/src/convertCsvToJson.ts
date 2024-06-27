import fs from 'fs'
import path from 'path'
import csv from 'csv-parser'

const csvFilePath = path.join(__dirname, '../data/tableData.csv')
const jsonFilePath = path.join(__dirname, '../data/tableData.json')

const results: any[] = []

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    fs.writeFile(jsonFilePath, JSON.stringify(results, null, 2), (err) => {
      if (err) {
        console.error('Error writing JSON file:', err)
      } else {
        console.log('JSON file has been saved.')
      }
    })
  })
