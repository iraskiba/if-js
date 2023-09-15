//homeWork 13
const hotelsUrlString = 'https://if-student-api.onrender.com/api/hotels';
const populatHotels = 'https://if-student-api.onrender.com/api/hotels/popular';
const buttonSearch = document.getElementById('button-search') ;
const availableSection= document.querySelector('.available-hotels');
const availableHotelItems = document.getElementById('available-hotels_items')

buttonSearch.addEventListener('click', async function (event) {
  event.preventDefault();
  const inputCity = document.getElementById('city').value.toLowerCase();
  let hotelsUrl = new URL(hotelsUrlString);
  param.set('search', inputCity)
  hotelsUrl.search = param.toString();
  fetch(hotelsUrl)
    .then((response) => {
      return response.json();
    })
    .then((data)=>{
        let availableItems = '';
        let index = 0;
        for (let i = index; i < 4 ; i++) {
          const elem = data[i];
          if (elem && elem.imageUrl) {
            availableItems += `<div class="homes-items">
              <img src="${elem.imageUrl}" alt="hotel photo" class="available-hotels__img"/>
              <p class="available-hotels__hotel-name">${elem.name}</p>
              <p class="available-hotels__location ">${elem.city}, ${elem.country}</p>
            </div>`;
          }
        }
        availableHotelItems.innerHTML = availableItems;
        availableSection.style.display = 'block';
    })
    .catch((err) => {
      console.log('Error', err.message)
    });
});
window.addEventListener('click', event =>{
 if (!availableSection.contains(event.target )){
   availableSection.style.display= 'none';
 }
});
//homeWork 12,16
async function getData() {
  const saveData = sessionStorage.getItem('guestsLoves');
  if (saveData) {
    return JSON.parse(saveData);
  } else {
    const response = await fetch(populatHotels)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        sessionStorage.setItem('guestsLoves', JSON.stringify(data));
        return data
      })
      .catch((err) => {
        console.log('Error', err.message)
      });
    return response
  }
}
import {sortData} from './sortFunction.js';

getData().then((data)=>{
  const divGuestsLoves = document.getElementById('guests-loves');
  let homesItems = '';
  let index = 0;
  sortData(data);
  for (let i = index; i < 4 ; i++) {
    const elem = data[i];
    homesItems += `<div class="homes-items">
              <img src="${elem.imageUrl}" alt="hotel photo" class="section-homes__items__img"/>
              <p class="section-homes__hotel-name">${elem.name}</p>
              <p class="section-homes__hotel-location">${elem.city}, ${elem.country}</p>
            </div>`;
  }
  divGuestsLoves.innerHTML = homesItems;
});
  //homeWork - 11
// added appearance + disappearance of the first dropdown list
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
  //added the activity of the buttons +-
 const buttons = document.querySelectorAll('.count-button');

 buttons.forEach((button) => {
   button.addEventListener('click', (event) => {
     button.classList.add('_active');
   });
 });

//added a list with a choice of age of children
const childrenButton = document.querySelector('.child_add');
const dropdownHidden = document.querySelector('.dropdown__children_hidden');
childrenButton.addEventListener('click', (event) => {
    dropdownHidden.style.visibility = 'visible';
    event.stopPropagation();
  });
//quantity limits + switching buttons +-
const url = new URL(hotelsUrlString);
const param = new URLSearchParams(url.search);
const increaseAdultsEl = document.querySelector('.increase-adults');
const decreaseAdultsEl = document.querySelector('.decrease-adults');
const valueAdults = document.querySelector('.value-adults');
const spanAdults = document.getElementById('adult-span');
let value = 0;
function updateAdults(){
  valueAdults.textContent = value;
  spanAdults.textContent = value;
  if (value === 1) {
    decreaseAdultsEl.classList.remove('_active');
  } else {
    increaseAdultsEl.classList.add('_active');
  }
}

increaseAdultsEl.addEventListener('click', function (){
  if(value < 30) {
    value += 1;
    updateAdults();
    param.set('adults', value.toString());
    url.search = param.toString();
  }
});
 decreaseAdultsEl.addEventListener('click', function (){
   if(value > 1) {
     value -= 1;
     updateAdults();
     param.set('adults', value.toString());
     url.search = param.toString();
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
  if (value2 === 0) {
    decreaseChildrenEl.classList.remove('_active');
  } else {
    increaseChildrenEl.classList.add('_active');
  }
}
increaseChildrenEl.addEventListener('click', function (){
  if(value2 < 10) {
    value2 += 1;
    updateChildren();
    param.set('children', value2.toString());
    url.search = param.toString();
  }
});
decreaseChildrenEl.addEventListener('click', function (){
  if(value2 > 0) {
    value2 -= 1;
    updateChildren();
    param.set('children', value2.toString());
    url.search = param.toString();
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
  if (value3 === 1) {
    decreaseRoomsEl.classList.remove('_active');
  } else {
    increaseRoomsEl.classList.add('_active');
  }
}
increaseRoomsEl.addEventListener('click', function (){
  if(value3 < 30) {
    value3 += 1;
    updateRooms();
    param.set('rooms', value3.toString());
    url.search = param.toString();
  }
});
decreaseRoomsEl.addEventListener('click', function (){
  if(value3 > 1) {
    value3 -= 1;
    updateRooms();
    param.set('rooms', value3.toString());
    url.search = param.toString();
  }
});
//selects
const formContainer = document.getElementById('form');
let selectcount = 0;
function addSelect() {
    const selectEl = document.createElement('select');
    for (let i = 0; i <= 17; i++) {
      const optionAge = document.createElement('option');
      optionAge.value = i;
      optionAge.textContent = `${i} years old`;
      selectEl.appendChild(optionAge);
    }
    formContainer.appendChild(selectEl);
  updateValues();
  }

increaseChildrenEl.addEventListener('click', function (){
  if (value < 10){
    value += 1;
      addSelect();
    updateValues();
    }
  });
decreaseChildrenEl.addEventListener('click', function (){
  if (value > 0) {
    value -= 1;
    formContainer.removeChild(formContainer.lastChild);
    if (value === 0 ){
      dropdownHidden.style.visibility= 'hidden';
  }
    updateValues();
}
});
function updateValues() {
  const selectvalue = document.querySelectorAll('select')
  const valueAge = [];
  for (let i = 0; i < selectvalue.length; i++) {
    const selects = selectvalue[i];
    const age = selects.value;
    valueAge.push(age)
  }
  if (valueAge.length > 0) {
    param.set('ages', valueAge.join(' '));
  } else {
    param.delete('ages');
  }
}
buttonSearch.addEventListener('click', function() {
  updateValues()
  url.search = param.toString();
  const fullUrl = getAll();
  console.log(fullUrl);
});
function getAll() {
  url.search = param.toString();
  return url.toString();
}

