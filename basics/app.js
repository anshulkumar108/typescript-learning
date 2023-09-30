var number1 = document.getElementById('num1');
var number2 = document.getElementById('num2');
var button = document.querySelector('button');
// function add(number1: number, number2: number){
//     return number1+number2;
// }
// console.log(add(1,5));
var numberArray = [];
var stringArray = [];
function add(number1, number2) {
    if (typeof number1 === "number" && typeof number2 === "number") {
        return number1 + number2;
    }
    else if (typeof number1 === "string" && typeof number2 === "string") {
        return number1 + ' ' + number2;
    }
    return +number1 + +number2;
}
button.addEventListener('click', function () {
    var value1 = number1.value;
    var value2 = number2.value;
    var result = add(+value1, +value2);
    numberArray.push(result);
    var stringResult = add(value1, value2);
    stringArray.push(stringResult);
    console.log(result);
    console.log(stringResult);
    console.log(numberArray, stringArray);
    printResult({ val: result, timeStamp: new Date() });
});
function printResult(resultObj) {
    console.log(resultObj.val);
}
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("it worked");
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});

