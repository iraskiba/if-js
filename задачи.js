
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


function createdMyObject (name,surname){
  this.name = name;
  this.surname = surname;
}
const ob = new createdMyObject('Ira', 'Skiba');
console.log(ob);



const ob1 = {
  name: 'cool obj'
}
const ob2 = Object.create(ob1);
console.log(ob1 === ob2)//false


const obj = {key1:'value1', key2:'value2'}
console.log(JSON.stringify(obj))//приведение к строке


//является ли переменная объектом.добавлена проверка на массив
const isob = (obj) =>{
  return obj instanceof Object && !(obj instanceof Array);
}
console.log(isob({ }))



//вывести данные из обьекта в строку "Клиент: Анатолий Птичкин;
//Место жительства: Беларусь, Минск" Функция должна принять обьект
const myUser ={
  nameDetails:{
    name:'Анатолий',
    surname:'Птичкин'
  },
  adressDetails:{
    country:'Беларусь',
    city:'Минск'
  }
};
function getUser (user) {
  const {nameDetails, adressDetails} = user//обьект который передаем.деструктуризация
  const fulname = nameDetails.name + ' ' + nameDetails.surname;
  const fuladress = adressDetails.country + ' ' + adressDetails.city;
  return `Клиент: ${fulname}; Место жительства: ${fuladress} `;

}
console.log(getUser(myUser))


//добавить обьекту 4й ключ с помощью сетера

const us = {
  name: 'Anna',
  surname: 'Smith',
  set surnameaftermarige (newsurname){
    this.surname = `${newsurname} (${this.surname})`
  }
}
us.surnameaftermarige = 'Green';
console.log(us.surname)


//найти пользователей которые соотсветствуют определенным кретериям
//по стране например
//используем фильтр так как он изменяет количество элементов в массиве
//а потом мэп меняем массив на массив строк создавая новый массив аильтред

const use = [
  { nick: 'Hilton', country: 'USA' },
  { nick: 'Marriott', country: 'France' },
  { nick: 'Sheraton', country: 'UK' },
  { nick: 'Radisson', country: 'Ukraine' },
  { nick: 'InterContinental', country: 'Ukraine' },
]
function letUs (use, country){
  const arrayUs = use.filter(item => item.country === country);
  const filrted = arrayUs.map(item => item.nick);
  return filrted;
}

console.log(letUs(use, 'Ukraine'))


const deepEqual = (obj1, obj2) => {

  if (obj1 instanceof Object && !(obj1 instanceof Array) ||
    obj2 instanceof Object && !(obj2 instanceof Array)){
    return obj1 === obj2;
  }

  const keyObj1 = Object.keys(obj1);
  const keyObj2 = Object.keys(obj2);
  //if (keyObj1.length !== keyObj2.length){
  return false;
};
//return keyObj1.every(key => deepEqual(obj1[key],obj2[key]));
}
console.log(deepEqual(obj1, obj2));

//console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
const sort1 = Object.entries(obj1).sort((a, b) => a[0] - b[0]);
const sort2 = Object.entries(obj2).sort((a, b) => a[0] - b[0]);
return JSON.stringify(sort1) === JSON.stringify(sort2);