<template>
  <div>
    <l-map style=" width: 90vw; height: 70vh; " :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker v-if="markerLatLng" :lat-lng="markerLatLng"></l-marker>
      <l-polygon v-if="polygonLatLngs" :lat-lngs="polygonLatLngs"></l-polygon>
    </l-map>
  </div>
</template>

<script>

import {LMap, LMarker, LPolygon, LTileLayer} from "vue2-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPolygon
  },
  props: {
    value: {
      type: Object,
      default: null
    },
  },

  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [51.505, -0.159],
      markerLatLng: null,
      polygonLatLngs: null
    };
  },


}
</script>

<style scoped>

</style>
