import {findKeys} from "../"

describe("get array of major keys from array of notes", function() {
  describe("if empty array of notes provided", function() {
    it("should return empty array", function() {
      const keys = findKeys([])
      expect(keys.length).toBe(0)
    })
  })

  describe("one note passed", function() {
    it("a should return 7 keys", function() {
      const keys = findKeys(["a"])
      expect(keys.length).toBe(7)
    })

    it("b should return 7 keys", function() {
      const keys = findKeys(["b"])
      expect(keys.length).toBe(7)
    })

    it("c should return 8 keys", function() {
      const keys = findKeys(["c"])
      expect(keys.length).toBe(7)
    })

    it("c# should return 8 keys", function() {
      const keys = findKeys(["c#"])
      expect(keys.length).toBe(7)
    })
  })

  describe("two notes passed", function() {
    it("a, and b should return 5 keys", function() {
      const keys = findKeys(["a", "b"])
      expect(keys.length).toBe(5)
    })

    it("b, and c# should return 5 keys", function() {
      const keys = findKeys(["b", "c#"])
      expect(keys.length).toBe(5)
    })

    it("if one is undefined, it gets ignored", function() {
      const keys = findKeys(["b", undefined])
      expect(keys.length).toBe(7)
    })
  })

  describe("three notes passed", function() {
    it("a, and b, and c should return 2 keys", function() {
      const keys = findKeys(["a", "b", "c"])
      expect(keys.length).toBe(2)
      expect(keys[0].key).toBe("c")
      expect(keys[1].key).toBe("g")
    })

    it("b, and c#, and d should return 2 keys", function() {
      const keys = findKeys(["b", "c#", "d"])
      expect(keys.length).toBe(2)
      expect(keys[0].key).toBe("d")
      expect(keys[1].key).toBe("a")
    })
  })

  describe("four notes passed", function() {
    it("a, and b, and c, and d should return 2 keys", function() {
      const keys = findKeys(["a", "b", "c", "d"])
      expect(keys.length).toBe(2)
      expect(keys[0].key).toBe("c")
      expect(keys[1].key).toBe("g")
    })

    it("b, and c#, and d, and d# should return no keys", function() {
      const keys = findKeys(["b", "c#", "d", "d#"])
      expect(keys.length).toBe(0)
    })
  })

  describe("seven notes passed", function() {
    it("a through c should return 1 key", function() {
      const keys = findKeys(["a", "b", "c", "d", "e", "f", "g"])
      expect(keys.length).toBe(1)
      expect(keys[0].key).toBe("c")
    })
  })
})
