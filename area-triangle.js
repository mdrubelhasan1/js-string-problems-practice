
// find area of a traingle:
function areaTraingle (side1, side2,side3){
    var p = (side1 + side2 +side3) / 2 ;
    var a = Math.sqrt(p*(p-side1)*(p-side2)*(p-side3));
    return a;
}
const mySide = areaTraingle(11, 10, 10);
const area = Math.round(mySide);
console.log(area);




// find prime number:
function isPrime(number) {
     // Check for numbers less than 2
    if (number <= 1) {
      return false;
    }
  
    // Check for 2 separately
    if (number === 2) {
      return true;
    }
  
    // Check for other even numbers
    if (number % 2 === 0) {
      return false;
    }
  
    // Check for prime divisibility from 3 up to the square root of the number
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  