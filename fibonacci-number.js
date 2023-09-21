// In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones. Numbers that are part of the Fibonacci sequence are known as Fibonacci numbers, commonly denoted Fn . The sequence commonly starts from 0 and 1, although some authors start the sequence from 1 and 1 or sometimes (as did Fibonacci) from 1 and 2. Starting from 0 and 1, the first few values in the sequence are:[1]

//  const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
/*
   fibo[3] = fibo[2] + fibo[1]
   fibo[4] = fibo[3] + fibo[2]
   fibo[5] = fibo[4] + fibo[3]
   fibo[50] = fibo[49] +fibo[48]
   fibo[n] = fibo[n-1] + fibo[n-2]
   fibo[i] = fibo[i-1] + fibo[i-2]
*/ 

const fibo = [0, 1];
for(i = 2; i <= 15; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);