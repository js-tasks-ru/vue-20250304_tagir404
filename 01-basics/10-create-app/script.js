import { defineComponent, createApp } from 'vue'

const RootComponent = defineComponent({
  name: 'RootComponent',
  setup() {
    const currentDate = new Date().toLocaleDateString('en-EN', { dateStyle: 'long' })

    return {
      currentDate,
    }
  },

  template: `<div>Сегодня {{ currentDate }}</div>`,
})

createApp(RootComponent).mount('#app')