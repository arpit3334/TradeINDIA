// src/setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://13.48.136.54:8000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api/api-code' // Rewrite /api to /api/api-code in the request URL
      }
    })
  );
};
