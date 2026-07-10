---
title: Blog
layout: page
---

<script setup>
import { data as posts } from './posts.data.mts'
import BlogGrid from '../.vitepress/theme/BlogGrid.vue'
</script>

<BlogGrid :posts="posts" />
