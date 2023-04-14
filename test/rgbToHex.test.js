const { rgbToHex } = require("clr-convert");

describe("Color conversion utility functions", () => {
  describe("rgbToHex", () => {
    test("converts an RGB array to a hex color string", () => {
      expect(rgbToHex(255, 0, 0)).toBe("#ff0000");
      expect(rgbToHex(0, 255, 0)).toBe("#00ff00");
      expect(rgbToHex(0, 0, 255)).toBe("#0000ff");
      expect(rgbToHex(255, 255, 255)).toBe("#ffffff");
      expect(rgbToHex(0, 0, 0)).toBe("#000000");
    });
  });
});
