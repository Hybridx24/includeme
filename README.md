# includeme.js

includeme.js is a simple JS library that allows the use of `<includeme></includeme>` element tags to include separate html files into a page.

The advantage of using includeme.js over other libraries is that it comes with an `includemeCompleted` event listener, which allows JS to be run *after* all of the external html files have been merged into the DOM. This is especially important if you add JS to the page, but want *all* of the elements to be affected by it - even the newly included HTML.


# Installation

1) (Optional) Install polyfills for `Promise` and `fetch()` for compatibility with older browsers:
> `<script crossorigin="anonymous" src="https://polyfill.io/v3/polyfill.min.js?features=Promise%2Cfetch%2CNodeList.prototype.forEach"></script>`

2) Download `includeme.min.js` located in the `dist/` folder, and include it in your site before your closing body tags.


# How to Use
An example would be putting this at the bottom of your `<body></body>` tags.

```
<script crossorigin="anonymous" src="https://polyfill.io/v3/polyfill.min.js?features=Promise%2Cfetch%2CNodeList.prototype.forEach"></script>
<script type="text/javascript" src="path/to/includeme.min.js"></script>

<script>
    document.addEventListener('includemeCompleted', function (e) {
        console.log('All external HTML files have been loaded!')
    })
</script>
```

and then you can your html files from anywhere in the body as follows:

```
<includeme src="path/to/file.html"></includeme>
```

# Security
Since this library uses `element.outerHTML`, it is important that this library is only used to include html files created by the websites developers. Including external or user submitted files can lead to XSS attacks.

# Compatibility
- Chrome 15+ (Possibly even earlier!)
- Edge 15+
- Safari 7+
- IE 10+
- FF 20+
- Opera 35+