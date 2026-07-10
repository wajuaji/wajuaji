import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import NotFound from './NotFound.vue'
import Navbar from './Navbar.vue'
import Hero from './Hero.vue'
import Brands from './Brands.vue'
import Services from './Services.vue'
import Projects from './Projects.vue'
import Blog from './Blog.vue'
import FAQs from './FAQs.vue'
import Contact from './Contact.vue'
import Footer from './Footer.vue'

import ServiceLayout from './ServiceLayout.vue'
import BlogLayout from './BlogLayout.vue'
import CaseStudyLayout from './CaseStudyLayout.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(Navbar),
      'not-found': () => h(NotFound),
    })
  },
  enhanceApp({ app }) {
    app.component('Navbar', Navbar)
    app.component('Hero', Hero)
    app.component('Brands', Brands)
    app.component('Services', Services)
    app.component('Projects', Projects)
    app.component('Blog', Blog)
    app.component('FAQs', FAQs)
    app.component('Contact', Contact)
    app.component('Footer', Footer)

    app.component('ServiceLayout', ServiceLayout)
    app.component('BlogLayout', BlogLayout)
    app.component('CaseStudyLayout', CaseStudyLayout)
  }
}