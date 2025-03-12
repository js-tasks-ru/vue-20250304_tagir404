<script setup lang="ts">
import EmailListItem from './EmailListItem.vue'

interface IEmail {
  email: string
  isMarked: boolean
}

defineProps<{
  emails: IEmail[]
}>()

const emit = defineEmits<{
    handleRemoveItem: [index: number]
}>()
</script>

<template>
  <ul class="emails-list unstyled-list" aria-label="Emails">
    <EmailListItem
      v-for="({ email, isMarked }, index) in emails"
      :key="email"
      :email="email"
      :marked="isMarked"
      :index="index"
      @handle-remove="emit('handleRemoveItem', index)"
    />
  </ul>
</template>

<style scoped></style>
