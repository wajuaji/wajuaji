import { createContentLoader } from 'vitepress'

export default createContentLoader('blog/*.md', {
  excerpt: false,

  transform(raw) {
    return raw
      .filter(page =>
        page.url !== '/blog/' &&
        page.frontmatter?.title
      )
      .map(page => ({
        title: page.frontmatter.title ?? '',
        category: page.frontmatter.category ?? 'Uncategorized',
        date: page.frontmatter.date ?? '',
        readTime: page.frontmatter.readTime ?? '',
        subtitle: page.frontmatter.subtitle ?? '',
        excerpt: page.frontmatter.excerpt ?? '',
        image: page.frontmatter.image ?? '',
        link: page.url ?? ''
      }))
      .sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    )
  }
})