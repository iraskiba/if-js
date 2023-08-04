//домашка 12
function getData() {
  return fetch('https://if-student-api.onrender.com/api/hotels/popular')
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log('Error', err.message)
    });
}
getData().then((data)=>{
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
});


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




