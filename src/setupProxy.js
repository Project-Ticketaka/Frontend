const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app){
	app.use(
    	"/api",
      	createProxyMiddleware({
        	target: 'http://kopis.or.kr/openApi/restful/boxoffice',
          	changeOrigin: true,
          	pathRewrite: {
            	'^/api': ''
            }
        })
    )

	app.use(
    	"/performance",
      	createProxyMiddleware({
        	target: 'http://43.201.26.51/',
          	changeOrigin: true,
        })
    )

	app.use(
    	"/reservation",
      	createProxyMiddleware({
        	target: 'http://43.201.26.51/',
          	changeOrigin: true,
        })
    )

	app.use(
    	"/member",
      	createProxyMiddleware({
        	target: 'http://43.201.26.51/',
          	changeOrigin: true,
        })
    )
}