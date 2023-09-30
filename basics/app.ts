let number1=document.getElementById('num1') as HTMLInputElement;
let number2=document.getElementById('num2') as HTMLInputElement;
const button=document.querySelector('button')!;

// function add(number1: number, number2: number){
//     return number1+number2;
// }
// console.log(add(1,5));

const numberArray:number []=[];
const stringArray:string[]=[];

type numOrString= number | string;
type obj={ val:number,timeStamp:Date}
function add(number1: numOrString, number2: numOrString){
    if(typeof number1 === "number" && typeof number2 === "number" ){
        return number1+number2;
    }else if(typeof number1 === "string" && typeof number2 === "string"){
        return number1+ ' ' + number2;
    }
        return +number1+ +number2;
    }

button.addEventListener('click',()=>{
    const value1=number1.value;
    const value2=number2.value
    const result=add(+value1,+value2)
    numberArray.push(result as number)
    const stringResult=add(value1,value2)
    stringArray.push(stringResult  as string) 
    console.log(result);
    console.log(stringResult);
    console.log(numberArray,stringArray)
    printResult({val:result as number, timeStamp:new Date()})
   })

   function printResult(resultObj:obj){
console.log(resultObj.val);
   }

   const myPromise=new Promise<string>((resolve,reject)=>{
setTimeout(() => {
    resolve("it worked");
    
},1000);
   })

   myPromise.then((result)=>{
console.log(result.split('w'));

   })