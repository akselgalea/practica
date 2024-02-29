import { quicksort } from './algorithms/index.js'

const values = [5, 10, 7, 20, 25, 22, 17, 18, 1, 2, 3, 4, 3, 4, 4, 4]
const quicksortValues = [...values]
console.log(quicksortValues)

console.time('quicksort')
quicksort(quicksortValues, 0, values.length - 1)
console.log('quicksort:', quicksortValues)
console.timeEnd('quicksort')
