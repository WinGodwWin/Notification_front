export default {
  request: function(req, token) {
    if (typeof token !== "undefined") {
      let tokens = JSON.parse(token);
      this.options.http._setHeaders.call(this, req, {
        Authorization: "Bearer " + tokens.access_token
      });
    }
  },

  response: function(res) {
    if (res.data) {
      // return token and refresh token
      if (res.data.access_token && res.data.refresh_token)
        return JSON.stringify(res.data);
    }
  }
};
