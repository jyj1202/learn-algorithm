import { describe, it, expect } from "vitest";
import { generateVortex, generateVortexFromArray } from "../vortex-array";

describe("generateVortex", () => {
  it('should generate a vortex array', () => {
    expect(generateVortex(3, 3)).toEqual([
      [0, 1, 2],
      [7, 8, 3],
      [6, 5, 4]
    ]);
  })

  it('should generate a vortex array', () => {
    expect(generateVortex(3, 4)).toEqual([
      [0, 1, 2, 3],
      [9, 10, 11, 4],
      [8, 7, 6, 5],
    ]);
  })

  it('should generate a empty array when row and column are 0', () => {
    expect(generateVortex(0, 0)).toEqual([]);
  })

  it('should throw error when row and column are less than 0', () => {
    expect(() => generateVortex(-1, 0)).toThrowError();
  })
});

describe("generateVortexFromArray", () => {
  it('should generate a vortex array from a source array', () => {
    expect(generateVortexFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 3)).toEqual([
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5]
    ]);
  })
});
