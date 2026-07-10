<template>
  <div class="notfound">
    <div class="notfound__inner">
      <span class="notfound__code">404</span>
      <h1 class="notfound__title">Nothing here.</h1>
      <p class="notfound__sub">The page you're looking for doesn't exist or may have moved.</p>
      <a href="/" class="notfound__btn">Back to Home</a>
    </div>
  </div>
</template>

<style scoped>
.notfound {
  min-height: 100vh;
  background: var(--bg-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
}

.notfound__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.notfound__code {
  font-size: clamp(6rem, 15vw, 10rem);
  font-weight: 800;
  line-height: 1;
  color: var(--border-faint);
  letter-spacing: -0.05em;
  user-select: none;
}

.notfound__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-white);
  margin: 0;
}

.notfound__sub {
  font-size: 1rem;
  color: var(--text-dim);
  max-width: 380px;
  line-height: 1.7;
  margin: 0;
}

.notfound__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 1rem;
  padding: 0.7rem 1.75rem;
  background: transparent;
  border: 1.5px solid var(--border-visible);
  border-radius: 6px;
  color: var(--text-white);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: border-color 0.2s, color 0.2s;
}

.notfound__btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
</style>