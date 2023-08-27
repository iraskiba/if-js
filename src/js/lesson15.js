const inputFile = document.getElementById('input');
const container = document.querySelector('.container');
const addPfoto = document.getElementById('add');

container.addEventListener('click', (event) => {
  inputFile.click();
});
inputFile.addEventListener('change', (event) =>{
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    const  imgUrl = event.target.result;
    const imgElement = document.createElement('img');
    imgElement.src = imgUrl;
    imgElement.classList.add('img');
    container.innerHTML = '';
    container.appendChild(imgElement);

    console.log(imgUrl);
};
reader.readAsDataURL(file);
});


// 15 урок первая часть

const formEl = document.getElementById('form');
const lesson15 = document.getElementById('input');
formEl.addEventListener('submit', async (event) => {
  event.preventDefault();

  const url = ' https://if-student-api.onrender.com/api/file';

  const file = event.target[0];

  const fetchOptions = {
    method: 'POST',
    body: new FormData(formEl),
    mode: 'no-cors',

  };
  const resp = await fetch(url, fetchOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.log(error.message));

});