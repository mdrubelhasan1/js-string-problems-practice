const iman ='la ilaha illallahu Muhammadur rasulullah (sm)';
const searchString = 'Ilaha';
const imanLowerCase = iman.toLowerCase();
const lowerCase = searchString.toLowerCase();
const doesExist = imanLowerCase.includes(lowerCase);
console.log(doesExist);
// In one line:
// const doesExist = iman.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExist);

// ------------------------------------------
// Index of:
console.log(iman.indexOf('ilaha'));
console.log(iman.indexOf('subahan'));
if (iman.indexOf('rubel')!== -1){
    console.log('exist the string');
}
else{
    console.log('do not find it');
}
// startWith :
console.log(iman.startsWith('ilaha'));

// endWith:
const fileName = 'biodata.pdf';
const otherFile = 'pic.png';
const searchFile = fileName.endsWith('pdf');
console.log(searchFile);