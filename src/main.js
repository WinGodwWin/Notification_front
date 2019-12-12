import Vue from "vue";
import router from "./router/index";
import "./plugins/vuetify";
import "./plugins/vuebar";
import "./plugins/vueheadful";
import "./plugins/vueaxios";
import "./plugins/vueauth";
import "./plugins/vuemoment";
import "./plugins/vuelidate";
import "./plugins/vuelodash";
import App from "./App.vue";
import store from "./store/index.js";
import "typeface-roboto";
import "material-design-icons/iconfont/material-icons.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
