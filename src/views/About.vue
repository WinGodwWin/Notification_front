<template>
  <v-container fluid>
    <about></about>
  </v-container>
</template>


<script>
import About from "@/components/About.vue";
export default {
  data: () => ({}),
  created() {
    this.$store.dispatch(
      "setAppTitle",
      this.$vuetify.t("About")
    );
  },
  components: {
    About
  }
};
</script>
