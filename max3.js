const jim = 84;
const dela = 97;
const chinku = 99;

if( jim > dela && jim > chinku){
    console.log('Jim will get the cake');
}
else if( dela > jim && dela > chinku){
    console.log('Dela will get the cake');
}
else{
    console.log('chinku will get the cake');
}

// Using math.max method:

const largeNumber = Math.max(jim,dela, chinku);
console.log(largeNumber);

// Using math.min method:

const smallNumber = Math.min(jim, dela, chinku);
console.log(smallNumber);

// Find large number using function:
// Given number is:
const rubel = 98;
const jahid = 55;
const robiul = 75;

function maxNumber(x ,y, z){
    let bigNumber = 0;
    if( x > y && x > z){
        bigNumber = x;
    }
    else if(y > x && y > z){
        bigNumber = y;
    }
    else{
        bigNumber = z;
    }
    return bigNumber;
}
const myNumbers = maxNumber(98, 55, 75);
console.log( 'The largest number is:',myNumbers);
 const values = Math.floor(13.67);
 console.log(values);