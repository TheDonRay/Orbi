//practicing supertest  
// import supertest 
const request = require("supertest"); 
const app = require("../app.js");  

// as usual you can start of with your describe global function to start the varies of different tests 
// describe("Get /greet", () => { 
//     test("should greet the world when no name is provided", async () => { 
//         const result = await request(app)
//             .get("/api/v1/greet") 
//             .expect("Content-Type", /json/)
//             .expect(200); 

//         expect(result.body.message).toBe("Hello, World!"); 
//     });   

//     // i can even test req query parameters remember req query are with teh question park not the colons those are req params with the :.  
//     test("should test the req query parameter on the router", async() => { 
//         const result = await request(app) 
//             .get('/api/v1/greet?name=Ray') 
//             .expect("Content-Type", /json/)
//             .expect(200) 

//         expect(result.body.message).toBe("Hello, Ray!")
//     }); 
// });   

/* here im going to try out some PUT POST AND PATCH requests to help me understand how the requests and stuff work.  */
describe('practicing with Post Put Patch requests made to the route endpoint', () => { 
    
})
