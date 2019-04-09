import {toPosition} from "../"

describe("toPosition", function() {
  describe("if 1 provided", function() {
    it("should 1st", function() {
      expect(toPosition(1)).toBe("1st")
    })
  })

  describe("if 2 provided", function() {
    it("should 2nd", function() {
      expect(toPosition(2)).toBe("2nd")
    })
  })

  describe("if 3 provided", function() {
    it("should 3rd", function() {
      expect(toPosition(3)).toBe("3rd")
    })
  })

  describe("if 4 provided", function() {
    it("should 4th", function() {
      expect(toPosition(4)).toBe("4th")
    })
  })

  describe("if 5 provided", function() {
    it("should 5th", function() {
      expect(toPosition(5)).toBe("5th")
    })
  })
})
