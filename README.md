# Xave - HTML5 JS SaveAs tool

This is a tiny tool to save stuff. Opens a saveAs like dialog.

```
yarn add xave
```

```
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
