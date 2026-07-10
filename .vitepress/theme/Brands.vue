<template>
  <div class="brands">
    <div class="brands__inner">
      <span class="brands__label">Trusted by</span>
      <div class="brands__track">
        <div class="brands__list">
          <span v-for="brand in brands" :key="brand" class="brands__item">
            {{ brand }}
          </span>
        </div>
        <div class="brands__list" aria-hidden="true">
          <span v-for="brand in brands" :key="brand + '-dup'" class="brands__item">
            {{ brand }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const brands = [
  'Safaricom', 'KCB Group', 'Equity Bank', 'Twiga Foods',
  'M-Kopa', 'Sendy', 'Cellulant', 'Poa Internet',
]
</script>

<style scoped>
.brands {
  background: var(--bg-medium);
  border-top: 1px solid var(--border-faint);
  border-bottom: 1px solid var(--border-faint);
  padding: 1.25rem 0;
  overflow: hidden;
}

.brands__inner {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.brands__label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-medium);
  white-space: nowrap;
  padding-left: 2rem;
  flex-shrink: 0;
}

.brands__track {
  display: flex;
  overflow: hidden;
  flex: 1;
  mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
}

.brands__list {
  display: flex;
  align-items: center;
  gap: 3rem;
  animation: scroll 25s linear infinite;
  flex-shrink: 0;
  padding-right: 3rem;
}

.brands__item {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-subtle);
  white-space: nowrap;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: color 0.2s;
}

.brands__item:hover {
  color: var(--text-body);
}

@keyframes scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-100%); }
}
</style>