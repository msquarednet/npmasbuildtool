var app = require('koa')();


app.use(function *(){
  this.body = 'Koa says Hi!';
})

// var port = process.env.PORT || process.argv[2] || 3000;
var port = process.env.PORT || 3000;
app.listen(port);

console.log('Application Started. PORT:'+port);


module.exports = app  //so is visible to 'test/site.spec.js'

