// importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})

test("One yen should be 106.58 dollars", ()=>{
    const euro = fromDollarToYen(2)
    const expected = (2/1.2) * 127.9;

    expect(expected).toBe(euro);
})

test("100 yen should be 0.67 pounds", () =>{
    const pounds = fromYenToPound(100);
    const expected = (100 / 127.9) * 0.8;

    expect(expected).toBe(pounds);
})