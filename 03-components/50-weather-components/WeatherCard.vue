<script setup lang="ts">
import type { WeatherData } from './weather.service'
import WeatherAlert from './WeatherAlert.vue'
import WeatherConditions from './WeatherConditions.vue'
import WeatherDetails from './WeatherDetails.vue'

defineProps<{
  weather: WeatherData
}>()

function isNight(currentTime: string, sunriseTime: string, sunsetTime: string) {
  return currentTime < sunriseTime || currentTime > sunsetTime
}
</script>

<template>
  <li
    class="weather-card"
    :class="{ 'weather-card--night': isNight(weather.current.dt, weather.current.sunrise, weather.current.sunset) }"
  >
    <WeatherAlert v-if="weather.alert" :alert="weather.alert" />

    <div>
      <h2 class="weather-card__name">
        {{ weather.geographic_name }}
      </h2>
      <div class="weather-card__time">
        {{ weather.current.dt }}
      </div>
    </div>

    <WeatherConditions
      :id="weather.current.weather.id"
      :description="weather.current.weather.description"
      :temp="weather.current.temp"
    />

    <WeatherDetails
      :pressure="weather.current.pressure"
      :humidity="weather.current.humidity"
      :clouds="weather.current.clouds"
      :wind-speed="weather.current.wind_speed"
    />
  </li>
</template>

<style scoped>
.weather-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  box-shadow: 0 2px 16px #0000001f;
  background-color: var(--white);
}

.weather-card__name {
  margin: 0;
}

.weather-card--night {
  background-color: #dee1e1;
}

.weather-card__header {
  position: relative;
}

.weather-card__time {
  color: var(--grey-8);
}
</style>
