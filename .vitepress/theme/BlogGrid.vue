<template>
  <div class="blog" id="blog">
    <div class="blog__inner">
      <div class="blog__header">
        <div class="blog__line">
          <span class="blog__line-bar"></span>
          <span class="blog__line-bar"></span>
        </div>
        <h1 class="blog__heading">
          Notes on <span class="accent">software</span><br />
          <span class="blog__heading-accent">and what we learn building it</span>
        </h1>
      </div>

      <div v-if="posts?.length" class="blog__grid">
        <a
          v-for="post in posts"
          :key="post.link"
          :href="post.link"
          class="blog__card"
        >
          <div class="blog__card-img-wrap">
            <img
              v-if="post.image"
              :src="post.image"
              :alt="post.title"
              class="blog__card-img"
              loading="lazy"
            />
            <div v-else class="blog__card-img-placeholder">
              <span>{{ post.category }}</span>
            </div>
            <span class="blog__card-category">
              {{ post.category }}
            </span>
          </div>
          <div class="blog__card-body">
            <span class="blog__card-date">
              {{ formatDate(post.date) }}
            </span>
            <h3 class="blog__card-title">
              {{ post.title }}
            </h3>
            <p v-if="post.excerpt" class="blog__card-excerpt">
              {{ post.excerpt }}
            </p>
            <div class="blog__card-footer">
              <span class="blog__card-read">Read More</span>
              <span class="blog__card-arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </span>
            </div>
          </div>
        </a>
      </div>

      <div v-else class="blog__empty">
        <p>No blog posts found.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  posts: {
    type: Array,
    default: () => []
  }
})

function formatDate(date) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<style scoped>
.blog .blog__inner {
  max-width: 1400px;
  margin: 0 auto;
}

.blog .blog__header {
  text-align: center;
  margin-bottom: 4rem;
  padding: 5rem 2rem 0;
}

.blog .blog__line {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.25rem;
}

.blog .blog__heading {
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 700;
  color: var(--text-white);
  line-height: 1.2;
  margin: 0 0 1rem;
}

.blog .blog__heading .accent {
  color: var(--vp-c-brand-1);
}

.blog .blog__heading-accent {
  color: var(--text-dim);
}

.blog .blog__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.blog .blog__card {
  background: var(--bg-dark);
  text-decoration: none;
}

.blog .blog__card-img-wrap {
  position: relative;
  height: 200px;
  overflow: hidden;
  background: var(--bg-dark);
}

.blog .blog__card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog .blog__card-img-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--bg-dark), var(--bg-darkest));
  color: var(--text-dim);
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.blog .blog__card-category {
  position: absolute;
  top: 14px;
  left: 14px;
  background: var(--vp-c-brand-1);
  color: var(--text-white);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.3rem 0.7rem;
  border-radius: 4px;
}

.blog .blog__card-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
}

.blog .blog__card-date {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  text-transform: uppercase;
}

.blog .blog__card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-white);
  margin: 0;
  line-height: 1.4;
  flex: 1;
}

.blog .blog__card-excerpt {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-body);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog .blog__card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-faint);
}

.blog .blog__card-read {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-dim);
  transition: color 0.2s ease;
}

.blog .blog__card:hover .blog__card-read {
  color: var(--text-white);
}

.blog .blog__card-arrow {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--border-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-white);
  transition: background 0.2s ease, border-color 0.2s ease;
  flex-shrink: 0;
}

.blog .blog__card:hover .blog__card-arrow {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.blog .blog__empty {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-medium);
  font-size: 1.1rem;
}

@media (max-width: 1024px) {
  .blog { padding: 4rem 1.5rem; }
  .blog .blog__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .blog { padding: 3rem 1rem; }
  .blog .blog__header { flex-direction: column; align-items: flex-start; }
  .blog .blog__grid { grid-template-columns: 1fr; }
  .blog .blog__card-img-wrap { height: 180px; }
}
</style>