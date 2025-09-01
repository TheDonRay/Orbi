//testing the homepage route here  

const request = require('supertest'); 
const app = require('../app.js');  

describe('writing test for the homepage route to make sure that data is shown', () => {
    test('homepage route', async () => { 
        const result = await request(app) 
            .get('/api/v1/home') 
            .expect("Content-Type", /json/)
            .expect(200); 

        expect(result.body.btntitle).toBe('Your Inbox, In Orbit');  
        expect(result.body.secondbtntitle).toBe('Learn More'); 
        expect(result.body.cardData).toBe(`Orbi tackles the daily email overload millions face by cutting 
        through clutter to deliver your key tasks, updates, and info in one clear, 
        concise email. Designed to save time and boost productivity, Orbi helps you 
        focus on what matters most—transforming inbox chaos into streamlined efficiency.`)
    }); 
});  


//TODO: need to write tests for the userpage using mocking modules and mock functions