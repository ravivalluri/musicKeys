const toPosition = (int: number) => {
  switch (int) {
    case 3:
      return "3rd"
    case 2:
      return "2nd"
    case 1:
      return "1st"
    default:
      return `${int}th`
  }
}

export default toPosition
