<script setup>
import { ref } from 'vue'
// import HomePage from './views/HomePage.vue'
// import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
// import RegistrationForm from './components/RegistrationForm/RegistrationForm.vue'
import IModal from './components/IModal/IModal.vue'

const isOpen = ref(true)

const closeModal = () => {
  isOpen.value = false
}
</script>

<template>
  <!-- <HomePage /> -->
  <!-- <div class="bg-white h-screen w-[400px]">
    <FavoritePlaces />
  </div> -->
  <!-- <RegistrationForm /> -->
  <IModal v-if="isOpen" @close="closeModal" />
</template>
