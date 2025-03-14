<script setup lang="ts">
defineProps<{
  email: string
  marked: boolean
  index: number
}>()

const emit = defineEmits<{
  handleRemove: []
}>()
</script>

<template>
  <li :class="{ marked }">
    {{ email }}
    <button type="button" aria-label="Удалить" @click.stop="emit('handleRemove')">❌</button>
  </li>
</template>