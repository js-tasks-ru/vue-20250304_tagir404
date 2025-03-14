<script setup lang="ts">
defineProps<{
  pressure: number
  humidity: number
  clouds: number
  windSpeed: number
}>()

const getFormattedPressure = (pressure: number) => (pressure * 0.75).toFixed(0)
</script>

<template>
  <div class="weather-details">
    <div class="weather-details__item">
      <div class="weather-details__item-label">Давление, мм рт. ст.</div>
      <div class="weather-details__item-value">{{ getFormattedPressure(pressure) }}</div>
    </div>
    <div class="weather-details__item">
      <div class="weather-details__item-label">Влажность, %</div>
      <div class="weather-details__item-value">{{ humidity }}</div>
    </div>
    <div class="weather-details__item">
      <div class="weather-details__item-label">Облачность, %</div>
      <div class="weather-details__item-value">{{ clouds }}</div>
    </div>
    <div class="weather-details__item">
      <div class="weather-details__item-label">Ветер, м/с</div>
      <div class="weather-details__item-value">{{ windSpeed }}</div>
    </div>
  </div>
</template>

<style scoped>
.weather-details {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
}

.weather-details__item {
  display: flex;
  flex-direction: column;
}

.weather-details__item-label {
  color: var(--grey-8);
}
</style>
