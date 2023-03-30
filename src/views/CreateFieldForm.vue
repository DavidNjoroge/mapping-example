<template>
  <div>
    count: {{fields}}
    <v-text-field
        v-model="formFields.name"
        :counter="10"
        :rules="requiredValidation"
        label="Name"
        required
    ></v-text-field>

    <v-select
        v-model="formFields.primaryCrop"
        :items="cropOptions"
        :rules="[v => !!v || 'Item is required']"
        label="Primary Crop"
        item-text="crop"
        return-object
        required
    ></v-select>

    <v-select
        v-model="formFields.otherCrops"
        :items="cropOptions"
        :rules="[v => !!v || 'Item is required']"
        label="Other Crops"
        required
        item-text="crop"
        return-object
        multiple
    ></v-select>
    <v-btn
        depressed
        color="primary"
    >
      Primary
    </v-btn>
  </div>
</template>
<script>
import {store} from "@/store";

export default {
  props: {
    value: [Object],
  },

  data: () => ({
    requiredValidation: [v => !!v || 'Name is required',],
    cropOptions: [
      {
        crop: 'Beetroot',
        yield: {
          conservative: 14,
          likely: 18,
          target: 25,
        }
      },
      {
        crop: 'Broccoli',
        yield: {
          conservative: 5,
          likely: 8,
          target: 12,
        }
      },
    ],
    formFields: {
      name: null,
      primaryCrop: null,
      otherCrops: [],

    },
  }),
  computed: {
    fields() {
      return store.state.fields
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(to) {
        if(to) {
          this.formFields = to;
        }
      },
    },

    formFields:{
      deep: true,
      handler(to) {
        this.$emit('input', to);
      },
    },
  },
  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>
<style scoped>

</style>
