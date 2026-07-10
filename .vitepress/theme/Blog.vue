<template>
  <section class="blog" id="blog">
    <div class="blog__inner">
      <div class="blog__header">
        <div class="blog__header-left">
          <div class="blog__line">
            <span class="blog__line-bar"></span>
            <span class="blog__line-label">From the Blog</span>
          </div>
          <h2 class="blog__heading">
            Notes on <span class="accent">software</span><br />
            <span class="blog__heading-accent">and what we learn building it</span>
          </h2>
        </div>

        <a href="/blog" class="blog__view-all">
          View all posts
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>

      <div class="blog__grid">
        <a
          v-for="post in posts"
            :key="post.title"
            :href="post.link"
            class="blog__card"
            >
            <div class="blog__card-img-wrap">
                <img :src="post.image" :alt="post.title" class="blog__card-img" />
                <span class="blog__card-tag">{{ post.category }}</span>
            </div>
            <div class="blog__card-body">
                <span class="blog__card-date">{{ formatDate(post.date) }}</span>
                <h3 class="blog__card-title">{{ post.title }}</h3>
                <div class="blog__card-footer">
                <span class="blog__card-read">Read More</span>
                <span class="blog__card-arrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </span>
                </div>
            </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { data as allPosts } from '../../blog/posts.data.mts'

const posts = allPosts.slice(0, 3)

function formatDate(date) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.blog {
  background: var(--bg-darkest);
  padding: 6rem 5rem;
}

.blog__inner {
  max-width: 1400px;
  margin: 0 auto;
}

.blog__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 3rem;
}

.blog__line {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.25rem;
}

.blog__line-bar {
  display: block;
  width: 32px;
  height: 2px;
  background: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.blog__line-label {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.blog__heading {
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 700;
  color: var(--text-white);
  line-height: 1.2;
  margin: 0;
}

.blog__heading .accent {
  color: var(--vp-c-brand-1);
}

.blog__heading-accent {
  color: var(--text-dim);
}

.blog__view-all {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-medium);
  text-decoration: none;
  border-bottom: 1px solid var(--border-muted);
  padding-bottom: 2px;
  white-space: nowrap;
  flex-shrink: 0;
  margin-bottom: 0.4rem;
  transition: color 0.2s, border-color 0.2s;
}

.blog__view-all:hover {
  color: var(--text-white);
  border-color: var(--text-dim);
}

.blog__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.blog__card {
  background: var(--bg-dark);
}

.blog__card-img-wrap {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.blog__card-tag {
  position: absolute;
  top: 14px;
  left: 14px;
  background: var(--vp-c-brand-1);
  color: var(--text-white);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.3rem 0.7rem;
  border-radius: 4px;
  letter-spacing: 0.02em;
}

.blog__card-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
}

.blog__card-date {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--text-muted);
}

.blog__card-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-white);
  margin: 0;
  line-height: 1.4;
  flex: 1;
}

.blog__card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-faint);
}

.blog__card-read {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-dim);
  transition: color 0.2s;
}

.blog__card:hover .blog__card-read {
  color: var(--text-white);
}

.blog__card-arrow {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--border-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-white);
  transition: background 0.2s, border-color 0.2s;
  flex-shrink: 0;
}

.blog__card:hover .blog__card-arrow {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

@media (max-width: 1024px) {
  .blog { padding: 4rem 1.5rem; }
  .blog__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .blog { padding: 3rem 1rem; }
  .blog__header { flex-direction: column; align-items: flex-start; }
  .blog__grid { grid-template-columns: 1fr; }
}
</style>