<script setup lang="ts">
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'

const weatherList = getWeatherData()
const getCelsiusTemp = (kelvinTemp: number) => (kelvinTemp - 273.15).toFixed(1)
const getFormattedPressure = (pressure: number) => (pressure * 0.75).toFixed(0)

const isNightTime = (dt: string, sunrise: string, sunset: string): boolean => {
  const timeToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number)
    return hours * 60 + minutes
  }

  const dtMinutes = timeToMinutes(dt)
  const sunriseMinutes = timeToMinutes(sunrise)
  const sunsetMinutes = timeToMinutes(sunset)

  if (dtMinutes >= sunriseMinutes && dtMinutes < sunsetMinutes) {
    return false
  } else {
    return true
  }
}
</script>

<template>
  <div>
    <h1 class="title">Погода в Средиземье</h1>

    <ul class="weather-list unstyled-list">
      <li
        v-for="item in weatherList"
        :key="item.geographic_name"
        class="weather-card"
        :class="{ 'weather-card--night': isNightTime(item.current.dt, item.current.sunrise, item.current.sunset) }"
      >
        <div v-if="item.alert" class="weather-alert">
          <span class="weather-alert__icon">⚠️</span>
          <span class="weather-alert__description">{{ item.alert.sender_name }}: {{ item.alert.description }}</span>
        </div>
        <div>
          <h2 class="weather-card__name">
            {{ item.geographic_name }}
          </h2>
          <div class="weather-card__time">
            {{ item.current.dt }}
          </div>
        </div>
        <div class="weather-conditions">
          <div class="weather-conditions__icon" :title="item.current.weather.description">
            {{ WeatherConditionIcons[item.current.weather.id] }}
          </div>
          <div class="weather-conditions__temp">{{ getCelsiusTemp(item.current.temp) }} °C</div>
        </div>
        <div class="weather-details">
          <div class="weather-details__item">
            <div class="weather-details__item-label">Давление, мм рт. ст.</div>
            <div class="weather-details__item-value">{{ getFormattedPressure(item.current.pressure) }}</div>
          </div>
          <div class="weather-details__item">
            <div class="weather-details__item-label">Влажность, %</div>
            <div class="weather-details__item-value">{{ item.current.humidity }}</div>
          </div>
          <div class="weather-details__item">
            <div class="weather-details__item-label">Облачность, %</div>
            <div class="weather-details__item-value">{{ item.current.clouds }}</div>
          </div>
          <div class="weather-details__item">
            <div class="weather-details__item-label">Ветер, м/с</div>
            <div class="weather-details__item-value">{{ item.current.wind_speed }}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
