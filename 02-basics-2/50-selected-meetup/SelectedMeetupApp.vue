<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { getMeetup } from './meetupsService.ts'
import type { MeetupDTO } from './meetups.types.ts'

const currentMeetupId = ref(1)
const currentMeetup = ref<MeetupDTO | null>(null)
watchEffect(async () => {
  currentMeetup.value = await getMeetup(currentMeetupId.value)
})
</script>

<template>
  <div class="meetup-selector">
    <div class="meetup-selector__control">
      <button class="button button--secondary" type="button" :disabled="currentMeetupId === 1" @click="currentMeetupId--">Предыдущий</button>

      <div class="radio-group" role="radiogroup">
        <div class="radio-group__button">
          <input
            id="meetup-id-1"
            v-model="currentMeetupId"
            class="radio-group__input"
            type="radio"
            name="meetupId"
            :value="1"
          />
          <label for="meetup-id-1" class="radio-group__label">1</label>
        </div>
        <div class="radio-group__button">
          <input
            id="meetup-id-2"
            v-model="currentMeetupId"
            class="radio-group__input"
            type="radio"
            name="meetupId"
            :value="2"
          />
          <label for="meetup-id-2" class="radio-group__label">2</label>
        </div>
        <div class="radio-group__button">
          <input
            id="meetup-id-3"
            v-model="currentMeetupId"
            class="radio-group__input"
            type="radio"
            name="meetupId"
            :value="3"
          />
          <label for="meetup-id-3" class="radio-group__label">3</label>
        </div>
        <div class="radio-group__button">
          <input
            id="meetup-id-4"
            v-model="currentMeetupId"
            class="radio-group__input"
            type="radio"
            name="meetupId"
            :value="4"
          />
          <label for="meetup-id-4" class="radio-group__label">4</label>
        </div>
        <div class="radio-group__button">
          <input
            id="meetup-id-5"
            v-model="currentMeetupId"
            class="radio-group__input"
            type="radio"
            name="meetupId"
            :value="5"
          />
          <label for="meetup-id-5" class="radio-group__label">5</label>
        </div>
      </div>

      <button class="button button--secondary" type="button" :disabled="currentMeetupId === 5" @click="currentMeetupId++">Следующий</button>
    </div>

    <div class="meetup-selector__cover">
      <div class="meetup-cover">
        <h1 class="meetup-cover__title">{{ currentMeetup?.title }}</h1>
      </div>
    </div>
  </div>
</template>
