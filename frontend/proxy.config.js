// Note: You'll have to restart your dev server in order for changes to proxy.config.js to take effect.

module.exports = {
  /*
   * target tells the proxy where to redirect requests.
   * If omitted requests go to 'preview.nferx.com', but you can
   * uncomment below to go to pre-staging.nferx.com
   * */
  // target: 'https://pre-staging.nferx.com',

  /*
   * Router can be used to proxy specific url paths
   * the key here is the path that should be proxied
   * and the value is the domain it should be proxied to
   * */
  router: {
    // redirect the route /graphql to http://localhost:4225/graphql
    // '/graphql': 'http://localhost:4225',
  },

  // You can see the full list of proxy options here: https://github.com/chimurai/http-proxy-middleware

  // RECOMMENDED:
  // uncomment/fill out the properties below to configure cookie authentication
  // more info here: https://github.com/lumenbiomics/nferx-core-ui/blob/master/dev-auth.md

   sessionid: 'caz8omq2waxaat2m7q0acmugs879y6hb',
   csrftoken: 'A9JWXa0uMqfzZd6SF4YdDYubzw8vBk0sYerNmN4at9kQlEwRAmvTZn2OzqnHG6CS',
}
