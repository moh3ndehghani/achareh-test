<template>
  <div class="box overflow-hidden h-[400px] mt-4">
    <div class="bg-white h-[50px] px-10 py-2.5">
      <span class="text-xs font-bold">موقعیت مورد نظر خود را روی نقشه مشخص کنید</span>
    </div>
    <div class="w-full h-[350px]">
      <l-map ref="map" v-model:zoom="zoom" v-model:center="center" :useGlobalLeaflet="false">
        <l-tile-layer url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
          layer-type="base"></l-tile-layer>
      </l-map>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet"


let zoom = ref(10)
let center = ref([35.7219, 51.3347])
</script>
