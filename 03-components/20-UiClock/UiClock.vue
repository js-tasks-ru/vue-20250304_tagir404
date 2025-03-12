<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const time = ref(new Date().toLocaleTimeString(navigator.language, { timeStyle: 'medium' }))

let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(() => {
    time.value = new Date().toLocaleTimeString(navigator.language, { timeStyle: 'medium' })
  }, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div class="clock">{{ time }}</div>
</template>