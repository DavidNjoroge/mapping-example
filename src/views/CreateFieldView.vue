<template>
  <div>
    <h1>This is a create field</h1>
    <div class="container text-left">

      <CreateFieldForm/>

      <v-divider/>
      <FieldMappingSection />

    </div>


  </div>
</template>
<script setup>
import CreateFieldForm from "@/views/CreateFieldForm.vue";
import FieldMappingSection from "@/views/FieldMappingSection.vue";
</script>
