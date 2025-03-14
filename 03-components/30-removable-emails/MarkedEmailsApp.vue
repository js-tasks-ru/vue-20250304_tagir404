<script setup lang="ts">
import { computed, ref } from 'vue'
import { UiFormGroup, UiInput } from '@shgk/vue-course-ui'
import EmailList from './EmailList.vue'
import { getEmails } from './emails'

const emails = ref(getEmails())
const query = ref('')

const markedEmails = computed(() => {
  return emails.value.map(email => ({
    email,
    isMarked: !!(query.value && email.toLowerCase().includes(query.value.toLowerCase())),
  }))
})

function removeEmailByIndex(index: number) {
  emails.value.splice(index, 1)
}
</script>

<template>
  <div>
    <UiFormGroup>
      <UiInput v-model.trim="query" type="search" placeholder="Поиск" aria-label="Поиск" small />
    </UiFormGroup>
    <EmailList :emails="markedEmails" @handle-remove-item="removeEmailByIndex" />
  </div>
</template>

<style scoped>
.marked {
  color: #efc14e;
}
</style>
