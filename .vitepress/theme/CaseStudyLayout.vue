<template>
  <div class="case">
    <div class="case__hero">
      <div v-if="frontmatter.image" class="case__hero-img-wrap">
        <img :src="frontmatter.image" :alt="frontmatter.title" class="case__hero-img" />
        <div class="case__hero-overlay"></div>
      </div>
      <div class="case__hero-inner">
        <h1 class="case__title">{{ frontmatter.title }}</h1>
        <p class="case__subtitle">{{ frontmatter.subtitle }}</p>
        <div class="case__meta">
          <div v-if="frontmatter.client" class="case__meta-item">
            <span class="case__meta-label">Client</span>
            <span class="case__meta-value">{{ frontmatter.client }}</span>
          </div>
          <div v-if="frontmatter.year" class="case__meta-item">
            <span class="case__meta-label">Year</span>
            <span class="case__meta-value">{{ frontmatter.year }}</span>
          </div>
          <div v-if="frontmatter.service" class="case__meta-item">
            <span class="case__meta-label">Service</span>
            <span class="case__meta-value">{{ frontmatter.service }}</span>
          </div>
          <div v-if="frontmatter.live" class="case__meta-item">
            <span class="case__meta-label">Live</span>
            <a :href="frontmatter.live" target="_blank" class="case__meta-link">
              View Project
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="case__body">
      <div class="case__content">
        <slot />
      </div>
    </div>

    <div class="case__cta">
      <h2>Have a similar project in mind?</h2>
      <p>Tell us what you need and we'll take it from there.</p>
      <a href="/#contact" class="case__cta-btn">Get In Touch</a>
    </div>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<style scoped>
.case__hero {
  position: relative;
  background: var(--bg-dark);
  min-height: 480px;
  display: flex;
  align-items: flex-end;
}

.case__hero-img-wrap {
  position: absolute;
  inset: 0;
}

.case__hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.case__hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(15,17,23,0.97) 0%,
    rgba(15,17,23,0.7) 50%,
    rgba(15,17,23,0.3) 100%
  );
}

.case__hero-inner {
  position: relative;
  z-index: 1;
  max-width: 860px;
  margin: 0 auto;
  width: 100%;
  padding: 8rem 0 4rem;
}

.case__title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--text-white);
  margin: 0 0 1rem;
  line-height: 1.2;
}

.case__subtitle {
  font-size: 1.05rem;
  color: var(--text-body);
  line-height: 1.7;
  margin: 0 0 2rem;
}

.case__meta {
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-subtle);
}

.case__meta-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.case__meta-label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.case__meta-value {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-white);
}

.case__meta-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: opacity 0.2s;
}

.case__meta-link:hover { opacity: 0.8; }

.case__body {
  background: var(--bg-darkest);
  padding: 5rem;
  display: flex;
  justify-content: center;
}

.case__content {
  max-width: 860px;
  width: 100%;
}

.case__content :deep(h2) {
  color: var(--text-white);
  font-size: 1.7rem;
  font-weight: 700;
  margin: 3rem 0 1.25rem;
  line-height: 1.3;
}

.case__content :deep(h2:first-child) { margin-top: 0; }

.case__content :deep(h3) {
  color: var(--text-white);
  font-size: 1.2rem;
  font-weight: 700;
  margin: 2rem 0 0.75rem;
}

.case__content :deep(p) {
  font-size: 1rem;
  line-height: 1.85;
  color: var(--text-body);
  margin: 0 0 1.25rem;
}

.case__content :deep(ul) {
  list-style: none;
  padding-left: 1.25rem;
}

.case__content :deep(ul li) {
  position: relative;
  padding-left: 1rem;
}

.case__content :deep(ul li::before) {
  content: '';
  position: absolute;
  left: 0;
  top: 0.65em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.case__content :deep(ul),
.case__content :deep(ol) {
  margin: 0 0 1.5rem;
  padding-left: 1.25rem;
}

.case__content :deep(li) {
  font-size: 1rem;
  line-height: 1.85;
  color: var(--text-body);
  margin-bottom: 0.5rem;
}

.case__content :deep(strong) {
  color: var(--text-white);
  font-weight: 600;
}

.case__content :deep(hr) {
  border: none;
  border-top: 1px solid var(--border-subtle);
  margin: 3rem 0;
}

.case__content :deep(blockquote) {
  border-left: 3px solid var(--vp-c-brand-1);
  padding-left: 1.25rem;
  margin: 1.5rem 0;
  color: var(--text-subtle);
  font-style: italic;
}

.case__content :deep(img) {
  width: 100%;
  border-radius: 12px;
  margin: 2rem 0;
  border: 1px solid var(--border-faint);
  display: block;
}

.case__content :deep(a) {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: opacity 0.2s;
}

.case__content :deep(a:hover) { opacity: 0.8; }

.case__content :deep(iframe) {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  border: 1px solid var(--border-faint);
  margin: 2rem 0;
  display: block;
}

.case__cta {
  background: var(--bg-dark);
  text-align: center;
  padding: 5rem 2rem;
  border-top: 1px solid var(--border-faint);
}

.case__cta h2 {
  color: var(--text-white);
  font-size: 1.8rem;
  margin: 0 0 0.5rem;
}

.case__cta p {
  color: var(--text-dim);
  margin: 0 0 1.75rem;
}

.case__cta-btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: var(--vp-c-brand-1);
  color: var(--text-white);
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.2s;
}

.case__cta-btn:hover { background: var(--vp-c-brand-2); }

@media (max-width: 768px) {
  .case__hero-inner { padding: 6rem 1.5rem 3rem; }
  .case__body { padding: 3rem 1.5rem; }
  .case__meta { gap: 1.5rem; }
}

@media (max-width: 480px) {
  .case__hero-inner { padding: 5rem 1rem 2.5rem; }
  .case__body { padding: 2.5rem 1rem; }
}
</style>