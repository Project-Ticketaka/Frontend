const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app){
	app.use(
    	"/performance",
      	createProxyMiddleware({
        	target: 'https://ticketaka.shop/',
			changeOrigin: true,
          	
        })
    )

	app.use(
    	"/reservation",
      	createProxyMiddleware({
        	target: 'https://ticketaka.shop/',
			changeOrigin: true,
        })
    )

	app.use(
    	"/member",
      	createProxyMiddleware({
        	target: 'https://ticketaka.shop/',
          	changeOrigin: true,
        })
    )
}