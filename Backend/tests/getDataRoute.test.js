// this test is to check if the express route is going to be tested by practicing how to test routes using Jest unit tests / unit integration etc 
const request = require('supertest');  // used for HTTP testing for routes and data quyerying
const app = require('../app.js'); // call the server app.js

describe('testing the getData Route', () => { 
    test('if the route sends that message', async () => { // remember that http requests 
        const result = await request(app)  
            .get('/api/v1/userActivity/getuserData') // this is the route we call where the client uses. 
            .expect("Content-Type", /text/) 
            .expect(200) 

        expect(result.text).toBe("This route gets the userdata its where the database is going to be querying"); 
    });  
}); 
