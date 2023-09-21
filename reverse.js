

let reverse = '';
function reverseString(text){
    for(let i = text.length-1; i >=0; i--){
        const element = text[i];
        reverse = reverse + element
        console.log(reverse,element);
    }
    return reverse;
}
const myString = 'I am a good boy';
const reversed = reverseString(myString);
console.log( 'reverse output:' ,reversed);