/**
 * Xave - Tiny HTML5 file save as dialog tool
 * @license MIT
 * @see https://github.com/d3portillo/xave
 * @version 0.0.3
 */

function f() {
  function appendAndRemove(url, name, ext) {
    const utime = new Date().getTime()
    const fullExt = ext ? `.${ext}` : ""
    const a = document.createElement("a")
    a.target = "_blank"
    a.rel = "noopener"
    a.href = url
    a.download = name ? name : `${utime}${fullExt}`
    document.body.appendChild(a)
    a.click()
    setTimeout(() => {
      a.remove()
    }, 250)
  }
  function get(url) {
    return fetch(url).then((r) => {
      const type = r.headers.get("content-type").split(";")[0].trim()
      return new Promise((resolve) => {
        r.blob().then((blob) => resolve({ blob, type }))
      })
    })
  }
  function getUrlFor(blob) {
    const url = URL.createObjectURL(blob)
    setTimeout(() => {
      URL.revokeObjectURL(url)
    }, 1e4)
    return url
  }
  /**
   * Xave - xave( URL | Blob | URI , "some.png")
   * @returns { void }
   */
  function xave(url, name) {
    const type = typeof url
    const isString = type === "string"
    const isBlobURI = isString && url.includes("blob:")
    const isObject = !Array.isArray(url) && type === "object"
    switch (true) {
      case isBlobURI:
        return get(url).then(({ type }) => {
          const ext = type.split("/").pop()
          appendAndRemove(url, name, ext)
        })
      case isString:
        return get(url).then(({ blob, type }) => {
          const ext = type.split("/").pop()
          const turl = getUrlFor(blob)
          appendAndRemove(turl, name, ext)
        })
      case isObject:
        return appendAndRemove(getUrlFor(url), name)
      default:
        console.error("xave: I couln't download that : (")
    }
  }
  return xave
}

"object" == typeof exports && "object" == typeof module
  ? (module.exports = f())
  : "object" == typeof exports
  ? (exports.xave = f())
  : (this.xave = f())
