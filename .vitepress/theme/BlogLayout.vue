<template>
  <div class="blog-page">
    <div class="blog-page__hero">
      <div class="blog-page__hero-inner">
        <a href="/blog" class="blog-page__back">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Blog
        </a>
        
        <h1 class="blog-page__title">{{ frontmatter.title }}</h1>
        
        <div class="blog-page__meta">
          <span v-if="frontmatter.date" class="blog-page__date">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            {{ formatDate(frontmatter.date) }}
          </span>
          <span v-if="frontmatter.readTime" class="blog-page__read-time">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            {{ frontmatter.readTime }} min read
          </span>
        </div>
        
        <p v-if="frontmatter.subtitle || frontmatter.excerpt" class="blog-page__subtitle">
          {{ frontmatter.subtitle || frontmatter.excerpt }}
        </p>
      </div>
    </div>

    <div v-if="frontmatter.image || frontmatter.coverImage" class="blog-page__featured-image">
      <div class="blog-page__featured-image-inner">
        <img 
          :src="frontmatter.image || frontmatter.coverImage" 
          :alt="frontmatter.title"
          loading="lazy"
        />
      </div>
    </div>

    <div class="blog-page__body">
      <div class="blog-page__content">
        <slot />
      </div>
    </div>

    <div class="blog-page__cta">
      <h2>Enjoyed this article?</h2>
      <p>Check out more insights on our blog or get in touch to discuss your project.</p>
      <div class="blog-page__cta-buttons">
        <a href="/blog" class="blog-page__cta-btn blog-page__cta-btn--secondary">Read More</a>
        <a href="/#contact" class="blog-page__cta-btn">Get In Touch</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()

function formatDate(date) {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.blog-page__hero {
  background: var(--bg-dark);
  padding-top: 6rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: center;
}

.blog-page__hero-inner {
  max-width: 800px;
  width: 100%;
}

.blog-page__back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: var(--text-dim);
  text-decoration: none;
  margin-bottom: 1.5rem;
  transition: color 0.2s ease;
}

.blog-page__back:hover {
  color: var(--vp-c-brand-1);
}

.blog-page__title {
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 700;
  color: var(--text-white);
  margin: 0 0 1rem;
  line-height: 1.2;
}

.blog-page__meta {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}

.blog-page__date,
.blog-page__read-time {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  color: var(--text-medium);
}

.blog-page__date svg,
.blog-page__read-time svg {
  flex-shrink: 0;
}

.blog-page__subtitle {
  font-size: 1.1rem;
  color: var(--text-medium);
  line-height: 1.7;
  margin: 0;
}

.blog-page__featured-image {
  background: var(--bg-dark);
  padding: 0 5rem 4rem;
  display: flex;
  justify-content: center;
}

.blog-page__featured-image-inner {
  max-width: 800px;
  width: 100%;
}

.blog-page__featured-image img {
  width: 100%;
  height: auto;
  max-height: 450px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid var(--border-faint);
}

.blog-page__body {
  background: var(--bg-darkest);
  padding: 4rem 5rem;
  display: flex;
  justify-content: center;
}

.blog-page__content {
  max-width: 800px;
  width: 100%;
}

.blog-page__content :deep(h2) {
  color: var(--text-white);
  font-size: 1.7rem;
  font-weight: 700;
  margin: 3rem 0 1.25rem;
  line-height: 1.3;
}

.blog-page__content :deep(h2:first-child) {
  margin-top: 0;
}

.blog-page__content :deep(h3) {
  color: var(--text-white);
  font-size: 1.2rem;
  font-weight: 700;
  margin: 2rem 0 0.75rem;
}

.blog-page__content :deep(p) {
  font-size: 1rem;
  line-height: 1.85;
  color: var(--text-body);
  margin: 0 0 1.25rem;
}

.blog-page__content :deep(ul),
.blog-page__content :deep(ol) {
  margin: 0 0 1.5rem;
  padding-left: 1.25rem;
}

.blog-page__content :deep(li) {
  font-size: 1rem;
  line-height: 1.85;
  color: var(--text-body);
  margin-bottom: 0.5rem;
}

.blog-page__content :deep(li::marker) {
  color: var(--vp-c-brand-1);
}

.blog-page__content :deep(strong) {
  color: var(--text-white);
  font-weight: 600;
}

.blog-page__content :deep(hr) {
  border: none;
  border-top: 1px solid var(--border-subtle);
  margin: 3rem 0;
}

.blog-page__content :deep(blockquote) {
  border-left: 3px solid var(--vp-c-brand-1);
  padding-left: 1.25rem;
  margin: 1.5rem 0;
  color: var(--text-subtle);
  font-style: italic;
}

.blog-page__content :deep(code) {
  background: var(--border-faint);
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  padding: 0.2em 0.45em;
  font-size: 0.875em;
  color: var(--vp-c-brand-1);
}

.blog-page__content :deep(pre) {
  background: var(--bg-medium);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  padding: 1.5rem;
  overflow-x: auto;
  margin: 1.5rem 0;
}

.blog-page__content :deep(pre code) {
  background: transparent;
  border: none;
  padding: 0;
  color: var(--text-bright);
  font-size: 0.9rem;
}

.blog-page__cta {
  background: var(--bg-darkest);
  text-align: center;
  padding: 5rem 2rem;
  border-top: 1px solid var(--border-faint);
}

.blog-page__cta h2 {
  color: var(--text-white);
  font-size: 1.8rem;
  margin: 0 0 0.5rem;
}

.blog-page__cta p {
  color: var(--text-medium);
  margin: 0 0 1.75rem;
}

.blog-page__cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.blog-page__cta-btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: var(--vp-c-brand-1);
  color: var(--text-white);
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.1s ease;
}

.blog-page__cta-btn:hover {
  background: var(--vp-c-brand-2);
}

.blog-page__cta-btn:active {
  transform: scale(0.97);
}

.blog-page__cta-btn--secondary {
  background: transparent;
  color: var(--text-light);
  border: 1px solid var(--border-faint);
}

.blog-page__cta-btn--secondary:hover {
  background: rgba(255,255,255,0.05);
  border-color: var(--text-light);
}

@media (max-width: 768px) {
  .blog-page__hero {
    padding: 100px 1.5rem 3rem;
  }

  .blog-page__featured-image {
    padding: 0 1.5rem 3rem;
  }

  .blog-page__body {
    padding: 2.5rem 1.5rem;
  }

  .blog-page__meta {
    gap: 1rem;
  }

  .blog-page__cta h2 {
    font-size: 1.4rem;
  }

  .blog-page__cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .blog-page__cta-btn {
    width: 100%;
    max-width: 280px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .blog-page__hero {
    padding: 80px 1rem 2rem;
  }

  .blog-page__featured-image {
    padding: 0 1rem 2rem;
  }

  .blog-page__body {
    padding: 2rem 1rem;
  }
}
</style>