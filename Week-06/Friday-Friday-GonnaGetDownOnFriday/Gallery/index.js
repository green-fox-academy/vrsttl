'use strict';

const imageArray = [{ name: 'pic1', url: './assets/images/1.jpg', thumbnail: './assets/thumbnails/1_tn.jpg', description: 'This is image number 1' },
{ name: 'pic2', url: './assets/images/2.jpg', thumbnail: './assets/thumbnails/2_tn.jpg', description: 'This is image number 2' },
{ name: 'pic3', url: './assets/images/3.jpg', thumbnail: './assets/thumbnails/3_tn.jpg', description: 'This is image number 3' },
{ name: 'pic4', url: './assets/images/4.jpg', thumbnail: './assets/thumbnails/4_tn.jpg', description: 'This is image number 4' },
{ name: 'pic5', url: './assets/images/5.jpg', thumbnail: './assets/thumbnails/5_tn.jpg', description: 'This is image number 5' },
{ name: 'pic6', url: './assets/images/6.jpg', thumbnail: './assets/thumbnails/6_tn.jpg', description: 'This is image number 6' },
{ name: 'pic7', url: './assets/images/7.jpg', thumbnail: './assets/thumbnails/7_tn.jpg', description: 'This is image number 7' },
{ name: 'pic8', url: './assets/images/8.jpg', thumbnail: './assets/thumbnails/8_tn.jpg', description: 'This is image number 8' },
{ name: 'pic9', url: './assets/images/9.jpg', thumbnail: './assets/thumbnails/9_tn.jpg', description: 'This is image number 9' }];

let i = 0;
let currentImage = document.querySelector('.image');
currentImage.style.backgroundImage = `url(${imageArray[i].url})`;
let leftButton = document.querySelector('.left');
let rightButton = document.querySelector('.right');
let mainTNBox = document.querySelector('.mainbox');
mainTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;


/*
let lastTNBox = document.querySelector('.last');
*/
let hoverText = document.querySelector('.hovertextinsert');

let prevTNBox = document.querySelector('.pre');
if (i !== 0) {
  prevTNBox.style.backgroundImage = `url(${imageArray[i - 1].thumbnail})`;
} else {
  prevTNBox.style.backgroundImage = `url(${imageArray[imageArray.length - 1].thumbnail})`;
};

let nextTNBox = document.querySelector('.next');
if (i !== imageArray.length - 1) {
  nextTNBox.style.backgroundImage = `url(${imageArray[i + 1].thumbnail})`;
} else {
  nextTNBox.style.backgroundImage = `url(${imageArray[0].thumbnail})`;
};
/*
let firstTNBox = document.querySelector('.firstbox');

if (i == 0) {
  firstTNBox.style.backgroundImage = `url(${imageArray[i - 2].thumbnail})`;
} else if (i == 1) {
  firstTNBox.style.backgroundImage = `url(${imageArray[i - 1].thumbnail})`;
} else {
  firstTNBox.style.backgroundImage = `url(${imageArray[imageArray.length - 2].thumbnail})`;
};
*/
rightButton.addEventListener('click', browseRight);
leftButton.addEventListener('click', browseLeft);
hoverText.addEventListener('mouseover', onmouseover);
/*
firstTNBox.addEventListener('click', firstToMain);
lastTNBox.addEventListener('click', lastToMain);
*/
prevTNBox.addEventListener('click', browseLeft);
nextTNBox.addEventListener('click', browseRight);
/*
function firstToMain() {
  if (i === 0) {
    currentImage.style.backgroundImage = `url(${imageArray[imageArray.length - 1].url})`;
    mainTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
    prevTNBox.style.backgroundImage = `url(${imageArray[imageArray.length - 1].thumbnail})`;
    nextTNBox.style.backgroundImage = `url(${imageArray[i + 1].thumbnail})`;
    i++;
  }
}
*/


function onmouseover() {
  hoverText.style.visibility = 'visible';
  hoverText.textContent = imageArray[i].description;
}

function browseRight() {
  if (i === 0) {
    i++;
    currentImage.style.backgroundImage = `url(${imageArray[i].url})`;
    mainTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
    prevTNBox.style.backgroundImage = `url(${imageArray[i - 1].thumbnail})`;
    nextTNBox.style.backgroundImage = `url(${imageArray[i + 1].thumbnail})`;
    console.log(i);
  } else if (i === imageArray.length - 2) {
    currentImage.style.backgroundImage = `url(${imageArray[i + 1].url})`;
    mainTNBox.style.backgroundImage = `url(${imageArray[i + 1].thumbnail})`;
    prevTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
    nextTNBox.style.backgroundImage = `url(${imageArray[0].thumbnail})`;
    i++;
    console.log(i);
  }
  else if (i === imageArray.length - 1) {
    currentImage.style.backgroundImage = `url(${imageArray[0].url})`;
    mainTNBox.style.backgroundImage = `url(${imageArray[0].thumbnail})`;
    prevTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
    nextTNBox.style.backgroundImage = `url(${imageArray[1].thumbnail})`;
    i = 0;
    console.log(i);
  } else {
    i++;
    currentImage.style.backgroundImage = `url(${imageArray[i].url})`;
    mainTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
    prevTNBox.style.backgroundImage = `url(${imageArray[i - 1].thumbnail})`;
    nextTNBox.style.backgroundImage = `url(${imageArray[i + 1].thumbnail})`;
    console.log(i);
  }
}

function browseLeft() {
  if (i === 0) {
    i = imageArray.length - 1;
    currentImage.style.backgroundImage = `url(${imageArray[i].url})`;
    mainTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
    prevTNBox.style.backgroundImage = `url(${imageArray[i - 1].thumbnail})`;
    nextTNBox.style.backgroundImage = `url(${imageArray[0].thumbnail})`;
    console.log(i);
  } else if (i === imageArray.length - 1) {
    i--;
    currentImage.style.backgroundImage = `url(${imageArray[i].url})`;
    mainTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
    prevTNBox.style.backgroundImage = `url(${imageArray[i - 1].thumbnail})`;
    nextTNBox.style.backgroundImage = `url(${imageArray[imageArray.length - 1].thumbnail})`;
    console.log(i);
  } else if (i === 1) {
    i = 0;
    currentImage.style.backgroundImage = `url(${imageArray[i].url})`;
    mainTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
    prevTNBox.style.backgroundImage = `url(${imageArray[imageArray.length - 1].thumbnail})`;
    nextTNBox.style.backgroundImage = `url(${imageArray[i + 1].thumbnail})`;
    console.log(i);
    } else {
    i--;
    currentImage.style.backgroundImage = `url(${imageArray[i].url})`;
    mainTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
    prevTNBox.style.backgroundImage = `url(${imageArray[i - 1].thumbnail})`;
    nextTNBox.style.backgroundImage = `url(${imageArray[i + 1].thumbnail})`;
    console.log(i);
  }
}

document.onkeydown = function (e) {
  switch (event.key) {
    case "ArrowLeft":
      browseLeft();
      break;
    case "ArrowRight":
      browseRight();
      break;
  }
};


