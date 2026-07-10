<template>
    <header class="nav" :class="{ 'scrolled': scrolled }">
        <div class="nav__logo">
            <a href="/">
                <img src="" alt="Wajuaji Digital" />
            </a>
        </div>

        <nav class="nav__menu" :class="{ 'open': menuOpen }">
            <ul>
                <li v-for="item in navItems" :key="item.text"
                    :class="{ 'has-dropdown': item.children, 'dropdown-open': openDropdown === item.text }"
                    @mouseenter="!isMobile && item.children && openDesktopDropdown(item.text)"
                    @mouseleave="!isMobile && closeDesktopDropdown()">
                    <a
                        :href="item.children ? undefined : (item.link || '#')"
                        :class="{ active: route.path === item.link }"
                        @click="item.children ? toggleMobileDropdown(item.text, $event) : closeMobileMenu()">
                        {{ item.text }}
                        <span v-if="item.children" class="chevron" :class="{ 'rotated': openDropdown === item.text }">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </span>
                    </a>
                    <div v-if="item.children" :class="item.mega ? 'nav__mega' : 'nav__dropdown'">
                        <template v-if="!item.mega">
                            <ul>
                                <li v-for="child in item.children" :key="child.text">
                                    <a :href="child.link" @click="handleChildClick">{{ child.text }}</a>
                                </li>
                            </ul>
                        </template>

                        <template v-else>
                            <div class="nav__mega-grid">
                                <a v-for="child in item.children" :key="child.text"
                                    :href="child.link"
                                    class="nav__mega-item"
                                    :class="{ active: route.path === child.link }"
                                    @click="handleChildClick">
                                        <span class="nav__mega-icon" v-html="child.icon"></span>
                                        <span class="nav__mega-text">
                                        <strong>{{ child.text }}</strong>
                                        <small>{{ child.desc }}</small>
                                    </span>
                                </a>
                            </div>
                        </template>
                    </div>
                </li>
            </ul>
        </nav>

        <div class="nav__right">
            <div class="nav__contact">
                <span>
                    <img src="https://demo.egenslab.com/html/softconic/preview/assets/img/home-6/phone.svg" />Call or WhatsApp:</span>
                <a href="tel:+254702956098">+254 702 956 098</a>
            </div>
            <a href="#contact" class="nav__cta">Get A Quote</a>
            <button type="button" class="nav__burger" @click="toggleMobileMenu" aria-label="Toggle menu">
                <template v-if="menuOpen">
                    <!-- X icon -->
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3l16 16M19 3L3 19" stroke="rgba(255,255,255,0.85)" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </template>
                <template v-else>
                    <!-- Hamburger icon -->
                    <span></span><span></span><span></span>
                </template>
            </button>
        </div>
    </header>

    <div v-if="menuOpen" class="nav__backdrop" @click="closeMobileMenu" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

const menuOpen = ref(false)
const scrolled = ref(false)
const openDropdown = ref(null)
const isMobile = ref(false)

let desktopCloseTimer = null

const navItems = [
  { text: 'Home', link: '/' },
  {
    text: 'Services', mega: true, children: [
      {
        text: 'Custom Software',
        desc: 'Websites, WordPress, APIs and payment integrations including M-Pesa',
        link: '/services/software',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
      },
      {
        text: 'Software Consultancy',
        desc: 'Technical strategy, architecture advice and project planning',
        link: '/services/consultancy',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`
      },
      {
        text: 'M-Pesa & Payments',
        desc: 'Daraja API integrations, payment flows and financial system connectivity',
        link: '/services/payments',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`
      },
      {
        text: 'Hosting & Cloud',
        desc: 'Managed hosting, cloud infrastructure and ongoing server management',
        link: '/services/hosting',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`
      },
      {
        text: 'Support & Maintenance',
        desc: 'Ongoing updates, monitoring and technical support for your live systems',
        link: '/services/support',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`
      },
    ]
  },
  { text: 'Case Study', link: '#projects' },
  { text: 'Blog', link: '/blog/' },
  { text: 'FAQs', link: '#faqs' },
  { text: 'Contact', link: '#contact' },
]

function checkMobile() {
  isMobile.value = window.innerWidth <= 1200
}

function toggleMobileMenu() {
  menuOpen.value = !menuOpen.value
  if (menuOpen.value) {
    openDropdown.value = null
    const menu = document.querySelector('.nav__menu')
    if (menu) menu.scrollTop = 0
  }
}

function closeMobileMenu() {
  menuOpen.value = false
  openDropdown.value = null
}

function toggleMobileDropdown(name, event) {
  if (!isMobile.value) return
  event.preventDefault()
  openDropdown.value = openDropdown.value === name ? null : name
}

function openDesktopDropdown(name) {
  clearTimeout(desktopCloseTimer)
  openDropdown.value = name
}

function closeDesktopDropdown() {
  desktopCloseTimer = setTimeout(() => {
    openDropdown.value = null
  }, 80)
}

function handleChildClick() {
  openDropdown.value = null
  menuOpen.value = false
}

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  window.addEventListener('resize', checkMobile)
  checkMobile()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', checkMobile)
  clearTimeout(desktopCloseTimer)
})
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
  height: 88px;
  background: var(--bg-dark);
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s, background 0.2s;
}

.nav.scrolled {
  border-bottom-color: var(--border-subtle);
  background: rgba(15,17,23,0.97);
  backdrop-filter: blur(8px);
}

.nav__logo {
  flex-shrink: 0;
}

.nav__logo img {
  height: 36px;
  display: block;
}

.nav__menu ul {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav__menu li {
  position: relative;
}

.nav__menu li > a {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0.5rem 0.85rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-bright);
  text-decoration: none;
  border-radius: 6px;
  transition: color 0.15s, background 0.15s;
  white-space: nowrap;
  cursor: pointer;
}

.has-dropdown::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 12px;
}

.nav__menu li > a:hover,
.nav__menu li.has-dropdown.dropdown-open > a {
  color: var(--vp-c-brand-1);
}

.nav__menu li > a.active {
  color: var(--vp-c-brand-1);
}

.nav__dropdown li a.active,
.nav__mega-text strong.active {
  color: var(--vp-c-brand-1);
}

.nav__mega-item.active .nav__mega-text strong {
  color: var(--vp-c-brand-1);
}

.chevron {
  opacity: 0.5;
  transition: transform 0.2s;
  display: flex;
}

.chevron.rotated {
  transform: rotate(180deg);
  opacity: 1;
}

.nav__dropdown {
  display: none;
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  min-width: 220px;
  background: var(--bg-light);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  padding: 0.4rem;
  list-style: none;
  margin: 0;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
}

.has-dropdown.dropdown-open .nav__dropdown {
  display: block;
}

.nav__dropdown li a {
  display: block;
  padding: 0.65rem 1rem;
  font-size: 0.95rem;
  color: var(--text-light);
  text-decoration: none;
  border-radius: 5px;
  transition: color 0.15s, background 0.15s;
}

.nav__dropdown li a:hover {
  color: var(--text-white);
  background: var(--border-faint);
}

.nav__mega {
  display: none;
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  width: 720px;
  padding: 1.25rem;
  background: var(--bg-light);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
}

.has-dropdown.dropdown-open .nav__mega {
  display: block;
}

.nav__mega-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}

.nav__mega-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 1rem;
  border-radius: 7px;
  text-decoration: none;
  transition: background 0.15s;
}

.nav__mega-item:hover {
  background: var(--border-faint);
}

.nav__mega-icon {
  font-size: 1.5rem;
  margin-top: 2px;
  flex-shrink: 0;
}

.nav__mega-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.nav__mega-text strong {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-white);
}

.nav__mega-text small {
  font-size: 0.85rem;
  color: var(--text-subtle);
  line-height: 1.4;
}

.nav__mega-icon svg {
  stroke: var(--vp-c-brand-1);
}

.nav__mega-item:hover .nav__mega-icon svg {
  stroke: var(--text-white);
}

.nav__right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav__contact {
  display: flex;
  flex-direction: column;
  text-align: right;
  line-height: 1.8;
}

.nav__contact span {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  font-size: 0.75rem;
}

.nav__contact a {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-white);
  text-decoration: none;
}

.nav__cta {
  padding: 10px 35px;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-white);
  background: transparent;
  border: 1.5px solid var(--vp-c-brand-1);
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
  white-space: nowrap;
}

.nav__cta:hover {
  background: var(--vp-c-brand-1);
  color: var(--text-white);
}

.nav__burger {
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  width: 30px;
  height: 30px;
}

.nav__burger span {
  display: block;
  width: 22px;
  height: 2px;
  background: rgba(255,255,255,0.8);
  border-radius: 2px;
  transition: 0.2s;
}

.nav__backdrop {
  position: fixed;
  inset: 0;
  z-index: 99;
  background: rgba(0,0,0,0.5);
}

@media (max-width: 1280px) {
    .nav { padding: 0 2.5rem; }
}

@media (max-width: 1200px) {
    .nav { padding: 0 1.5rem; }
    .nav__menu { display: none; }
    .nav__burger { display: flex; }
}

@media (max-width: 900px) {
    .nav__contact { display: none; }
}

@media (max-width: 1024px) {
  .nav__menu {
    position: fixed;
    top: 88px;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--bg-dark);
    z-index: 100;
    padding: 1.5rem;
    transform: translateX(-100%);
    transition: transform 0.25s ease;
    overflow-y: auto;
    display: block;
  }

  .nav__menu.open {
    transform: translateX(0);
  }

  .nav__menu ul {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }

  .nav__menu li {
    width: 100%;
  }

  .nav__menu li > a {
    font-size: 1rem;
    padding: 0.75rem 0.5rem;
    width: 100%;
  }

  .nav__dropdown {
    position: static;
    display: none;
    background: transparent;
    border: none;
    box-shadow: none;
    padding-left: 1rem;
  }

  .dropdown-open .nav__dropdown {
    display: block;
  }

  .nav__mega {
    position: static;
    transform: none;
    width: 100%;
    border: none;
    background: transparent;
    box-shadow: none;
    padding: 0 0 0 1rem;
    display: none;
  }

  .dropdown-open .nav__mega {
    display: block;
  }

  .nav__mega-grid {
    grid-template-columns: 1fr;
  }

  .nav__cta { display: none; }
  .nav__burger { display: flex; }
}
</style>