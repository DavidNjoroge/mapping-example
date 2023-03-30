<template>
  <div>
    <h1>This is a field</h1>
    {{field}}

  </div>
</template>
<script>
import {store} from "@/store";
import { v4 as uuidv4 } from "uuid";
export default {
  components: {
  },

  data: () => ({
    formValid: false,
    fieldUuid: uuidv4(),
    form: null,
    fieldLocation: null
  }),
  computed: {

    uuid() { return this.$route.params.uuid; },
    field() {
      return store.state.fields.find(f => f.uuid === this.uuid)
    },
    fields() {
      return store.state.fields
    },

  },

}
</script>
