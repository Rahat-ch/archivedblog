const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-tags-jsx": hot(preferDefault(require("/Users/rchowdhury/Desktop/Dev_Stuff/G/RahatCodesBlog/src/pages/tags.jsx"))),
  "component---src-templates-tag-jsx": hot(preferDefault(require("/Users/rchowdhury/Desktop/Dev_Stuff/G/RahatCodesBlog/src/templates/tag.jsx"))),
  "component---src-templates-post-jsx": hot(preferDefault(require("/Users/rchowdhury/Desktop/Dev_Stuff/G/RahatCodesBlog/src/templates/post.jsx"))),
  "component---src-pages-about-jsx": hot(preferDefault(require("/Users/rchowdhury/Desktop/Dev_Stuff/G/RahatCodesBlog/src/pages/about.jsx"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/rchowdhury/Desktop/Dev_Stuff/G/RahatCodesBlog/src/pages/index.js")))
}

