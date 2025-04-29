<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
  to?: RouteLocationRaw
  href?: string
}>()
// Вместо <span> должен быть <RouterLink> или <a>
// Используйте динамический компонент <component :is="...">
</script>

<template>
  <component :is="to ? 'RouterLink' : 'a'" tabindex="0" :to :href>
    <slot />
  </component>
</template>

<style scoped>
.link {
  color: var(--color-text-primary);
}

.link:hover {
  text-decoration: underline;
}
</style>
