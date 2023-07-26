const supertest = require('supertest');
const app = require('../app');

const server = supertest(app);

describe('test app', () => { 
    it('should return 200', async()=> {
        const response = await server.get('/');
        expect(response.status).toBe(200);
    })
 })

