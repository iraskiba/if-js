const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  index :0,
  [Symbol.iterator]() {
    return this;
  },
  next(){
    if (this.index >= this.data.length) {
    this.index = 0;
  }
    if (this.index === this.data.length) {
      return {
        done: true
      };
    }
    const value = this.data[this.index];
    this.index++;
    return {
      done: false,
      value: value,
  };
},
};
  const changeStyle = (id) => (event) => {
    event.target.style.color = colors.next().value;
  };
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const text3 = document.getElementById('text3');

  text1.addEventListener('click', changeStyle('text1'));
  text2.addEventListener('click', changeStyle('text2'));
  text3.addEventListener('click', changeStyle('text3'));
