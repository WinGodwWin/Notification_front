import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import fr from "./../locales/fr";
import en from "./../locales/en";

Vue.use(Vuetify);

export default new Vuetify({
    iconfont: "md",
  theme: {
    primary: "#061ea0",// "#1A237E",
    secondary: "#3992F1",//"#F44336", //"#038FF9",// #024253
    third: "#c95303",
    success: "#009688",
    error: "#D50000",
    warning: "#FF9800",
    laut:"#E8EAF6"
  },
  lang: { 
    locales: { fr, en },
    current: "fr"
  }
});
