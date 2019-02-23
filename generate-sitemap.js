const fs = require('fs')
const path = require('path')

const gallery = require('./gallery.json')

let xlmHead = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
        <url>
    <loc>https://stikesicme-jbg.ac.id/gallery.html</loc>
    <lastmod>2019-02-22T06:26:02+00:00</lastmod>
    <priority>0.90</priority>`
let xlmFormat = `<image:image>
<image:title>{{title}}</image:title>
<image:caption>{{caption}}</image:caption>
<image:loc>{{link}}</image:loc>
</image:image>`
let xlmFooter = `</url></urlset>`

const content = gallery.map(image => {
    const link = image.link.replace("https://cdn.jsdelivr.net/gh/nyancodeid/webstikes@master/", "https://stikesicme-jbg.ac.id/")
    const data = {
        title: image.title,
        caption: image.description,
        link,
        time: new Date().toISOString()
    }

    return xlmFormat
        .replace("{{link}}", data.link)
        .replace("{{time}}", data.time)
        .replace("{{title}}", data.title)
        .replace("{{caption}}", data.caption)
})

const result = `${xlmHead}${content.join('\n')}${xlmFooter}`

fs.writeFileSync('sitemap-gallery.xml', result)