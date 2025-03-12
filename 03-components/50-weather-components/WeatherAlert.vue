<script setup lang="ts">
defineProps<{
  alert: {
    sender_name: string
    description: string
  }
}>()
</script>

<template>
  <div class="weather-alert">
    <span class="weather-alert__icon">⚠️</span>
    <span class="weather-alert__description">{{ alert.sender_name }}: {{ alert.description }}</span>
  </div>
</template>

<style scoped>
.weather-alert {
  background-color: #fff2cc;
  padding: 10px;
}

.weather-alert__icon {
  margin-right: 10px;
}
</style>
