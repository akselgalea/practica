export const sleep = ms => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export const quicksort = (values, start = 0, end = values.length - 1) => {
  const firstPivotIndex = end / 2 | 0
  const pivot = values[firstPivotIndex]

  for (let i = start; i <= end; ++i) {
    // if ()
  }

  return values
}
