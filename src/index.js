/**
 * Xave - Tiny HTML5 file save as dialog tool
 * @license MIT
 * @see https://github.com/d3portillo/xave
 * @version 0.0.1
 */

function f() {
  function appendAndRemove(url, name, ext) {
    const utime = new Date().getTime()
    const fullExt = ext ? `.${ext}` : ""
    const a = document.createElement("a")
    a.target = "_blank"
    document.body.appendChild(a)
    a.href = url
    a.download = name ? name : `${utime}${fullExt}`
    a.click()
    setTimeout(() => {
      a.remove()
    }, 250)
  }
  function get(url) {
    return fetch(url).then((r) => {
      return new Promise((resolve) => {
        r.blob().then((blob) => resolve({ blob }))
      })
    })
  }
  function getUrlFor(blob) {
    const url = URL.createObjectURL(blob)
    setTimeout(() => {
      URL.revokeObjectURL(url)
    }, 1000)
    return url
  }
  /**
   *
   * @param { (Blob | String) } url - URL or Blob to download and saveAs
   * @param { String } name - The name and extension of file, ej: name.ext
   */
  function xave(url, name) {
    const type = typeof url
    const isString = type === "string"
    const isBlobURI = isString && url.includes("blob:")
    const isObject = !Array.isArray(url) && type === "object"
    switch (true) {
      case isBlobURI:
        return appendAndRemove(url, name)
      case isString:
        return get(url).then(({ blob }) => {
          appendAndRemove(getUrlFor(blob), name)
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
