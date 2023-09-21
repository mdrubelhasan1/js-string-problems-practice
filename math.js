const result = Math.pow(3,8);
console.log(result);
// find gap:
const num1 = 41;
const num2 = 45;
const gap = Math.abs(num1 - num2);
console.log(gap);
if(gap<5){
    console.log('you guys can be friend');
}
else{
    console.log('you guys stay apart');
}
// --------------------------
// float to integer convert using math operation:
const number = 2.5;
const fullNumber = Math.round(number);
console.log(fullNumber);

const result2 = 256.321;
const result3 = Math.ceil(256.321);
console.log(result3);
const result4 = Math.floor(256.321);
console.log(result4);
// -------------------------------
// Random:
// ----------------------------------
const random = Math.random();
console.log(random);
const random1 = Math.round(Math.random()*6);
console.log(random1);