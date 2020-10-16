# HTML5 SaveAs helper

![Example](./example.gif)

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
<script src="https://d3portillo.github.io/xave/src/index.min.js"></script>
```
