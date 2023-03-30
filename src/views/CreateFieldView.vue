<template>
  <div>
    <h1>This is a create field</h1>
    <div class="container text-left">

      <v-form
          ref="form"
          v-model="formValid"
          lazy-validation>

      <CreateFieldForm
          v-model="form"
      />
      </v-form>

      <v-divider/>
      <FieldMappingSection
          v-model="fieldLocation"
      />

      <div>

        {{form}}
      </div>

      <div class="text-left">

        <v-btn
            :disabled="!formValid"
            color="success"
            class="mr-4"
            @click="validate"
        >
          Validate
        </v-btn>

        <v-btn
            color="error"
            class="mr-4"
            @click="reset"
        >
          Reset Form
        </v-btn>

        <v-btn
            color="warning"
            @click="resetValidation"
        >
          Reset Validation
        </v-btn>

        <v-btn
            color="primary"
            :disabled="!fieldsValid"
            @click="saveField"
        >
          Save field
        </v-btn>
      </div>

    </div>


  </div>
</template>
<script>
import FieldMappingSection from "@/views/FieldMappingSection.vue";
import CreateFieldForm from "@/views/CreateFieldForm.vue";
import {store} from "@/store";
import { v4 as uuidv4 } from "uuid";
export default {
  components: {
    CreateFieldForm,
    FieldMappingSection
  },

  data: () => ({
    formValid: false,
    fieldUuid: uuidv4(),
    form: null,
    fieldLocation: null
  }),
  computed: {
    fields() {
      return store.state.fields
    },
    fieldsValid() {
      return this.formValid && this.fieldLocation
    }
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

    saveField() {
      const form = {...this.form,uuid: this.fieldUuid, fieldLocation: this.fieldLocation}
      console.log('saveField', form)
      store.commit('addField', form)
      this.$router.push({name: 'home'});

    }
  }


}
</script>
