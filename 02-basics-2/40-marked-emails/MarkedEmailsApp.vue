<script setup lang="ts">
import { computed, ref } from 'vue'
import { emails } from './emails'

const searchString = ref('')
const regex = computed(() => new RegExp(searchString.value, 'i'))

const formattedEmails = computed(() =>
  emails.map(email => ({ address: email, marked: !!searchString.value && regex.value.test(email) })),
)
</script>
<template>
  <div>
    <div class="form-group">
      <input v-model.trim="searchString" type="search" aria-label="Search" />
    </div>
    <ul aria-label="Emails">
      <li v-for="email in formattedEmails" :key="email.address" :class="{ marked: email.marked }">
        {{ email.address }}
      </li>
    </ul>
  </div>
</template>
