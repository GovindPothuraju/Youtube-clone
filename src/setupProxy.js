const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/suggestions",
    createProxyMiddleware({
      target: "https://suggestqueries.google.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api/suggestions": "/complete/search",
      },
    })
  );
};
