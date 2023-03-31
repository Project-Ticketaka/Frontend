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
        	target: 'http://a705ec0d1338843baa8c7c38234753cf-1514463484.ap-northeast-2.elb.amazonaws.com/',
          	changeOrigin: true,
        })
    )

	app.use(
    	"/reservation",
      	createProxyMiddleware({
        	target: 'http://a705ec0d1338843baa8c7c38234753cf-1514463484.ap-northeast-2.elb.amazonaws.com/',
        })
    )

	app.use(
    	"/member",
      	createProxyMiddleware({
        	target: 'http://a705ec0d1338843baa8c7c38234753cf-1514463484.ap-northeast-2.elb.amazonaws.com/',
          	changeOrigin: true,
        })
    )
}