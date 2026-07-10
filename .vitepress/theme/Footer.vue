<template>
  <footer class="footer">
    <div class="footer__inner">
      <img src="https://demo.egenslab.com/html/softconic/preview/assets/img/logo.svg" alt="Wajuaji Digital" class="footer__logo" />
      <span class="footer__copy">© {{ year }} Wajuaji Digital. All rights reserved.</span>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--bg-darkest);
  border-top: 1px solid var(--border-faint);
  padding: 2rem 5rem;
}

.footer__inner {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.footer__logo {
  height: 24px;
  display: block;
  opacity: 0.8;
}

.footer__copy {
  font-size: 0.8rem;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .footer {
    padding: 1.5rem;
  }

  .footer__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
}
</style>