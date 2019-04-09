const calculateBpm = (presses: number[]): number => {
  const length = presses.length
  if (length < 2) { return 0 }

  const lengthWithoutFirstItem = presses.length - 1

  const firstPress = presses[0]
  const lastPress = presses[length - 1]

  const timeDiff = lastPress - firstPress
  const oneMin = 60000

  return Math.floor((oneMin / timeDiff) * lengthWithoutFirstItem)
}

export default calculateBpm
