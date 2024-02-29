const partition = (values, low, high) => {
  const pivot = values[high]
  let lowestIdx = low - 1

  for (let i = low; i < high; ++i) {
    if (values[i] < pivot) {
      lowestIdx++
      [values[lowestIdx], values[i]] = [values[i], values[lowestIdx]]
    }
  }

  [values[lowestIdx + 1], values[high]] = [values[high], values[lowestIdx + 1]]

  return lowestIdx + 1
}

export const quicksort = (values, low, high) => {
  if (low < high) {
    const pi = partition(values, low, high)

    quicksort(values, low, pi - 1)
    quicksort(values, pi + 1, high)
  }
}
