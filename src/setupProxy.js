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
        	target: 'http://3.39.24.183/',
          	changeOrigin: true,
        })
    )

	app.use(
    	"/reservation",
      	createProxyMiddleware({
        	target: 'http://3.39.24.183:8081/',
          	changeOrigin: true,
        })
    )

	app.use(
    	"/member",
      	createProxyMiddleware({
        	target: 'http://3.39.24.183/',
          	changeOrigin: true,
        })
    )
}