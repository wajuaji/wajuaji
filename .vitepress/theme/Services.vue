<template>
  <section class="services">
    <div class="services__inner">

      <div class="services__header">
        <div class="services__header-left">
          <div class="services__line">
            <span class="services__line-bar"></span>
            <span class="services__line-label">What we do</span>
          </div>
          <h2 class="services__heading">
                Explore the <span class="accent">services</span><br />
                <span class="services__heading-accent">we offer</span>
              </h2>
        </div>
        <p class="services__header-right">
          Every service we offer is built around what you need, whether you are launching a product, growing a business, or tinkering with an idea.
        </p>
      </div>

      <div class="services__grid">
        <a
          v-for="service in services"
          :key="service.title"
          :href="service.link"
          class="services__card"
        >
          <div class="services__card-icon" v-html="service.icon"></div>
          <h3 class="services__card-title">{{ service.title }}</h3>
          <p class="services__card-desc">{{ service.desc }}</p>
          <div class="services__card-footer">
            <span class="services__card-link">View Details</span>
            <span class="services__card-arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </span>
          </div>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Custom Software',
    desc: 'We have built e-commerce stores, learning platforms, marketing websites and personal blogs, and each one was shaped entirely around what the client needed. If you have something in mind, whether it is a full product or just a starting point, we will build it out properly.',
    link: '/services/software',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
  },
  {
    title: 'Software Consultancy',
    desc: 'A lot of great ideas stall because there is no one technical in the room to help move them forward. We step in as that partner, helping you think through what to build and what to avoid before it costs you. If you are just getting started, we offer a free discovery call so we can understand where you are and figure out the best way to help.',
    link: '/services/consultancy',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`
  },
  {
    title: 'M-Pesa & Payments',
    desc: 'Chasing down payments or manually confirming transactions is time your business should not be spending. We connect your product or business to M-Pesa, card payments, and other payment channels so that money moves on its own and you always know when it does.',
    link: '/services/payments',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`
  },
  {
    title: 'Hosting & Cloud',
    desc: 'An unreliable website costs you more than just visitors. We take hosting off your plate entirely, managing the infrastructure so your site stays available always. Your job is to run your business. Keeping your digital presence healthy is ours.',
    link: '/services/hosting',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`
  },
  {
    title: 'Support & Maintenance',
    desc: 'Shipping your product is not the finish line. Once something is live, it needs to be watched and kept in good shape over time. For clients we have worked with, we stay on to handle all of that so nothing quietly breaks while you are focused on everything else.',
    link: '/services/support',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`
  },
]
</script>

<style scoped>
.services {
  background: var(--bg-darkest);
  padding: 6rem 5rem;
}

.services__inner {
  max-width: 1400px;
  margin: 0 auto;
}

.services__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 3rem;
  margin-bottom: 3.5rem;
}

.services__line {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.25rem;
}

.services__line-bar {
  display: block;
  width: 32px;
  height: 2px;
  background: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.services__line-label {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.services__heading {
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 700;
  color: var(--text-white);
  line-height: 1.2;
  margin: 0;
}

.services__heading .accent {
  color: var(--vp-c-brand-1);
}

.services__heading-accent {
  color: var(--text-dim);
}

.services__header-right {
  max-width: 340px;
  font-size: 0.95rem;
  color: var(--text-dim);
  line-height: 1.75;
  margin: 0;
  padding-bottom: 0.25rem;
  flex-shrink: 0;
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--border-faint);
  border: 1px solid var(--border-faint);
  border-radius: 16px;
  overflow: hidden;
}

.services__card {
  background: var(--bg-dark);
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-decoration: none;
  transition: background 0.2s;
  position: relative;
}

.services__card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 2rem;
  right: 2rem;
  height: 1px;
  background: var(--border-faint);
}

.services__card:hover {
  background: var(--bg-medium);
}

.services__card:hover .services__card-arrow {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.services__card:hover .services__card-icon svg {
  stroke: var(--vp-c-brand-1);
}

.services__card-icon {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: var(--brand-faint);
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  transition: border-color 0.2s;
}

.services__card-icon svg {
  stroke: var(--text-bright);
  transition: stroke 0.2s;
}

.services__card-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-white);
  margin: 0;
}

.services__card-desc {
  font-size: 0.9rem;
  color: var(--text-subtle);
  line-height: 1.7;
  margin: 0;
  flex: 1;
}

.services__card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-faint);
}

.services__card-link {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-dim);
  transition: color 0.2s;
}

.services__card:hover .services__card-link {
  color: var(--text-white);
}

.services__card-arrow {
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

@media (max-width: 1024px) {
  .services { padding: 4rem 1.5rem; }
  .services__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .services__header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .services__header-right {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .services { padding: 3rem 1rem; }
  .services__grid { grid-template-columns: 1fr; }
}
</style>