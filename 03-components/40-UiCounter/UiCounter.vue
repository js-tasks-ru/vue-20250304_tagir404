<script setup lang="ts">
import { UiButton } from '@shgk/vue-course-ui'

interface Props {
  min?: number
  max?: number
}

const props = withDefaults(defineProps<Props>(), {
  min: 0,
  max: Infinity,
})

const count = defineModel<number>('count', { required: true })
</script>

<template>
  <div class="counter">
    <UiButton aria-label="Decrement" :disabled="count === props.min" @click="count--">➖</UiButton>
    <span class="count" data-testid="count">{{ count }}</span>
    <UiButton aria-label="Increment" :disabled="count === props.max" @click="count++">➕</UiButton>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  align-items: center;
  gap: 20px;
}

.count {
  font-size: 20px;
  font-weight: bold;
}
</style>
