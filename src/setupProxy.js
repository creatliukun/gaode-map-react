const { createProxyMiddleware } = require("http-proxy-middleware");
 
module.exports = function (app) {
  app.use(
    "/devApi",
    createProxyMiddleware({
      target: "https://passport.csdn.net",
      changeOrigin: true,
      pathRewrite: {
        "^/devApi": "",
      },
    })
  );
};