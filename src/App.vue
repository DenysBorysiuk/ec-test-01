<script setup>
// import HomePage from './views/HomePage.vue'
import { MapboxMap } from '@studiometa/vue-mapbox-gl'
import { mapSettings } from './map/settings'
import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
// import RegistrationForm from './components/RegistrationForm/RegistrationForm.vue'
// import CreateNewPlaceModal from './components/CreateNewPlaceModal/CreateNewPlaceModal.vue'
</script>

<template>
  <!-- <HomePage /> -->

  <!-- <RegistrationForm /> -->
  <!-- <CreateNewPlaceModal /> -->
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <FavoritePlaces />
    </div>

    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :access-token="mapSettings.apiToken"
        :map-style="mapSettings.style"
        :center="[30.5245, 50.4504]"
        :zoom="10"
      ></MapboxMap>
    </div>
  </main>
</template>
