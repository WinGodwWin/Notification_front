import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    default_notification: {
      status: false,
      timeout: 6000,
      multiLine: false,
      right: false,
      top: false,
      vertical: false,
      color: "rgba(0, 1, 0, 1)",
      left: true,
      bottom: true,
      absolute: false,
      message: ""
    },
    snackbar: null,
    notification: function () {
      return this.default_notification;
    },

    appName: "Notification",
    appTitle: null,
    breadcrumbs: [],
    allowedLang: ["fr", "en"],
    defaultLang: "fr"
  },
  getters: {
    allowedLang: state => {
      return state.allowedLang;
    },
    defaultLang: state => {
      return state.defaultLang;
    },
    appTitle: state => {
      return state.appTitle;
    },
    appName: state => {
      return state.appName;
    },
    default_notification: state => {
      return state.default_notification;
    },
    notification: state => {
      return state.notification;
    },
    snackbar: state => {
      return state.snackbar;
    },
    lang: state => {
      return state.lang;
    },

  },
  mutations: {
    SET_LANG(state, lang) {
      state.lang = lang;
    },
    SET_APP_TITLE(state, appTitle) {
      if (appTitle) {
        state.appTitle = appTitle + " - " + state.appName;
      } else {
        state.appTitle = state.appName;
      }
    },
    SET_NOTIFICATION(state, notification) {
      state.notification = notification;
    },
    SET_SNACKBAR(state, snackbar) {
      state.snackbar = snackbar;
    }
  },
  actions: {
    setLang: (store, lang) => {
      store.commit("SET_LANG", lang);
    },
    setAppTitle: (store, title) => {
      store.commit("SET_APP_TITLE", title);
    },
    setNotification: (store, options) => {
      // clear old snackbar
      clearTimeout(store.getters.snackbar);

      // merge default notifications options with current options and set notification
      let currentOptions = Object.assign(
        {},
        store.getters.default_notification,
        options
      );
      store.commit("SET_NOTIFICATION", currentOptions);

      // set snackbar
      let snackbar = window.setTimeout(function () {
        store.commit("SET_NOTIFICATION", store.getters.default_notification);
      }, currentOptions.timeout);

      store.commit("SET_SNACKBAR", snackbar);
    },
    get: (store, data) => {
      let params = {
        size: data.size ? data.size : null,
        page: data.page ? data.page - 1 : null,
        search: data.search ? data.search : null
      };
      return new Promise((resolve, reject) => {
        Vue.axios
          .get(data.route, {
            params: params
          })
          .then(response => {
            resolve(response);
          })
          .catch(err => {
            reject(err);
          })
          .then(() => {
            resolve();
          });
      });
    },
    post: (store, params) => {
      return new Promise((resolve, reject) => {
        Vue.axios
          .post(params.route, params.data)
          .then(response => {
            resolve(response);
          })
          .catch(err => {
            reject(err);
          })
          .then(() => {
            resolve();
          });
      })
    }
  }
});
