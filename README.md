# Xave - HTML5 JS SaveAs tool

A a tiny tool to save stuff, it pens a saveAs like dialog.

![Size](https://img.shields.io/bundlephobia/minzip/xave)
![Example](https://www.dropbox.com/s/6loiwgznoiihb0w/example.gif?raw=1)

```
yarn add xave
```

```
npm install xave
```

## Usage

You can execute the xave function and pass an url string, Blob or Blob URI as first arg. Second arg is the name and extension of file you want the tool to save the file.

`xave(Blob|URL|URI, "name.extension")`

```js
import save from "xave"
const blob = new Blob(["xd"], { type: "text/plain" })
save(blob, "text.txt")
```

```js
const save = require("xave")
const blob = new Blob(["xd"], { type: "text/plain" })
save(blob, "text.txt")
```

## CDN

```html
<script src="https://d3portillo.github.io/xave/src/index.min.js"></script>
```

## Playground and More

- [Observable](https://observablehq.com/@d3portillo/xave)
- [Source](https://github.com/D3Portillo/xave/tree/main/src)
