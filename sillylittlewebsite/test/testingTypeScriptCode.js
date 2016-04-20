var should = require('should');
var Greeter = require('../lib/tsCode.js');

describe('Typescript is compiled ok', function(){
  it('when this passed', function() {
    var g = new Greeter();
    g.greet('Yoda').should.equal('A type-scripting greeting to you, Yoda');
  });
});