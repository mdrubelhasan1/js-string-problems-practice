const lyrics = 'taohideri murshid amar muhammader nam. murshid muhammader nam. oi nam joplei bujte pari allahri kalam.';
const parts = lyrics.split(' ');
// console.log(parts);
const sentence = lyrics.split('.');
// console.log(sentence);
const chars = lyrics.split('');
// console.log(chars);

const partial1 = lyrics.slice(5,8);
console.log(partial1);
const partial2 = lyrics.substring(5,8);
console.log(partial2);

const lines = [
    'taohideri murshid amar muhammader nam',
    ' murshid muhammader nam',
    ' oi nam joplei bujte pari allahri kalam',
    ''
  ];
  const newLine = lines.join(':');
  console.log(newLine);