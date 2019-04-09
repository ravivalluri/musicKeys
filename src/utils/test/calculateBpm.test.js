import {calculateBpm} from "../"

describe("calculate bpm from presses", function() {
  describe("if empty array provided", function() {
    it("should return zero", function() {
      const bpm = calculateBpm([])
      expect(bpm).toBe(0)
    })
  })

  describe("if one item array provided", function() {
    it("should return zero", function() {
      const bpm = calculateBpm([12345678])
      expect(bpm).toBe(0)
    })
  })

  describe("if multiple items in one minute", function() {
    it("should return 1", function() {
      const bpm = calculateBpm([0, 60000])
      expect(bpm).toBe(1)
    })

    it("should return 2", function() {
      const bpm = calculateBpm([0, 30000, 60000])
      expect(bpm).toBe(2)
    })

    it("should return 6", function() {
      const bpm = calculateBpm([0, 10000, 20000, 30000, 40000, 50000, 60000])
      expect(bpm).toBe(6)
    })
  })

  describe("if multiple items in half minute", function() {
    it("should return 2", function() {
      const bpm = calculateBpm([0, 30000])
      expect(bpm).toBe(2)
    })

    it("should return 4", function() {
      const bpm = calculateBpm([0, 15000, 30000])
      expect(bpm).toBe(4)
    })

    it("should return zero", function() {
      const bpm = calculateBpm([0, 10000, 20000, 30000])
      expect(bpm).toBe(6)
    })
  })

  describe("if multiple items in 15 seconds", function() {
    it("should return 4", function() {
      const bpm = calculateBpm([0, 15000])
      expect(bpm).toBe(4)
    })

    it("should return 12", function() {
      const bpm = calculateBpm([0, 5000, 10000, 15000])
      expect(bpm).toBe(12)
    })
  })

  describe("if multiple items in short time span", function() {
    it("should return 3 * 20 = 60", function() {
      const bpm = calculateBpm([0, 1000, 2000, 3000])
      expect(bpm).toBe(60)
    })

    it("should return 6 * 20 = 120", function() {
      const bpm = calculateBpm([0, 500, 1000, 1500, 2000, 2500, 3000])
      expect(bpm).toBe(120)
    })
  })
})
