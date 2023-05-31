 function min  (a , b) {
    if (a > b) {
      return b;
    } else {
      return a;
    }
  }

 function max  (a , y) {
  if (a < y) {
    return y;
  } else {
    return a;
  }
 }

function maxx  (x , y) {
  return  x > y ? x : y ; }

console.log(maxx (10, 4));
console.log(max (10, 7));
console.log(min (10, 7));

const length = 10;
const ari = [];
for (let i = 0; i < length ; i++) {

  const rand = Math.floor(Math.random() * 101);
  ari.push(rand);
}
function rer(arr){
  for (let i = 0; i < arr.length ; i++) {
    if (arr[i] === 0) {
      arr[i] = 'zero';
      console.log(arr[i]);
    } else if (arr[i] % 10 === 0 || arr[i] % 100 ===0 )
    arr[i]= arr[i].toString()[0] +'zero';
  }
  return arr;
}

console.log(rer(ari));

function poli (yourword) {
  let word = '';
  for (let i = yourword.length - 1 ; i >=0; i--){
    word += yourword[i];
  }
  return yourword === word;
}

console.log(poli('mama'));




