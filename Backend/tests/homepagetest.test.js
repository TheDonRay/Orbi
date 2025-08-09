// working on the homepage testing the route out. 
const request = require('supertest');
const app = require('../app.js');  

describe('Testing the home Route but later working on learning how to test put, post, patch requests', () => { 
    test('if home route is sending correct response', async() => { 
        // create your await promise  
        const result = await request(app) 
            .get('/api/v1/home') 
            .expect("Content-Type", /json/) 
            .expect(200) 
            // here the .text is the key name
        expect(result.body.btntitle).toBe('Get Started'); 
    }); // keyname is the key and after the toBe matcher u need to put in the value of that key which is usually in quotes. 
}); 