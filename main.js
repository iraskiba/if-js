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