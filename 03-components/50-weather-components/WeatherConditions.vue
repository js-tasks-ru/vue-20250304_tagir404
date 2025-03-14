<script setup lang="ts">
import { WeatherConditionIcons } from './weather.service'
defineProps<{
  id: keyof typeof WeatherConditionIcons
  description: string
  temp: number
}>()

const getCelsiusTemp = (kelvinTemp: number) => (kelvinTemp - 273.15).toFixed(1)
</script>

<template>
  <div class="weather-conditions">
    <div class="weather-conditions__icon" :title="description">
      {{ WeatherConditionIcons[id] }}
    </div>
    <div class="weather-conditions__temp">{{ getCelsiusTemp(temp) }} °C</div>
  </div>
</template>

<style scoped>
.weather-conditions {
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 48px;
  font-weight: lighter;
}
</style>
