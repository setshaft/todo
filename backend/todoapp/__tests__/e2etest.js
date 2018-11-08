const app = require('../app');
const request = require('supertest');
const assert = require('assert');

describe('GET todos', function () {
    test('responds with json', function () {
        return request(app)
            .get('/api/todos')
            .set('Accept', 'application/json')
            .expect(200)
            .then(response => {
                assert(response.body.message, 'Succesfully Todos Recieved')
            })
    });
});


describe('POST todo', function () {
    test('posts todo', function (done) {
        request(app)
            .post('/api/todos')
            .send({
                title: 'Code Js',
                description: 'Code what?',
                status: 'pending'
            })
            .set('Accept', 'application/json')
            .expect(201)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });
});

