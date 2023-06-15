const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '*',
    createProxyMiddleware({
      target: 'http://localhost:3000/', // Replace with your API server URL
      changeOrigin: true,
      headers: {
        'Access-Control-Allow-Origin': '*', // Set appropriate allowed origins
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
  );
};