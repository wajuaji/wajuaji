<template>
    <section class="hero">
        <div class="hero__inner">
            <div class="hero__left">
                <div class="hero__label" :key="'label-' + current">
                {{ slides[current].label }}
                </div>

                <h1 class="hero__heading" :key="'heading-' + current">
                {{ slides[current].pre }}
                <span class="hero__accent">{{ slides[current].accent }}</span>
                {{ slides[current].post }}
                </h1>

                <p class="hero__sub" :key="'sub-' + current">
                {{ slides[current].sub }}
                </p>

                <div class="hero__actions">
                <a href="/contact" class="hero__cta hero__cta--primary">Get A Quote</a>
                <a href="/portfolio" class="hero__cta hero__cta--ghost">
                    View Our Work
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                </div>

                <div class="hero__trust">
                    <div class="hero__trust-item" v-for="t in trust" :key="t.label">
                        <span class="hero__trust-icon" v-html="t.icon"></span>
                        {{ t.label }}
                    </div>
                </div>

                <div class="hero__dots">
                    <button
                        v-for="(s, i) in slides"
                        :key="i"
                        type="button"
                        class="hero__dot"
                        :class="{ active: i === current }"
                        @click="goTo(i)"
                        :aria-label="'Go to slide ' + (i + 1)"
                    />
                </div>
            </div>

            <div class="hero__right">
                <div class="hero__collage">
                    <div class="hero__col hero__col--main">
                        <img :src="slides[0].images[0]" class="hero__img hero__img--main" alt="" />
                    </div>

                    <div class="hero__col hero__col--stack">
                        <img :src="slides[0].images[1]" class="hero__img hero__img--top" alt="" />
                        <img :src="slides[0].images[2]" class="hero__img hero__img--small" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const current = ref(0)
let timer = null

const slides = [
  {
    label: 'For Businesses',
    pre: 'Systems that keep your',
    accent: 'business',
    post: 'running smoothly.',
    sub: 'From customer-facing websites to internal tools, M-Pesa integrations, and workflow automation, we build what your business needs to thrive in the digital space.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80',
    ],
  },
  {
    label: 'For Individuals',
    pre: 'Bring your',
    accent: 'idea',
    post: 'to life online.',
    sub: 'Whether it is a blog, a portfolio, or a marketing site, we handle the technical side so you can focus on what you do best.',
  },
  {
    label: 'For Founders',
    pre: 'Build your',
    accent: 'product',
    post: 'the right way from day one.',
    sub: 'From early consultation to full product delivery, we work alongside you through every stage so your vision ships as intended.',
  },
]

const trust = [
  { label: 'Based in Kenya', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>` },
  { label: 'Weekdays, 9am - 5pm (EAT)', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` },
]

function goTo(i) {
  current.value = i
  resetTimer()
}

function next() {
  current.value = (current.value + 1) % slides.length
}

function resetTimer() {
  clearInterval(timer)
  timer = setInterval(next, 10000)
}

onMounted(() => resetTimer())
onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  padding: 120px 5rem 0;
  position: relative;
  overflow: hidden;
  background: var(--bg-dark);
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1800&q=80');
  background-size: cover;
  background-position: center;
  filter: blur(2px) brightness(0.4);
  transform: scale(1.05);
  z-index: 0;
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(15,17,23,0.97) 0%,
    rgba(15,17,23,0.85) 30%,
    rgba(15,17,23,0.4) 70%,
    rgba(15,17,23,0.2) 100%
  );
  z-index: 0;
}

.hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.hero__label {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
  border: 1px solid var(--brand-border);
  border-radius: 4px;
  padding: 0.4rem 0.9rem;
  margin-bottom: 2rem;
  animation: fadeUp 0.5s ease both;
}

.hero__heading {
  font-size: clamp(2.8rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--text-white);
  line-height: 1.15;
  margin: 0 0 1.5rem;
  animation: fadeUp 0.5s ease 0.1s both;
}

.hero__accent {
  color: var(--vp-c-brand-1);
}

.hero__sub {
  font-size: 1.2rem;
  color: var(--text-body);
  line-height: 1.7;
  max-width: 500px;
  margin: 0 0 2.75rem;
  animation: fadeUp 0.5s ease 0.2s both;
}

.hero__actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3.5rem;
  flex-wrap: wrap;
  animation: fadeUp 0.5s ease 0.3s both;
}

.hero__cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.75rem 1.75rem;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.15s;
}

.hero__cta--primary {
  background: var(--vp-c-brand-1);
  color: var(--text-white);
  border: 1.5px solid var(--vp-c-brand-1);
}

.hero__cta--primary:hover {
  background: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
}

.hero__cta--ghost {
  background: transparent;
  color: var(--text-bright);
  border: 1.5px solid var(--border-visible);
}

.hero__cta--ghost:hover {
  border-color: var(--text-medium);
  color: var(--text-white);
}

.hero__trust {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  animation: fadeUp 0.5s ease 0.4s both;
}

.hero__trust-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  color: var(--text-muted);
  letter-spacing: 0.03em;
}

.hero__trust-icon {
  display: flex;
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.hero__dots {
  display: flex;
  gap: 8px;
  margin-top: 3rem;
}

.hero__dot {
  width: 24px;
  height: 3px;
  border-radius: 2px;
  background: var(--border-muted);
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  padding: 0;
}

.hero__dot.active {
  background: var(--vp-c-brand-1);
  width: 40px;
}

/* RIGHT SIDE */

.hero__collage {
  display: flex;
  gap: 14px;
  height: 560px;
  position: absolute;
  inset: 0;
}

.hero__right {
  position: relative;
  height: 560px;
}

.hero__col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.hero__col--main {
  flex: 1.4;
  position: relative;
}

.hero__col--stack {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.hero__img {
  width: 100%;
  object-fit: cover;
  display: block;
}

.hero__img--main {
  height: 100%;
  border-radius: 120px 16px 16px 16px;
}

.hero__img--top {
  flex: 1;
  border-radius: 16px 80px 16px 16px;
  min-height: 0;
}

.hero__img--small {
  flex: 1;
  border-radius: 16px;
  min-height: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
  position: absolute;
  inset: 0;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (max-width: 1280px) {
  .hero { padding: 120px 2.5rem 0; }
}

@media (max-width: 1024px) {
  .hero { padding: 120px 1.5rem 3rem; }
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .hero__right { order: -1; }
  .hero__image-wrap { aspect-ratio: 16/7; }
  .hero__sub { max-width: 100%; }
}

@media (max-width: 640px) {
  .hero {
    min-height: 90vh;
    padding: 100px 1rem 1rem;
  }
  .hero__heading { font-size: 2rem; }
  .hero__sub {
    font-size: 1.05rem;
  }
  .hero__actions {
    gap: 1rem;
    justify-content: center;
  }
  .hero__cta {
    font-size: 0.9rem;
    padding: 0.65rem 1.5rem;
  }
  .hero__trust {
    justify-content: center;
    gap: 0.4rem 1rem;
  }
  .hero__dots {
    justify-content: center;
  }
  .hero__right {
    display: none;
  }
}
</style>