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

### RGB To Hex:
```js
const {rgbToHex} = require('clr-convert')

conversion = rgbToHex(114,137,218)

// logs the hex value
console.log(conversion)
```