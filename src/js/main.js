const data = [
  {
    id: '71ce9eac-e9b9-44f0-a342-9ff0b565f3b7',
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    id: 'aa560608-a879-48a7-80b6-deff2806b250',
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    id: '1d88fefe-edf1-4cda-844a-babbf29bb2b3',
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    id: 'a2bf824d-edd8-41f0-8b70-244334086ab4',
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    id: '4024535d-a498-4274-b7cb-f01ada962971',
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    id: 'e51e71f6-6baf-4493-b3ae-25dc27cdc238',
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    id: '87d2b966-2431-43f3-8c0d-2c8723474dfc',
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    id: '190221c6-b18f-4dba-97de-e35f0e14c023',
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];

const divGuestsLoves = document.getElementById('guests-loves');
let homesItems = '';
let index = 0;
  homesItems = '';
  for (let i = index; i < 4 ; i++) {
     const elem = data[i];
  homesItems += `<div class="homes-items">
              <img src="${elem.imageUrl}" alt="hotel photo" class="section-homes__items__img"/>
              <p class="section-homes__hotel-name">${elem.name}</p>
              <p class="section-homes__hotel-location">${elem.city}, ${elem.country}</p>
            </div>`;
}
divGuestsLoves.innerHTML = homesItems;






  //домашка - 11
  //добавила появление первого выпадающего списка

const inputsEl= document.getElementById('input-block');
const dropdown = document.getElementById('dropdown')

inputsEl.addEventListener('click', ( event) =>{
  dropdown.style.visibility = 'visible';
event.stopPropagation()
});


  //добавила активность кнопок +- при нажатии на них

 const buttons = document.querySelectorAll('.count');
 buttons.forEach((button) =>{
   button.addEventListener('click', (event) =>{
     button.classList.toggle('_active');

   });
 });

 //появление дополнительного списочка с селектом "возраст детей"

const childrenButton = document.querySelector('.child_add');
const dropdownHidden = document.querySelector('.dropdown__children_hidden');
childrenButton.addEventListener('click', (event) => {
    dropdownHidden.style.visibility = 'visible';
    event.stopPropagation();
  });


//ограничения по количеству + переключение кнопок +-

const numbers = {
  adults: { count: 0 },
  rooms: { count: 0 },
  children: { count: 0 },
};

const elements = {
  adults: { identifier: 'adults', label: 'Adults', value: 0, count: 0, values: { min: 1, max: 30 } },
  rooms: { identifier: 'rooms', label: 'Rooms', value: 0, count: 0, values: { min: 1, max: 30 } },
  children: { identifier: 'children', label: 'Children', value: 0, count: 0, values: { min: 0, max: 10 } },
};
const btnDecrease = document.querySelectorAll('.decrease');
const numEl = document.querySelectorAll('.num');
const btnIncrease = document.querySelectorAll('.increase');

btnDecrease.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const element = elements[Object.keys(elements)[index]];
    if (element.value > element.values.min) {
      element.value--;
      numEl[index].textContent = element.value;
    }
  });
});

btnIncrease.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const element = elements[Object.keys(elements)[index]];
    if (element.value < element.values.max) {
      element.value++;
      numEl[index].textContent = element.value;
    }
  });
});


//добавила выбор возраста

const selectEl = document.querySelector('.years-old');
  for (let i = 0; i < 18; i++) {
    let option = document.createElement('option');
  option.textContent = option.value = i;
  if(i <= 1) {
    option.innerText = `${i} year old`;
    }else{
    option.innerText = `${i} years old`;
  }

    selectEl.append(option);

  };





