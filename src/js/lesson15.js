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


