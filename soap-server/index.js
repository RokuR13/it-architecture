var soap = require('soap');
var myService = {
      MyService: {
          MyPort: {
              HelloWorld: function(args) {
                  return {
                      name: "Hello"+args.name
                  };
              },

		  }
	  }  
  };

  var xml = require('fs').readFileSync('myservice.wsdl', 'utf8');

  //http server example
  var server = require("http").createServer(function(request,response) {
      response.end('404: Not Found: ' + request.url);
  });

  server.listen(8000);
  soap.listen(server, '/wsdl', myService, xml, function(){
    console.log('server initialized');
  });