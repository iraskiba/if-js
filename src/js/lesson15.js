const formEl = document.getElementById('form');
const lesson15 = document.getElementById('input');
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