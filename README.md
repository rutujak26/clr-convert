# clr-convert

![Tests](https://github.com/rutujak26/clr-convert/actions/workflows/tests.yml/badge.svg)

Easy way to convert colors!

Just install using `npm install clr-convert`

## Usage:

### Hex To RGB:

```js
const { hexToRgb } = require("clr-convert");

console.log(hexToRgb("#7288DA")); // Should output [114, 137, 218]
```

### Hex To HSL:

```js
const { hexToHsl } = require("clr-convert");

console.log(hexToHsl("#7288DA")); // Should output [3.783333333333333, 0.58, 0.65]
```

### RGB To Hex:

```js
const { rgbToHex } = require("clr-convert");

console.log(rgbToHex(114, 136, 218)); // Should output #7288da
```

### RGB To HSL:

```js
const { rgbToHsl } = require("clr-convert");

console.log(rgbToHsl(114, 137, 218)); // Should output [3.783333333333333, 0.58, 0.65]
```

### HSL to RGB:

```js
const { hslToRgb } = require("clr-convert");

console.log(hslToRgb(3.783333333333333, 0.58, 0.65)); // Should output [114, 137, 218]
```

### HSL to Hex:

```js
const { hslToHex } = require("clr-convert");

console.log(hslToHex(3.783333333333333, 0.58, 0.65)); // Should output #7289da
```
