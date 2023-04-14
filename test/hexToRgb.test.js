const { hexToRgb } = require('clr-convert')

describe("Color conversion utility functions", () => {
  describe("hexToRgb", () => {
    test("converts a hex color string to an RGB array", () => {
      expect(hexToRgb("#ff0000")).toEqual([255, 0, 0]);
      expect(hexToRgb("#00ff00")).toEqual([0, 255, 0]);
      expect(hexToRgb("#0000ff")).toEqual([0, 0, 255]);
      expect(hexToRgb("#ffffff")).toEqual([255, 255, 255]);
      expect(hexToRgb("#000000")).toEqual([0, 0, 0]);
    });
  });
});
