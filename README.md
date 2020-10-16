# Xave - HTML5 JS SaveAs tool

A tiny ~.5kb tool to save stuff. It opens a saveAs like dialog on browser.

![Size](https://img.shields.io/bundlephobia/minzip/xave)
![Example](https://www.dropbox.com/s/6loiwgznoiihb0w/example.gif?raw=1)

```
yarn add xave
```

```
npm install xave
```

## Usage

The xave function accepts 2 arguments. First argument is an url string, Blob or Blob URI, second one is the `"name.extension"` string of the file you want to save.

`xave(Blob|URL|URI, "name.extension")`

```js
import save from "xave"
// Or
const save = require("xave")

const blob = new Blob(["xd"], { type: "text/plain" })
save(blob, "text.txt")
```

```js
const save = require("xave")

//PDF
const blob = new Blob(["someencodedcontent"], { type: "application/pdf" })
save(blob, "report.pdf")

//images
const image = new Blob(["someencodedcontent"], { type: "image/png" })
save(image, "image.png")

//Canvas
const canvas = window.canvas
const ctx = canvas.getContext("2d")
ctx.fillStyle = "red"
ctx.beginPath()
ctx.arc(15, 15, 15, 0, Math.PI * 2, true)
ctx.closePath()
ctx.fill()
const url = canvas.toDataURL()
save(url)
```

## CDN

```html
<script src="https://d3portillo.github.io/xave/src/index.min.js"></script>
```

## Playground and More

- [Observable](https://observablehq.com/@d3portillo/xave)
- [Source](https://github.com/D3Portillo/xave/tree/main/src)
