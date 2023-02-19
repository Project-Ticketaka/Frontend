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
    	"/backend",
      	createProxyMiddleware({
        	target: 'http://13.125.4.192/',
          	changeOrigin: true,
        })
    )
	
}