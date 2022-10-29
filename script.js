const container = document.getElementById("container");

let mouseEnter = false;
document.body.onmouseenter = function() {
  mouseEnter = true;
};

function makeRows(rows, cols) {

  container.querySelectorAll('*').forEach(n => n.remove());
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  
  for (let c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);

    //change background color if event is triggered
    cell.addEventListener("mouseenter", changeColor);
    //add class to div and append as a child
    container.appendChild(cell).className = "grid-item";
    
  };
};

//return node list of button elements
const button = document.querySelectorAll('button');

let btn = '';

button[0].addEventListener('click', () => {
  btn = 'black';
});

button[1].addEventListener('click', () => {
  btn =  'rainbow';
});

//return input element to choose color
const input = document.querySelector("#input-color");
 
input.addEventListener('input', () => {
  btn = 'choose';
});

//eraser
button[3].addEventListener('click', () => {
  btn = 'transparent';
});

function changeColor(e) {

  if (mouseEnter && btn === 'rainbow') {

    let color1 = Math.floor(Math.random() * 256);
    let color2 = Math.floor(Math.random() * 256);
    let color3 = Math.floor(Math.random() * 256);

    e.target.style.backgroundColor = `rgb(${color1},${color2},${color3})`;

  } else if (mouseEnter && btn === 'black') {

    e.target.style.backgroundColor = btn;

  } else if (mouseEnter && btn === 'transparent') {

    e.target.style.backgroundColor = btn;

  } else if (mouseEnter && btn === 'choose') {

    e.target.style.backgroundColor = input.value;
  } 
}


const slider = document.querySelector('#sizeRange');
//default # of pixels
let pixels = 16;

//store # of rows & columns from slider into pixels
slider.addEventListener("change", function () {
  pixels = document.getElementById("sizeRange").textContent = slider.value;
  return makeRows(pixels, pixels)
});

const clearBtn = document.querySelector('button.clear');

//clear background after button is clicked
clearBtn.addEventListener('click', () => {
  
    let divs = document.getElementsByClassName('grid-item');
    let color = 'transparent';

    for(i = 0; i < divs.length; i++) {
      divs[i].style.backgroundColor = `${color}`;
    
  }
})

//default pixel size
makeRows(16, 16);
console.log(container.querySelectorAll('*').length);





