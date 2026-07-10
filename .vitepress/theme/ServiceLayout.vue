<template>
  <div class="service-page">
    <div class="service-page__hero">
      <div class="service-page__hero-inner">
        <a href="/" class="service-page__back">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to Home
        </a>
        <h1 class="service-page__title">{{ frontmatter.title }}</h1>
        <p class="service-page__subtitle">{{ frontmatter.subtitle }}</p>
      </div>
    </div>

    <div class="service-page__body">
      <div class="service-page__content">
        <slot />
      </div>
    </div>

    <div class="service-page__cta">
      <h2>Ready to get started?</h2>
      <p>Tell us what you need and we'll take it from there.</p>
      <a href="/#contact" class="service-page__cta-btn">Get In Touch</a>
    </div>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<style scoped>
.service-page__hero {
  background: var(--bg-dark);
  padding: 140px 5rem 3rem;
  display: flex;
  justify-content: center;
}

.service-page__hero-inner {
  max-width: 800px;
  width: 100%;
}

.service-page__back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: var(--text-dim);
  text-decoration: none;
  margin-bottom: 1.5rem;
  transition: color 0.2s ease;
}

.service-page__back:hover {
  color: var(--vp-c-brand-1);
}

.service-page__title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  color: var(--text-white);
  margin: 0 0 1rem;
  line-height: 1.2;
}

.service-page__subtitle {
  font-size: 1.05rem;
  color: var(--text-medium);
  line-height: 1.7;
  margin: 0;
}

.service-page__body {
  background: var(--bg-darkest);
  padding: 4rem 5rem;
  display: flex;
  justify-content: center;
}

.service-page__content {
  max-width: 800px;
  width: 100%;
}

.service-page__content :deep(h2) {
  color: var(--text-white);
  font-size: 1.7rem;
  font-weight: 700;
  margin: 3rem 0 1.25rem;
  line-height: 1.3;
}

.service-page__content :deep(h2:first-child) {
  margin-top: 0;
}

.service-page__content :deep(h3) {
  color: var(--text-white);
  font-size: 1.2rem;
  font-weight: 700;
  margin: 2rem 0 0.75rem;
}

.service-page__content :deep(p) {
  font-size: 1rem;
  line-height: 1.85;
  color: var(--text-body);
  margin: 0 0 1.25rem;
}

.service-page__content :deep(strong) {
  color: var(--text-white);
  font-weight: 600;
}

.service-page__content :deep(hr) {
  border: none;
  border-top: 1px solid var(--border-subtle);
  margin: 3rem 0;
}

.service-page__content :deep(blockquote) {
  border-left: 3px solid var(--vp-c-brand-1);
  padding-left: 1.25rem;
  margin: 1.5rem 0;
  color: var(--text-subtle);
  font-style: italic;
}

.service-page__content :deep(ul) {
  list-style: none !important;
  padding-left: 1.5rem;
  margin: 0 0 1.5rem;
}

.service-page__content :deep(ul li) {
  position: relative;
  padding-left: 1.25rem;
  color: var(--text-body);
  line-height: 1.85;
  margin-bottom: 0.5rem;
}

.service-page__content :deep(ul li::before) {
  content: '';
  position: absolute;
  left: 0;
  top: 0.7em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.service-page__content :deep(ul li::marker) {
  content: none;
}

.service-page__cta {
  background: var(--bg-dark);
  text-align: center;
  padding: 5rem 2rem;
  border-top: 1px solid var(--border-faint);
}

.service-page__cta h2 {
  color: var(--text-white);
  font-size: 1.8rem;
  margin: 0 0 0.5rem;
}

.service-page__cta p {
  color: var(--text-dim);
  margin: 0 0 1.5rem;
}

.service-page__cta-btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: var(--vp-c-brand-1);
  color: var(--text-white);
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.1s ease;
}

.service-page__cta-btn:hover {
  background: var(--vp-c-brand-2);
}

.service-page__cta-btn:active {
  transform: scale(0.97);
}

@media (max-width: 768px) {
  .service-page__hero { padding: 100px 1.5rem 3rem; }
  .service-page__body { padding: 2.5rem 1.5rem; }
  .service-page__cta { padding: 3rem 1.5rem; }
  .service-page__cta h2 { font-size: 1.4rem; }
}

@media (max-width: 480px) {
  .service-page__hero { padding: 80px 1rem 2rem; }
  .service-page__body { padding: 2rem 1rem; }
}
</style>