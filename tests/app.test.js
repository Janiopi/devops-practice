const request = require('supertest');
const app = require('../src/app');

describe('GET /',()=>{
    ('it should return Hello, World!',async()=>{
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);//Codigo 200 ok
        expect(res.text).toBe('Hello,World!'); //Lo que se espera que retorne el enpoint /
    });
});

