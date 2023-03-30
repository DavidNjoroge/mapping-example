<template>
  <div>
    <l-map style="height: 300px" :zoom="zoom" :center="center" @click="onMapClick">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker v-if="markerLatLng" :lat-lng="markerLatLng"></l-marker>
      <l-polygon v-if="polygonLatLngs" :lat-lngs="polygonLatLngs"></l-polygon>
    </l-map>
  </div>
</template>

<script>
import {LMap, LTileLayer, LMarker, LPolygon} from 'vue2-leaflet';

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

  watch: {
    value: {
      immediate: true,
      handler(to) {
        if (to) {
          this.markerLatLng = to.marker;
          this.polygonLatLngs = to.polygon;
        } else {
          this.markerLatLng = null;
          this.polygonLatLngs = null;
        }
      }
    },
    markerLatLng(to) {
      this.$emit('input', {
        marker: to,
        polygon: this.polygonLatLngs
      });
    },
    polygonLatLngs(to) {
      this.$emit('input', {
        marker: this.markerLatLng,
        polygon: to
      });
    }
  },
  methods: {
    onMapClick(e) {
      const latlng = e.latlng;
      if (!this.markerLatLng) {
        // Add marker
        this.markerLatLng = latlng;
      } else {
        // Add point to polygon
        const latlngs = this.polygonLatLngs ? this.polygonLatLngs.slice() : [];
        latlngs.push(latlng);
        this.polygonLatLngs = latlngs;
      }
    }
  }
}
</script>
