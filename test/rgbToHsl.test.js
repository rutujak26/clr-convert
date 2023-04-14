const { rgbToHsl } = require("clr-convert");

describe("Color conversion utility functions", () => {
  describe("rgbToHsl", () => {
    test("converts an RGB array to HSL", () => {
      expect(rgbToHsl(255, 0, 0)).toEqual([0, 1, 0.5]);
      expect(rgbToHsl(0, 255, 0)).toEqual([0.3333333333333333, 1, 0.5]);
      expect(rgbToHsl(0, 0, 255)).toEqual([0.6666666666666666, 1, 0.5]);
      expect(rgbToHsl(255, 255, 255)).toEqual([0, 0, 1]);
      expect(rgbToHsl(0, 0, 0)).toEqual([0, 0, 0]);
    });
  });
});
