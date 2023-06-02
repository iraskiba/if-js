 function minNum  (a , b) {
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

function maxNum  (x , y) {
  return  x > y ? x : y ; }

console.log(maxNum (10, 4));
console.log(max (10, 7));
console.log(minNum (10, 7));

const length = 10;
const array = [];
for (let i = 0; i < length ; i++) {

  const randomArray = Math.floor(Math.random() * 101);
  array.push(randomArray);
}
function replace(getZero){
  for (let i = 0; i < getZero.length ; i++) {
    if (getZero[i] === 0) {
      getZero[i] = 'zero';
      console.log(getZero[i]);
    } else if (getZero[i] % 10 === 0) {
      getZero[i] = getZero[i].toString()[0] + 'zero';
    } else if (getZero[i] % 100 === 0) {
      getZero[i] = getZero[i].toString()[0] + 'zerozero';
    }
  }

  return getZero;
}

console.log(replace(array));

function polindrom (yourword) {
  let getword = '';
  for (let i = yourword.length - 1 ; i >=0; i--){
    getword += yourword[i];
  }
  return yourword === getword;
}

console.log(polindrom('mama'));




