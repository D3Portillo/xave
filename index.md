# Xave - HTML5 SaveAs helper

This is a tiny tool to save stuff. Opens a saveAs like dialog.

```
yarn add xave
npm install xave
```

## Usage

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
<script src="https://d3portillo.me/xave/src/index.min.js"></script>
```