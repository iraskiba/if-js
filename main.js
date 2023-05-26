let user = 'John Doe';

console.log(user);

const student = 'Irina';

console.log(student);

user = 'student';

//student

console.log(user);

let test = 1;

test ++;

test += '1';
//21

console.log(test);

test --;
//20
console.log(test);

test =Boolean(test);
//true
console.log(test);

const numbers = [2, 3, 5, 8];

let result = 1;

for (let i= 0; i < numbers.length; i++) {

  result *= numbers [i];

}
console.log(result);

const array = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i <= array.length; i++){

if (array [i] > 5 && array[i] < 10) {

  console.log(array[i]);
}

}

const arr = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i <= arr.length; i++) {

  if (arr[i] % 2 === 0) {

    console.log (arr [i]);
  }

}

