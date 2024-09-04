const request = require('supertest');
const app = require('../src/app');

describe('GET /',()=>{
    let server; 

    beforeAll(() => {
        server = app.listen(0); // Usar 0 permite al sistema asignar un puerto libre automáticamente
    });

    afterAll(() => {
        server.close(); // Cierra el servidor después de que las pruebas hayan terminado
    });

    it('should return Hello, World!',async()=>{
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);//Codigo 200 ok
        expect(res.text).toBe('Hello, World!'); //Lo que se espera que retorne el enpoint /
    });

    afterAll(async () => {
        server.close(); // Close server after all tests
    })
});


