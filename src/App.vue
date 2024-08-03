<script setup>
// import HomePage from './views/HomePage.vue'
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import { mapSettings } from './map/settings'
import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
import MarkerIcon from './components/icons/MarkerIcon.vue'
// import RegistrationForm from './components/RegistrationForm/RegistrationForm.vue'
// import CreateNewPlaceModal from './components/CreateNewPlaceModal/CreateNewPlaceModal.vue'

const favoritePlaces = [
  {
    id: 1,
    title: 'New place 1',
    description: 'SUper description 1',
    img: '',
    lngLat: [30.5245, 50.4514]
  },
  {
    id: 2,
    title: 'New place 2',
    description: 'SUper description 2',
    img: '',
    lngLat: [30.5245, 50.4504]
  }
]
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <FavoritePlaces :items="favoritePlaces" />
    </div>

    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :access-token="mapSettings.apiToken"
        :map-style="mapSettings.style"
        :center="[30.5245, 50.4504]"
        :zoom="10"
      >
        <MapboxMarker v-for="place in favoritePlaces" :key="place.id" :lngLat="place.lngLat">
          <MarkerIcon></MarkerIcon
        ></MapboxMarker>
      </MapboxMap>
    </div>
  </main>
</template>
