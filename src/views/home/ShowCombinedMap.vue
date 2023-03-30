<template>

  <div>
    <div>
      <button @click="clickBtn">
        Change rectangle style
      </button>
    </div>
    <l-map
        :zoom="zoom"
        :center="center"
        style="height: 500px; width: 100%"
    >
      <l-tile-layer
          :url="url"
          :attribution="attribution"
      />

      <l-polygon
          v-for="poly in allLocations"
          :key="poly.marker"
          :lat-lngs="poly.polygon"
          :color="getRandomColor()"
      />

    </l-map>
  </div>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LPolygon,
} from "vue2-leaflet";

export default {
  props: {
    allLocations: [Array],
  },
  watch: {
    allLocations: {
      immediate: true,
      handler(to) {
        if(to) {
          this.formFields = to;
        }
      },
    },

  },

  components: {
    LMap,
    LTileLayer,
    LPolygon,
  },
  data() {
    return {
      zoom: 14,
      center: [51.505, -0.159],
      parsedPolygons: [],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    };
  },
  methods: {
    clickBtn() {
      this.rectangle.style.weight++;
      this.rectangle.style.color =
          this.rectangle.style.weight % 2 === 0 ? "blue" : "green";
    },
    getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }
};
</script>
