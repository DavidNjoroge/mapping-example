<template>
  <div>
    <l-map style="height: 300px" :zoom="zoom" :center="center" @click="addMarker">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker v-if="markerLatLng" :lat-lng="markerLatLng"></l-marker>
    </l-map>
  </div>
</template>

<script>
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  props: {
    value: [Object],
  },

  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [51.505, -0.159],
      markerLatLng: null
    };
  },

  watch: {
    value: {
      immediate: true,
      handler(to) {
        this.markerLatLng = to;
        },
    },
    markerLatLng(to) { this.$emit('input', to); }
  },
  methods: {
    addMarker(e) {
      this.markerLatLng = e.latlng;
    }
  }
}
</script>
