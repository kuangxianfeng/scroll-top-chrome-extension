const ScrollTopKey = "__scroll-top__",
  ScrollTopImgKey = "/assets/logo.png",
  StyleKey = "/styles/index.css"
window.onload = () => {
  const b = document.createElement("div")
  b.className = ScrollTopKey
  const img = document.createElement("img")
  img.src = chrome.runtime.getURL(ScrollTopImgKey)
  b.appendChild(img)
  document.body.appendChild(b)

  b.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
    })
  })

  const style = document.createElement("link")
  style.href = chrome.runtime.getURL(StyleKey)
  style.rel = "stylesheet"
  style.id = "a_a"
  document.head.appendChild(style)
}
