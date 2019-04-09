const cleanArray = (arr: string[]) => {
  const returnArr: string[] = []

  arr.map((a: string) => {
    if (!a) { return }
    if (a.trim() === "") { return }

    returnArr.push(a)
  })

  return returnArr
}

export default cleanArray
