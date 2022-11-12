function hexToRgb(hexString){
    var Regex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hexString.replace(Regex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  
  function rgbToHex(r,g,b){
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
  }
  
  module.exports = {
    hexToRgb,
    rgbToHex
  }