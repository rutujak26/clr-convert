const { hexToHsl } = require("clr-convert");

describe("Color conversion utility functions", () => {
  describe("hexToHsl", () => {
    test("converts a hex color string to HSL", () => {
      expect(hexToHsl("#ff0000")).toEqual([0, 1, 0.5]);
      expect(hexToHsl("#00ff00")).toEqual([0.3333333333333333, 1, 0.5]);
      expect(hexToHsl("#0000ff")).toEqual([0.6666666666666666, 1, 0.5]);
      expect(hexToHsl("#ffffff")).toEqual([0, 0, 1]);
      expect(hexToHsl("#000000")).toEqual([0, 0, 0]);
    });
  });
});
