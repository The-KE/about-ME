const head = document.querySelector('#top')
function wow() {
  const e = document.createElement('p')
  e.style.fontSize = '20px'
  e.style.color = '#FFFFFF'
  e.style.fontFamily = 'monospace'
  e.textContent = "Also known as The KE, UnknownKE(123), and Kareemsythah"
  head.append(e)
}
setTimeout(() => wow(), 2500)
