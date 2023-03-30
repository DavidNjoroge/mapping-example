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
      </div>

    </div>


  </div>
</template>
<script>
import FieldMappingSection from "@/views/FieldMappingSection.vue";
import CreateFieldForm from "@/views/CreateFieldForm.vue";

export default {
  components: {
    CreateFieldForm,
    FieldMappingSection
  },

  props: {
    value: Boolean,
    required: Boolean,
  },

  data: () => ({
    formValid: false,
    form: null,
    fieldLocation: null
  }),

  watch: {
    value: {
      immediate: true,
      handler(to) { this.hash = to; }
    },
    hash(to) { this.$emit('input', to); },
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

    }
  }


}
</script>
