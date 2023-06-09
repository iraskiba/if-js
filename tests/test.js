test('sum', () => {
  const result = 5 + 2;
  expect(result).toBe(7);
});

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
function changeColor() {
  let i = 0;
  return function (event) {
    const currentColor = event.target;
    const nextColor = colors[i++];
    if(i <= colors.length){
      i = 0;
    }
    currentColor.style.color = nextColor;
  };
}

const changeColor1 = changeColor();
const changeColor2 = changeColor();
const changeColor3 = changeColor();

if (text1 && text2 && text3) {
  text1.addEventListener('click', changeColor1);
  text2.addEventListener('click', changeColor2);
  text3.addEventListener('click', changeColor3);
} else {
  console.log('One or more elements is null');
}
test('get color', function () {
  const text1 = document.createElement('p');
  text1.style.color = 'magenta';
  expect(text1.style.color).toBe('magenta');
  changeColor1({ target: text1 });
  expect(text1.style.color).toBe('magenta');
  changeColor1({ target: text1 });
  expect(text1.style.color).toBe('cyan');
});
