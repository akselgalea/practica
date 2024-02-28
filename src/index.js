import fs from 'node:fs'
import { resolve } from 'node:path'
import { quicksort } from './utils/utils.js'

const pathdb = resolve('database.json')

const file = fs.readFileSync(pathdb).toString()
const data = JSON.parse(file)

const { valores } = data
console.log(valores)

console.time('quicksort')
quicksort(valores)
console.timeEnd('quicksort')
