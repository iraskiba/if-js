
function deletetff (str){
  return str.replace(/\d/g,'');
}
console.log(deletetff('daysInMonth = 30'))

function  generate (num)
{
  const arr = new Array(num).fill(0);//заполнение массива 0 так как с undefinet не работает мэп
  const newArr = arr.map((item, i) => i * 2 + 1);
  return newArr;
}
console.log(generate(8));
function getarrays (ar)
{
  //return ar.concat(ar);
  return [3,3,3,...ar, ...ar];

}

console.log(getarrays([1,2,3,4,5,6,7,8]))

function getPositiv (arr){
  return arr.filter((item) => {
    return item > 0;
  });
}

console.log(getPositiv([-1,2,5,6,-7]))


function getStr (arr){
  return arr.filter(el => typeof el === 'string');
}

console.log(getStr(['mom', 1,2,4, 'cat']))

function  getCase (array){
  return array.map(el => el.toUpperCase());

}

console.log(getCase(['q', 't', 'y']));

function goto (arr){
  return arr.map(el => el.length)//возврат цифры длины строки в массиве
}
