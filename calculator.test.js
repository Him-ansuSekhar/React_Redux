import Calculator from './calculator'; 

// Test Suite definition
describe('Test Suite for Calculator Class', ()=>{
    // Test Case

    it('Add two number', ()=>{
        let cal = new Calculator(); 
        let result=cal.add(3, 4); 
        // Matcher functions 

        expect(result).toBe(7); 
    })
});