var request = require('supertest')
  , express = require('express');
 
var app = require('../app');
 
describe('Home Page', function() {
  it("renders successfully", function(done) {
    request(app).get('/')
    .expect(200)
    .expect(/127.0.0.1/)
    .expect(/IP Cow/, done);
  })
})