<script setup lang="ts">
import { computed, ref } from 'vue'

type IOperators = 'sum' | 'subtract' | 'multiply' | 'divide'

const firstOperand = ref(0)
const secondOperand = ref(0)
const operator = ref<IOperators>('sum')

const output = computed(() => {
  switch(operator.value) {
    case "sum": return firstOperand.value + secondOperand.value
    case "subtract": return firstOperand.value - secondOperand.value
    case "multiply": return firstOperand.value * secondOperand.value
    case "divide": return firstOperand.value / secondOperand.value
    default: return 0
  }
})
</script>

<template>
  <div class="calculator">
    <input v-model="firstOperand" type="number" aria-label="First operand" />

    <div class="calculator__operators">
      <label><input v-model="operator" type="radio" name="operator" value="sum" />➕</label>
      <label><input v-model="operator" type="radio" name="operator" value="subtract" />➖</label>
      <label><input v-model="operator" type="radio" name="operator" value="multiply" />✖</label>
      <label><input v-model="operator" type="radio" name="operator" value="divide" />➗</label>
    </div>

    <input v-model="secondOperand" type="number" aria-label="Second operand" />

    <div>=</div>

    <output>{{ output }}</output>
  </div>
</template>
