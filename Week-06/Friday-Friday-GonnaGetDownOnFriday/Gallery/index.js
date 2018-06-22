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
let prevTNBox = document.querySelector('.pre');
let hoverText = document.querySelector('.hovertextinsert');

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

rightButton.addEventListener('click', browseRight);
leftButton.addEventListener('click', browseLeft);
hoverText.addEventListener('mouseover', onmouseover);

prevTNBox.addEventListener('click', prevToMain);
nextTNBox.addEventListener('click', prevToMain);

function nextToMain() {
  browseRight();
}

function prevToMain() {
  browseLeft();
}

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 37:
      browseLeft();
      break;
    case 39:
      browseRight();
      break;
  }
};

function onmouseover() {
  hoverText.style.visibility = 'visible';
  hoverText.textContent = imageArray[i].description;
}

function browseRight() {
  if (i === 0) {
    currentImage.style.backgroundImage = `url(${imageArray[i].url})`;
    mainTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
    prevTNBox.style.backgroundImage = `url(${imageArray[imageArray.length - 1].thumbnail})`;
    nextTNBox.style.backgroundImage = `url(${imageArray[i + 1].thumbnail})`;
    i++;
  } else if (i === imageArray.length - 1) {
    currentImage.style.backgroundImage = `url(${imageArray[i].url})`;
    mainTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
    prevTNBox.style.backgroundImage = `url(${imageArray[i - 1].thumbnail})`;
    nextTNBox.style.backgroundImage = `url(${imageArray[0].thumbnail})`;
    i = 0;
  } else {
    currentImage.style.backgroundImage = `url(${imageArray[i].url})`;
    mainTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
    prevTNBox.style.backgroundImage = `url(${imageArray[i - 1].thumbnail})`;
    nextTNBox.style.backgroundImage = `url(${imageArray[i + 1].thumbnail})`;
    i++;
  }
}

function browseLeft() {
  if (i === 0) {
    currentImage.style.backgroundImage = `url(${imageArray[i].url})`;
    mainTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
    prevTNBox.style.backgroundImage = `url(${imageArray[imageArray.length - 1].thumbnail})`;
    nextTNBox.style.backgroundImage = `url(${imageArray[i + 1].thumbnail})`;
    i = imageArray.length - 1;
  } else if (i === imageArray.length - 1) {
    currentImage.style.backgroundImage = `url(${imageArray[i].url})`;
    mainTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
    prevTNBox.style.backgroundImage = `url(${imageArray[i - 1].thumbnail})`;
    nextTNBox.style.backgroundImage = `url(${imageArray[0].thumbnail})`;
    i--;
  } else {
    currentImage.style.backgroundImage = `url(${imageArray[i].url})`;
    mainTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
    prevTNBox.style.backgroundImage = `url(${imageArray[i - 1].thumbnail})`;
    nextTNBox.style.backgroundImage = `url(${imageArray[i + 1].thumbnail})`;
    i--;
  }
}



