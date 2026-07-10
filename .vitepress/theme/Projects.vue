<template>
  <section class="cases" id="projects">
    <div class="cases__inner">
      <div class="cases__header">
        <div class="cases__header-left">
          <div class="cases__line">
            <span class="cases__line-bar"></span>
            <span class="cases__line-label">Case Studies</span>
          </div>
          <h2 class="cases__heading">
            Our <span class="accent">work</span><br />
            <span class="cases__heading-accent">speaks for itself</span>
          </h2>
        </div>

        <div class="cases__controls">
          <button type="button" class="cases__nav-btn" @click="prev" aria-label="Previous">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button type="button" class="cases__nav-btn" @click="next" aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      <div class="cases__viewport">
        <Transition name="slide" mode="out-in">
          <div class="cases__grid" :key="page">
            <a
              v-for="project in visibleProjects"
              :key="project.title"
              :href="project.link"
              class="cases__card"
            >
              <div class="cases__card-img-wrap">
                <img :src="project.image" :alt="project.title" class="cases__card-img" />
                <div class="cases__card-overlay"></div>
              </div>
              <div class="cases__card-body">
                <span class="cases__card-tag">{{ project.tag }}</span>
                <h3 class="cases__card-title">{{ project.title }}</h3>
                <p class="cases__card-desc">{{ project.desc }}</p>
                <span class="cases__card-cta">
                  View Project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </span>
              </div>
            </a>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { data as allProjects } from '../../portfolio/projects.data.mts'

const page = ref(0)
const perPage = 3

const projects = allProjects

const totalPages = computed(() => Math.ceil(projects.length / perPage))

const visibleProjects = computed(() => {
  const start = page.value * perPage
  return projects.slice(start, start + perPage)
})

function next() {
  page.value = (page.value + 1) % totalPages.value
}

function prev() {
  page.value = (page.value - 1 + totalPages.value) % totalPages.value
}
</script>

<style scoped>
.cases {
  background: var(--bg-dark);
  padding: 6rem 5rem;
}

.cases__inner {
  max-width: 1400px;
  margin: 0 auto;
}

.cases__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 3rem;
}

.cases__line {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.25rem;
}

.cases__line-bar {
  display: block;
  width: 32px;
  height: 2px;
  background: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.cases__line-label {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.cases__heading {
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 700;
  color: var(--text-white);
  line-height: 1.2;
  margin: 0;
}

.cases__heading .accent {
  color: var(--vp-c-brand-1);
}

.cases__heading-accent {
  color: var(--text-dim);
}

.cases__controls {
  display: flex;
  gap: 10px;
  flex-shrink: 0;
  margin-bottom: 0.4rem;
}

.cases__nav-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--border-muted);
  background: transparent;
  color: var(--text-white);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
}

.cases__nav-btn:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--brand-faint);
}

.cases__viewport {
  position: relative;
}

.cases__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.cases__card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border-radius: 16px;
  overflow: hidden;
  background: var(--bg-medium);
  border: 1px solid var(--border-faint);
  transition: border-color 0.25s, transform 0.25s;
}

.cases__card:hover {
  transform: translateY(-4px);
}

.cases__card-img-wrap {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.cases__card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.cases__card:hover .cases__card-img {
  transform: scale(1.05);
}

.cases__card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15,17,23,0.6), transparent);
}

.cases__card-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
}

.cases__card-tag {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
}

.cases__card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-white);
  margin: 0;
}

.cases__card-desc {
  font-size: 0.875rem;
  color: var(--text-subtle);
  line-height: 1.7;
  margin: 0;
  flex: 1;
}

.cases__card-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-top: 0.5rem;
  transition: color 0.2s;
}

.cases__card:hover .cases__card-cta {
  color: var(--vp-c-brand-1);
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

@media (max-width: 1024px) {
  .cases { padding: 4rem 1.5rem; }
  .cases__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .cases { padding: 3rem 1rem; }
  .cases__header { flex-direction: column; align-items: flex-start; }
  .cases__grid { grid-template-columns: 1fr; }
}
</style>