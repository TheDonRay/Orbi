// just making sure if jest is correctly installed on the project 
describe('testing these two lines of tests', () => { 
    test('this', () => {
        expect(2+2).toBe(4); 
    }); 

    test('this one as well', () => { 
        const data = {"name": 'Ray'}; 
        data['lname'] = 'TheDon'; 
        expect(data).toEqual({"name": 'Ray', 'lname': 'TheDon'}); // remember with objects to see if they are equal with what you want to expect remember to use toEqual matcher
    }); 

})