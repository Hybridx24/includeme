const onReady = fn => {
    (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") 
    ? fn() 
    : document.addEventListener('DOMContentLoaded', fn)
}

const handleHTTPErrors = response => {
    if (!response.ok) { throw Error(response.status + " " + response.statusText) }
    return response
}

const promises = []
document.querySelectorAll('includeme').forEach(el => {
    const url = el.getAttribute('src')

    if (!url) { return }

    const prms = fetch(url)
    .then(handleHTTPErrors)
    .then(response => response.text())
    .then(html => el.outerHTML = html)
    .catch(err => console.log(err))

    promises.push(prms)
})

Promise.all(promises).then(() => {
    const ev = new Event('includemeCompleted')
    onReady(() => document.dispatchEvent(ev))
})