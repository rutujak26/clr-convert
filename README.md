# clr-convert
Easy way to convert colors!

Just install using `npm install clr-convert`

## Usage:
### Hex To RGB:
```js
const {hexToRgb} = require('clr-convert')

conversion = hexToRgb('#7289DA')

// logs the rgb value
console.log(conversion)
```
### Hex To HSL:
```js
const {hexToHsl} = require('clr-convert')

conversion = hexToHsl('#7289DA')

// logs the hsl value
console.log(conversion)
```

### RGB To Hex:
```js
const {rgbToHex} = require('clr-convert')

conversion = rgbToHex(114,137,218)

// logs the hex value
console.log(conversion)
```

### RGB To HSL:
```js
const {rgbToHsl} = require('clr-convert')

conversion = rgbToHsl(114,137,218)

// logs the hsl value
console.log(conversion)
```

### HSL to RGB:
```js
const {hslToRgb} = require('clr-convert')

conversion = hslToRgb(60,100,93.9)

// logs the rgb value
console.log(conversion)
```

### HSL to Hex:
```js
const {hslToHex} = require('clr-convert')

conversion = hslToHex(60, 100, 93.9)

// logs the hex value
console.log(conversion)
```