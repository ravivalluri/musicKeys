import {cleanArray} from "../"

describe("clean array", function() {
  describe("if empty array provided", function() {
    it("should return empty array", function() {
      const arr = cleanArray([])
      expect(arr.length).toBe(0)
    })
  })

  describe("includes undefined", function() {
    it("one value, one undefined should return one item", function() {
      const arr = cleanArray(["a", undefined])
      expect(arr.length).toBe(1)
      expect(arr[0]).toBe("a")
    })

    it("one value, one undefined should return one item", function() {
      const arr = cleanArray([undefined, "a"])
      expect(arr.length).toBe(1)
      expect(arr[0]).toBe("a")
    })
  })

  describe("includes empty string", function() {
    it("one value, one undefined should return one item", function() {
      const arr = cleanArray(["a", ""])
      expect(arr.length).toBe(1)
      expect(arr[0]).toBe("a")
    })

    it("one value, one undefined should return one item", function() {
      const arr = cleanArray(["", "a"])
      expect(arr.length).toBe(1)
      expect(arr[0]).toBe("a")
    })
  })
})
