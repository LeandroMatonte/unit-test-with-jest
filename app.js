//app.js file content
console.log("Hello World");
const sum = (a,b) => {
    return a + b;
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (dollar) => {
    let euro = dollar / oneEuroIs.USD;
    return euro * oneEuroIs.JPY;
}

const fromEuroToDollar = (euro) =>{
    return euro * oneEuroIs.USD;
}

const fromYenToPound = (yen) =>{
    let euro = yen / oneEuroIs.JPY;
    return euro * oneEuroIs.GBP;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };