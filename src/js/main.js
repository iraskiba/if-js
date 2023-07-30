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
  //добавила появление + исчезновение первого выпадающего списка

const inputsEl= document.getElementById('counter-block');
const dropdown = document.getElementById('dropdown')
inputsEl.addEventListener('click', ( event) =>{
  dropdown.style.visibility = 'visible';
event.stopPropagation()
});

window.addEventListener('click', event =>{
  (!dropdown.contains(event.target) ||!dropdownHidden.contains(event.target) )
  {
    dropdownHidden.style.visibility = 'hidden'
    dropdown.style.visibility= 'hidden';

  }
})

  //добавила активность кнопок +- при нажатии на них

 const buttons = document.querySelectorAll('.count-button');
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

const increaseAdultsEl = document.querySelector('.increase-adults');
const decreaseAdultsEl = document.querySelector('.decrease-adults');
const valueAdults = document.querySelector('.value-adults');
const spanAdults = document.getElementById('adult-span');

let value = 0;
function updateAdults(){
  valueAdults.textContent = value;
  spanAdults.textContent = value;
}
increaseAdultsEl.addEventListener('click', function (){
  if(value < 30) {
    value += 1;
    updateAdults();
  }
});
 decreaseAdultsEl.addEventListener('click', function (){
   if(value > 1) {
     value -= 1;
     updateAdults();
   }
 });


const increaseChildrenEl = document.querySelector('.increase-children');
const decreaseChildrenEl = document.querySelector('.decrease-children');
const valueChildren = document.querySelector('.value-children');
const spanChildren = document.getElementById('children-span');

let value2 = 0;
function updateChildren(){
  valueChildren.textContent = value2;
  spanChildren.textContent = value2;
}
increaseChildrenEl.addEventListener('click', function (){
  if(value2 < 10) {
    value2 += 1;
    updateChildren();
  }
});
decreaseChildrenEl.addEventListener('click', function (){
  if(value2 > 0) {
    value2 -= 1;
    updateChildren();
  }
});


const increaseRoomsEl = document.querySelector('.increase-rooms');
const decreaseRoomsEl = document.querySelector('.decrease-rooms');
const valueRooms = document.querySelector('.value-rooms');
const spanRooms = document.getElementById('rooms-span');

let value3 = 0;
function updateRooms(){
  valueRooms.textContent = value3;
  spanRooms.textContent = value3;
}
increaseRoomsEl.addEventListener('click', function (){
  if(value3 < 30) {
    value3 += 1;
    updateRooms();
  }
});
decreaseRoomsEl.addEventListener('click', function (){
  if(value3 > 1) {
    value3 -= 1;
    updateRooms();
  }
});


//селекты

const formContainer = document.getElementById('form');
let selectCount = 0;
function addSelect() {
    const selectEl = document.createElement('select');
    for (let i = 0; i <= 17; i++) {

      const optionAge = document.createElement('option');
      optionAge.value = i;
      optionAge.textContent = `${i} years old`;
      selectEl.appendChild(optionAge);
    }
    formContainer.appendChild(selectEl);
  }


increaseChildrenEl.addEventListener('click', function (){
  if (value < 10){
    value += 1;
      addSelect();
    }
  });

decreaseChildrenEl.addEventListener('click', function (){
  if (value > 0) {
    value -= 1;
    formContainer.removeChild(formContainer.lastChild);
    if (value === 0 ){
      dropdownHidden.style.visibility= 'hidden';
  }
}
});




