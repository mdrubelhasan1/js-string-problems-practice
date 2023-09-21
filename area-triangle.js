

function areaTraingle (side1, side2,side3){
    var p = (side1 + side2 +side3) / 2 ;
    var a = Math.sqrt(p*(p-side1)*(p-side2)*(p-side3));
    return a;
}
const mySide = areaTraingle(11, 10, 9);
const area = Math.round(mySide);
console.log(area);