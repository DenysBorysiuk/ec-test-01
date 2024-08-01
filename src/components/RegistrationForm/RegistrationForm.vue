<script setup>
import IInput from '../IInput/IInput.vue'
import IButton from '../IButton/IButton.vue'

const props = defineProps({
  isLoading: {
    default: false,
    type: Boolean
  }
})

const emit = defineEmits(['submit'])
</script>

<template>
  <form @submit.prevent="emit('submit', toRaw(userData))">
    <IInput class="mb-4" label="Повне ім'я" />

    <IInput class="mb-4" label="Електронна пошта" placeholder="email@gmail.com" />

    <IInput label="Пароль" type="password" />

    <IButton class="mt-10 w-full" variant="gradient" type="submit" :is-loading="props.isLoading">
      Створити аккаунт
    </IButton>
  </form>
</template>
