

// just making sure if jest is correctly installed on the project  
// testing if the coverage will take care of the files as such if they are only imported remember im using CommonJS 
const testing = require('../routes/function.js'); 
 

describe('Testing whether the coverage file will work based of imported files', () => { 
    test('whether it will recognize files and lines etc', () => { 
        expect(testing(2, 4)).toBe(6); 
    }); 
}); 

