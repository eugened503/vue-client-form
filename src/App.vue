<template>
  <div id="app" class="container mt-5">
    <vuelidate-form />
  </div>
</template>

<script>
import VuelidateForm from "./components/VuelidateForm";

export default {
  name: "App",
  components: {
    VuelidateForm
  }
};
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");
</style>
