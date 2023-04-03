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
        	target: 'http://ticketaka-ing-370568305.ap-northeast-2.elb.amazonaws.com',
          	
        })
    )

	app.use(
    	"/reservation",
      	createProxyMiddleware({
        	target: 'http://ticketaka-ing-370568305.ap-northeast-2.elb.amazonaws.com',
        })
    )

	app.use(
    	"/member",
      	createProxyMiddleware({
        	target: 'http://ticketaka-ing-370568305.ap-northeast-2.elb.amazonaws.com/',
          	changeOrigin: true,
        })
    )
}