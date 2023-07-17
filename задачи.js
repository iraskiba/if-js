
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

const myPet = {
  pet:'cat',
  name:'Star',
  owner:'Jone Doe'
}
//------функция конструктор
//function Pet(pet, name, owner){
//this.pet = pet;
//this.name = name;
//this.owner = owner;
//}
// создать метод который будет выводить имя животного
//Pet.prototype.schowName = function (){
//return 'Pet\'s name is ' + this.name;
//}
//const pet1 = new Pet('dog', 'Murka', 'Ira');
//console.log(pet1)
//console.log(pet1.schowName());


//-------создание через ключевое слово класс
class Pet{
  constructor(pet,name,owner) {
    this.pet = pet;
    this.name = name;
    this.owner = owner;
  }

//const pet1 = new Pet('dog', 'Murka', 'Ira');
//console.log(pet1)
  showName(){
    return 'Pet\'s name is ' + this.name;
  }
  static showInfo = function (){
    return 'This class has 3 values';
  }
}
///определить является обьект экземпляром класса
//console.log(pet1 instanceof Object);

//---наследование
class myO {
  constructor (name,country,age)
  {
    this.name = name;
    this.country = country;
    this.age = age;
  }
};
class PremimmyO extends myO{
  constructor(name,country,age,owner,color) {
    super(name,country,age);
    this.owner = owner;
    this.color = color;
  }
};
const premim = new PremimmyO('Ira','Poland','29','d', 'black')
console.log(premim);

console.log('lesson-5')
function changeDate(String) {
  let elem = String.split('-');
  return `${elem[2]}.${elem[1]}.${elem[0]}`
}
console.log(changeDate('2020-11-26'));


function find (str,data) {
  const arrayResult = [];
  for (let i = 0; i < data.length; i++) {
    const el = data[i];
    const regex = RegExp(str,'i');
    if (el.country.match(regex) || el.city.match(regex) || el.hotel.match(regex)) {
      arrayResult[arrayResult.length] = `${el.country}, ${el.city}, ${el.hotel}`;
    }
  }
  return arrayResult;
}

let data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];
let str = 'berlin';
console.log(find(str,data));

console.log('lesson-6')

const polindrom = str => str === str.split('').reverse().join('');
console.log(polindrom('vfvb'))

const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];
function findElement (str) {
  const arr = hotels.filter((item) => {
    return item.name.toLowerCase() === str.toLowerCase() || item.city.toLowerCase() === str.toLowerCase()||
      item.country.toLowerCase() === str.toLowerCase();
  }).map((item) => {
    return  `${item.country}, ${item.city}, ${item.name}`;
  });
  return arr;
}
console.log(findElement('spain'));


function countryName (){
  const getObj = {};
  hotels.forEach((el) => {
    getObj[el.country] = getObj[el.country] || [];
    getObj[el.country].push(el.city);
  });
  return getObj
}

console.log(countryName());

console.log('lesson-7')


const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};
const deepEqual = (objEqual1, objEqual2) => {
  const keyObj1 = Object.keys(objEqual1);
  const keyObj2 = Object.keys(objEqual2);
  if (keyObj1.length !== keyObj2.length){
    return false;
  }
  return keyObj1.every(key => {
    const value1 = objEqual1[key];
    const value2 = objEqual2[key];
    if(typeof value1 === 'object' && typeof  value2 === 'object') {
      return deepEqual(value1,value2);
    }
    return value1 === value2;
  });
};

console.log(deepEqual(obj1, obj2));

console.log(deepEqual(obj1, obj3));

console.log('lesson-8')

const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  }
];
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
class Student extends User{
  constructor(firstName, lastName, admissionYear, courseName ) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName  = courseName ;
  }
  get course (){
    const currentYear = new Date().getFullYear();
    return currentYear - this.admissionYear;
  }
};

function Students (students){
  this.students = students;
}
Students.prototype.getNewClass = function (){
  return this.students.map(({firstName, lastName, admissionYear, courseName}) => new Student(firstName, lastName,admissionYear, courseName));
};
Students.prototype.getInfo = function (){
  return this.getNewClass().sort((a,b) => a.course - b.course)
    .map(student => `${student.fullName} -  ${student.courseName} , ${student.course} курс`);
};
const students = new Students(studentsData);
console.log(students.getInfo());


function urlGenerate (domain){
  return function (url){
    return `https://${url}.${domain}`
  }
}
const comUrl = urlGenerate('com')
const ruUrl = urlGenerate('ru')
console.log(comUrl('google'))
console.log(ruUrl('yandex'))

function added (num){
  return function (n) {
    return n+num;
  }
}
const num1 = added(11)
console.log(num1(70))


function hello (){
  console.log('Hello', this)
}
const person = {
  name: 'Ira',
  age: 25,
  sayHello: hello,
  sayHelloWindow:hello.bind(document),
  logInfo:function (job,phone){
    console.group(`${this.name} info:`)
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd()
  }
};
person.logInfo();
const lena = {
  name: 'Elena',
  age: 23
}
//const fnlena = person.logInfo.bind(lena,'frontend','8033655')
//fnlena()
//console.log(fnlena)
//person.logInfo.call(lena,'frontend','8033655')
person.logInfo.apply(lena,['frontend','8033655'])
console.log(fnlena)


function toIt (obj) {
  return {
    ...obj, [Symbol.iterator]() {
      const keys = Object.keys(this)
      const limit = keys.length
      const $this = this

      let counter = 0
      return {
        next() {
          if (counter < limit) {
            return {
              done: false,
              value: $this[keys[counter++]]
            }
          }
          return {
            done: true
          }
        }
      }
    }
  }
}
const person = {
  name: 'Ira',
  age: 25,
  city: 'Grodno',
}
const  car = {
  model: 'mercedess',
  getModel: function (){
    return this.model;
  }
}

for(let value of toIt(person)){
  console.log(value)
}

for(let value of toIt(car)){
  if (typeof value !== 'function')
    console.log(value)
}
console.log('lesson-9')
const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    return this;
  },
  next() {
    if (this.current === undefined) {
      this.current = 0;
    }
    if (this.current < this.data.length) {
      const value = this.data[this.current];
      this.current++;
      return {
        done: false,
        value: value,
      };
    }
    if (this.current === this.data.length) {
      this.current = 0;
      return {
        done: false,
        value: this.data[this.current]
      };
    };
  }
}
const changeStyle = (id) => (event) => {
  event.target.style.color = colors.next().value;
};
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

text1.addEventListener('click', changeStyle('text1'));
text2.addEventListener('click', changeStyle('text2'));
text3.addEventListener('click', changeStyle('text3'));

u

const Myarr = [1, 2, 4, 7, 6, 3];
function sumArr(arr) {
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  return sum;
}

console.log(sumArr(Myarr));


arr.forEach(key => {
  const elem = sliceData[key];

  const divElement = document.createElement('div');
  const imagesEl = document.createElement('img');
  imagesEl.src = elem.imageUrl;
  divElement.appendChild(imagesEl);

  const descr = document.createElement('p');
  descr.innerHTML = `<p class="section-homes__hotel-name">${elem.name}</p> <p class="section-homes__hotel-location">${elem.city}, ${elem.country}</p>`;
  divElement.appendChild(descr);
  divGuestsLoves.appendChild(divElement);
});


arr.forEach(key => {
  const elem = sliceData[key];
  const guestsItem = document.createElement('div');
  const imagesEl = document.createElement('img');
  guestsItem.appendChild(imagesEl);

  guestsItem.innerHTML += `<img src="${elem.imageUrl}" alt = "hotel photo" class="section-homes__items__img"/>
          <p class="section-homes__hotel-name">${elem.name} </p>
          <p class="section-homes__hotel-location">${elem.city}, ${elem.country}</p>`;
  divGuestsLoves.appendChild(guestsItem);
});



