var request = require('supertest'),
    express = require('express');

var app = require('../app');

// Positive Tests 
describe('Home Page', function() {
    it("renders successfully", function(done) {
        request(app).get('/')
            .expect(200)
            .expect(/127.0.0.1/)
            .expect(/IP Cow/, done);
    })
})

describe('Health Check', function() {
    it("renders successfully", function(done) {
        request(app).get('/health')
            .expect(200)
            .expect(/Moovelous/, done);
    })
})

// Negative Test
describe('Error Page', function() {
    it("renders successfully", function(done) {
        request(app).get('/foo')
            .expect(404)
            .expect(/Not Found/, done);
    })
})