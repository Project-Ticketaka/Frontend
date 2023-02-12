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
}