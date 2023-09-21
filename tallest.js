// find the largest number from an array:

// function maxInArray(numbers){
//     let largest = numbers[0]; 
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//        if(element > largest){
//         largest = element;
//        }
//     }
//     return largest;

// }

// const height = [167, 190, 120,265, 165, 137];
// const tallest = maxInArray(height);
// console.log(tallest);


let smallest = [0];
function minInArray(numbers){
      for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element < smallest){
            smallest = element;
        }
      }
      return smallest;

}
const height = [120, 130, 210, 50, 39,265,600, 850];
const small =minInArray(height);
console.log(small);