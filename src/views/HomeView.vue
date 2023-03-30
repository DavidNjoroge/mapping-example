<template>
  <div class="container">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <v-list>
      <v-list-item
          v-for="item in fields"
          :key="item.name"
      >
        <v-list-item-content>
<!--          <v-list-item-title v-text="`${item.name}: ${item.primaryCrop.crop}`"></v-list-item-title>-->
          <router-link :to="`/field/${item.uuid}`">{{`${item.name}: ${item.primaryCrop.crop}`}}</router-link>
        </v-list-item-content>

<!--        <v-list-item-avatar>-->
<!--          <v-img :src="item.avatar"></v-img>-->
<!--        </v-list-item-avatar>-->
      </v-list-item>
    </v-list>

<!--    <AllFieldsMapSection />-->

    <ShowCombinedMap :allLocations="allFieldLocations" />
  </div>
</template>

<script>
// @ is an alias to /src

import {store} from "@/store";
import ShowCombinedMap from "@/views/home/ShowCombinedMap.vue";

export default {
  name: 'HomeView',
  components: {
    ShowCombinedMap,
  },
  computed: {
    fields() {
      return store.state.fields
    },
    allFieldLocations () {
      return this.fields.map(f => f.fieldLocation)
    }
  },
}
</script>
