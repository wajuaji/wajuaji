import { createContentLoader } from 'vitepress'

export default createContentLoader('portfolio/*.md', {
  excerpt: false,
  transform(rawData) {
    return rawData
      .filter((page) => page.frontmatter.title)
      .map((page) => ({
        title: page.frontmatter.title,
        tag: page.frontmatter.tag,
        desc: page.frontmatter.subtitle,
        image: page.frontmatter.image,
        link: page.url,
      }))
  }
})