//let user = 'John Doe';

/**
 * console.log(user);
 *
 * const student = 'Irina';
 *
 * console.log(student);
 *
 * user = 'student';
 *
 * //student
 *
 * console.log(user);
 *
 * let test = 1;
 *
 * test ++;
 *
 * test += '1';
 * //21
 *
 * console.log(test);
 *
 * test --;
 * //20
 * console.log(test);
 *
 * test =Boolean(test);
 * //true
 * console.log(test);
 *
 * const numbers = [2, 3, 5, 8];
 *
 * let result = 1;
 *
 * for (let i= 0; i < numbers.length; i++) {
 *
 *   result *= numbers [i];
 *
 * }
 * console.log(result);
 *
 * const array = [2, 5, 8, 15, 0, 6, 20, 3];
 *
 * for (let i = 0; i <= array.length; i++){
 *
 * if (array [i] > 5 && array[i] < 10) {
 *
 *   console.log(array[i]);
 * }
 *
 * }
 *
 * const arr = [2, 5, 8, 15, 0, 6, 20, 3];
 *
 * for (let i = 0; i <= arr.length; i++) {
 *
 *   if (arr[i] % 2 === 0) {
 *
 *     console.log (arr [i]);
 *   }
 *
 * }
 */

((pageName)=> {
  console.log(pageName);
  const calc = (p1, p2, ...args) => {
    let acc = p1 + p2 || 1;

    for (let i = 0; i < args.length; i++) {
      acc *= args[i];
    }
    return acc;
  };

  const bob = (a) => a + 100;

  console.log(bob(1));

  const p1 = 1;
  const p2 = 2;
  const p3 = 3;
  const p4 = 4;

  console.log(calc(p1, p2, p3, p4));
})('home');

console.log('------lesson3------');


console.log('-2-----------');

  function min  (a , b) {
    if (a > b) {
      return b;
    } else {
      return a;
    }
  }


console.log(min (10, 7));

function max  (a , y) {
  if (a < y) {
    return y;
  } else {
    return a;
  }
}

console.log(max (10, 7));

function maxx  (x , y) {
  return  x > y ? x : y ; }


console.log(maxx (10, 4));

console.log('-3-------------');
//я не знаю почему не работает вот этот код может тут какая-то ошибка
//let length = 10;
//let ari = [];
//for (let i = 0; i < length ; i++) {

 // let rand = Math.floor(Math.random() * 101);
 // ari.push(rand);
//}
//function rer(arr){
 // for (let i = 0; i < arr.length ; i++) {
    //if (arr[i] === 0) {
     // arr[i] = 'zero';
     // console.log(arr[i]);
   // }
 // }
//  return arr;
//}

//console.log(rer(ari));



const ari = [20, 75, 0, 18, 42, 0, 33, 8, 0, 1];

function rer(arr){
  for (let i = 0; i < arr.length ; i++) {
    if (arr[i] === 0) {
      arr[i] = 'zero';
    }
  }
  return arr;
}
console.log(rer(ari));

console.log('-1--------------');

function poli (yourword) {
  let word = '';
  for (let i = yourword.length - 1 ; i >=0; i--){
    word += yourword[i];
  }
  return yourword === word;
}

console.log(poli('mama'));




