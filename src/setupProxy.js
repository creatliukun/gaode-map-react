const { createProxyMiddleware } = require("http-proxy-middleware");
 
module.exports = function (app) {
  // 代理
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