<script setup>
import { ref } from 'vue'

const props = defineProps({
  label: String
})

const text = ref('')

const changeValue = (event) => {
  text.value = event.target.value
}
</script>

<template>
  <div class="w-full text-[#2c2c2c]">
    <label class="block">
      <span class="block text-xs px-3 mb-2">{{ props.label }}: {{ text }}</span>

      <input
        class="w-full text-sm rounded-[4px] border-[1px] py-2 px-3 focus:outline-primary"
        type="text"
        @input="changeValue"
      />
    </label>
  </div>
</template>
