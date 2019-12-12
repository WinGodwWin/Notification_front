<template>
  <v-app id="app" v-if="$auth.ready()">
    <div>
      <vue-headful :title="appTitle"/>
    </div>
    <v-snackbar
      :absolute="notification.absolute"
      :multi-line="notification.multiLine"
      :color="notification.color"
      :bottom="notification.bottom"
      :left="notification.left"
      :right="notification.right"
      :top="notification.top"
      v-model="notification.status"
      :timeout="0">{{ notification.message }}</v-snackbar>
    <router-view></router-view>
  </v-app>
  <v-app v-else>
    <v-progress-linear height="3" class="ma-0" v-bind:indeterminate="true"></v-progress-linear>
  </v-app>
</template>

<style scoped>
#app {
  background: rgb(238, 244, 248);
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      //
    };
  },
  computed: {
    ...mapGetters({ appTitle: "appTitle", notification: "notification" })
  }
};
</script>
