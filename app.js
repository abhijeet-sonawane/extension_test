var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('bltdeac9ae51b85c4891')
.setHost("test-stag-api.built.io")
.setProtocol("https")
.setMasterKey('blt94ec4ebcafda3ab9')

var extensionSDK = app.Extension({
	secret_key     : 'blt12345',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


