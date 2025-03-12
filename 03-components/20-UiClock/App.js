import { defineComponent, ref } from 'vue'
import UiClock from './UiClock.vue'

export default defineComponent({
  name: 'App',

  components: {
    UiClock,
  },

  setup() {
    const showClock = ref(true)
    return {
      showClock,
    }
  },

  template: `
    <div>
      <label>
        <input type="checkbox" v-model="showClock" />
        Отображать часы
      </label>
      <UiClock v-if="showClock" />
    </div>
  `,
})
