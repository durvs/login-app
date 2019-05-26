const app = require('../src/js/index')

describe('app', ()=>{
    it('dado um email válido, deve retornar true ', ()=>{
        expect(app().validateEmail('duurval@gmail.com')).toBe(true)
    });
    it('teste ', ()=>{
        expect(app().x('teste')).toBe(null)
    });
});