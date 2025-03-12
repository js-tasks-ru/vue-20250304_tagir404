<script setup lang="ts">
import { ref } from 'vue'
import WeatherCard from './WeatherCard.vue'
import { getWeatherData } from './weather.service.ts'

const weatherList = ref(getWeatherData())
</script>

<template>
  <div>
    <h1 class="title">Погода в Средиземье</h1>

    <ul class="weather-list unstyled-list">
      <WeatherCard v-for="weather in weatherList" :key="weather.geographic_name" :weather />
    </ul>
  </div>
</template>

<style scoped>
.weather-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 570px;
}
</style>
