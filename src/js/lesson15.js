const formEl = document.getElementById('form');
const inputFile = document.getElementById('input');
formEl.addEventListener('submit', async (event) => {
  event.preventDefault();

  const url = ' https://if-student-api.onrender.com/api/file';

  const file = event.target[0];

  const fetchOptions = {
    method: 'POST',
    body: new FormData(formEl),

  };
  const resp = await fetch(url, fetchOptions)
    .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => console.log(error.message));

    });

inputFile.addEventListener('change',(event) => {
  const files = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    const  getUrl = event.target.result;
    const imgElement = document.createElement('img');
    imgElement.src = getUrl;
    document.body.appendChild(imgElement);
    console.log(getUrl);
  };
  reader.readAsDataURL(files);

});



