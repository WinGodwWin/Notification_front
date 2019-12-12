import Vue from 'vue';
import Bearer from './authbearer'

const Auth = require('@websanova/vue-auth')
const tokenName = process.env.VUE_APP_TOKEN_NAME

Vue.use(Auth, {
  auth: Bearer,
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  fetchData: {
    url: 'token/me', method: 'GET', enabled: true
  },
  tokenDefaultName: tokenName,
  rolesVar: 'role',
  loginData: { url: 'token/signin', method: 'POST', redirect: '/', fetchUser: true },
  logoutData: {
    url: 'token/signout', method: 'POST', redirect: '/login', makeRequest: true, transformRequest: function (data) {
      data = JSON.stringify({ refresh_token: JSON.parse(Vue.auth.token(tokenName)).refresh_token })
      return data;
    }
  },
  refreshData: {
    url: 'token/refresh', method: 'POST', enabled: true, transformRequest: function (data) {
      data = JSON.stringify({ refresh_token: JSON.parse(Vue.auth.token(tokenName)).refresh_token })
      return data;
    }
  },
  parseUserData: (data) => data
})
