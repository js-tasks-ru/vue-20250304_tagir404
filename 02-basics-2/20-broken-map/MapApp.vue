<script setup lang="ts">
import { reactive } from 'vue'

const pinCoordinates = reactive({
  x: 0,
  y: 0,
})

function handleClick(event: MouseEvent) {
  pinCoordinates.x = event.offsetX
  pinCoordinates.y = event.offsetY
}
</script>

<template>
  <div class="map" @click="handleClick">
    <img class="map-image" src="./map.png" alt="Map" draggable="false" />
    <span
      class="pin"
      :style="{
        top: `${pinCoordinates.y}px`,
        left: `${pinCoordinates.x}px`,
      }"
      >📍</span
    >
  </div>
</template>
