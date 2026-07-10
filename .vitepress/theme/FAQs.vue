<template>
  <section class="faq" id="faqs">
    <div class="faq__inner">
      <div class="faq__header">
        <div class="faq__line">
            <span class="faq__line-bar"></span>
            <span class="faq__line-label">FAQs</span>
            <span class="faq__line-bar"></span>
        </div>
        <h2 class="faq__heading">
          Questions you might<br />
          <span class="faq__heading-accent">be asking.</span>
        </h2>
      </div>

      <div class="faq__list">
        <div
          v-for="(item, i) in faqs"
          :key="item.q"
          class="faq__item"
          :class="{ open: openIndex === i }"
        >
          <button
            type="button"
            class="faq__question"
            @click="toggle(i)"
            :aria-expanded="openIndex === i"
          >
            <span>{{ item.q }}</span>
            <span class="faq__icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" class="faq__icon-v" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </button>

          <div class="faq__answer-wrap">
            <p class="faq__answer">{{ item.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(0)

function toggle(i) {
  openIndex.value = openIndex.value === i ? -1 : i
}

const faqs = [
  {
    q: 'How do we get started?',
    a: 'Reach out via email or WhatsApp with a short description of what you have in mind. We will schedule a call to understand your needs and explore the best way forward together.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'It depends on scope. A simple website usually takes 1 to 2 weeks, while custom software or M-Pesa integrations can take 4 to 8 weeks. We will give you a clear timeline before any work starts.',
  },
  {
    q: 'Do you work with businesses outside Kenya?',
    a: 'Yes. While we are based in Kenya and specialise in local integrations like M-Pesa, we work remotely with clients anywhere. Communication happens over email or WhatsApp.',
  },
  {
    q: 'Do you sign NDAs or contracts before work begins?',
    a: 'Yes, if that is something you need we are happy to do it. We understand that some ideas and projects require confidentiality, and we respect that. All work is handled professionally under Wajuaji Digital Ltd.',
  },
  {
    q: 'Do you offer hosting after the project is complete?',
    a: 'Yes, though it is completely optional. For clients who would rather not deal with managing servers or infrastructure, we offer managed hosting on an agreed plan at a reasonable annual charge. Everything is handled on our end so you do not have to think about it.',
  },
]
</script>

<style scoped>
.faq {
  background: var(--bg-dark);
  padding: 6rem 5rem;
}

.faq__inner {
  max-width: 900px;
  margin: 0 auto;
}

.faq__header {
  text-align: center;
  margin-bottom: 3rem;
}

.faq__line {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.25rem;
}

.faq__line-bar {
  display: block;
  width: 32px;
  height: 2px;
  background: var(--vp-c-brand-1);
}

.faq__line-label {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.faq__heading {
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 700;
  color: var(--text-white);
  line-height: 1.2;
  margin: 0;
}

.faq__heading-accent {
  color: var(--text-dim);
}

.faq__list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border-subtle);
}

.faq__item {
  border-bottom: 1px solid var(--border-subtle);
  transition: border-color 0.2s;
}

.faq__item.open {
  border-color: var(--brand-border);
}

.faq__question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  padding: 1.5rem 0.5rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-white);
  transition: color 0.2s;
}

.faq__item.open .faq__question {
  color: var(--vp-c-brand-1);
}

.faq__icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--border-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--text-white);
  transition: background 0.2s, border-color 0.2s, transform 0.3s;
}

.faq__item.open .faq__icon {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  transform: rotate(135deg);
}

.faq__answer-wrap {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
}

.faq__item.open .faq__answer-wrap {
  grid-template-rows: 1fr;
}

.faq__answer-wrap > .faq__answer {
  overflow: hidden;
}

.faq__answer {
  margin: 0;
  padding: 0 0.5rem;
  font-size: 0.95rem;
  color: var(--text-medium);
  line-height: 1.75;
  max-width: 700px;
}

.faq__item.open .faq__answer {
  padding-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .faq { padding: 4rem 1.5rem; }
  .faq__question { font-size: 0.95rem; padding: 1.25rem 0.25rem; }
  .faq__icon { width: 28px; height: 28px; }
}

@media (max-width: 480px) {
  .faq { padding: 3rem 1rem; }
}
</style>