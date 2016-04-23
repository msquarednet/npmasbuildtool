var app = require('koa')();

var html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Timestamp Test Page!</title>
    <script src="//localhost:9091"></script> 
  </head>
  <body>
    <p>Page rendered at: <br><span id="timestamp"></span></p>
  </body>
  <script>
    document.getElementById('timestamp').innerHTML = new Date();
  </script>
</html>
`;  //very hacky

app.use(function *(){
  if (this.request.path === '/client') {
    this.body = html; return;
  }
  this.body = 'Koa says Hi';
})

// var port = process.env.PORT || process.argv[2] || 3000;
var port = process.env.PORT || 3000;
//app.listen(port);
if(!module.parent) {  // if NOT testing...
    app.listen(port);
}

console.log('Application Started. PORT:'+port);


module.exports = app  //so is visible to 'test/site.spec.js'

