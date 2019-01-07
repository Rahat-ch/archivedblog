// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-tags-jsx": () => import("/Users/rchowdhury/Desktop/Dev_Stuff/G/RahatCodesBlog/src/pages/tags.jsx" /* webpackChunkName: "component---src-pages-tags-jsx" */),
  "component---src-templates-tag-jsx": () => import("/Users/rchowdhury/Desktop/Dev_Stuff/G/RahatCodesBlog/src/templates/tag.jsx" /* webpackChunkName: "component---src-templates-tag-jsx" */),
  "component---src-templates-post-jsx": () => import("/Users/rchowdhury/Desktop/Dev_Stuff/G/RahatCodesBlog/src/templates/post.jsx" /* webpackChunkName: "component---src-templates-post-jsx" */),
  "component---src-pages-about-jsx": () => import("/Users/rchowdhury/Desktop/Dev_Stuff/G/RahatCodesBlog/src/pages/about.jsx" /* webpackChunkName: "component---src-pages-about-jsx" */),
  "component---src-pages-index-js": () => import("/Users/rchowdhury/Desktop/Dev_Stuff/G/RahatCodesBlog/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/rchowdhury/Desktop/Dev_Stuff/G/RahatCodesBlog/.cache/data.json")

