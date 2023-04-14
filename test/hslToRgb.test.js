const {hslToRgb} = require('clr-convert')

describe("hslToRgb", () => {
  test("converts an HSL array to an RGB array", () => {
    expect(hslToRgb(0, 1, 0.5)).toEqual([255, 0, 0]);
    expect(hslToRgb(0.3333333333333333, 1, 0.5)).toEqual([0, 255, 0]);
    expect(hslToRgb(0.6666666666666666, 1, 0.5)).toEqual([0, 0, 255]);
    expect(hslToRgb(0, 0, 1)).toEqual([255, 255, 255]);
    expect(hslToRgb(0, 0, 0)).toEqual([0, 0, 0]);
  });
});
