<template>
  <div class="box overflow-hidden md:w-full md:h-[400px]  ">
    <div class="bg-white h-[50px] px-10 py-2.5 hidden md:block">
      <span class="text-xs font-bold">موقعیت مورد نظر خود را روی نقشه مشخص کنید</span>
    </div>
    <div class="w-full md:h-[350px] " style="height: calc(100vh - 130px);">
      <l-map ref="mapInstance" v-model:zoom="zoom" v-model:center="center" :useGlobalLeaflet="false"
        @click="onMapClick">
        <l-tile-layer url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
          layer-type="base"></l-tile-layer>
        <l-marker v-if="markerPosition" :lat-lng="markerPosition"></l-marker>
      </l-map>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet"

////////

const emit = defineEmits(["returnLocation"])
let zoom = ref(10)
let center = ref([35.7219, 51.3347])
let markerPosition = ref(null)
let mapInstance = ref(null)

////////

const onMapClick = (event) => {
  const { lat, lng } = event.latlng
  markerPosition.value = [lat, lng]
  emit("returnLocation", markerPosition.value)
}
</script>

<style>
.leaflet-top .leaflet-control {
  @apply mt-[70px] md:mt-4
}
</style>
