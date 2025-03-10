<script setup lang="ts">
import { reactive } from 'vue'

const counter = reactive({
  value: 0,
  min: 0,
  max: 5,
})
</script>
<template>
  <div class="counter">
    <button
      class="button button--secondary"
      type="button"
      aria-label="Decrement"
      :disabled="counter.value === counter.min"
      @click="counter.value--"
    >
      ➖
    </button>

    <span class="count" data-testid="count">{{ counter.value }}</span>

    <button
      class="button button--secondary"
      type="button"
      aria-label="Increment"
      :disabled="counter.value === counter.max"
      @click="counter.value++"
    >
      ➕
    </button>
  </div>
</template>
