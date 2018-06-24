console.log(i);
if (i === 0) {
  console.log(i);
  i++;
  currentImage.style.backgroundImage = `url(${imageArray[i].url})`;
  prevTNBox.style.backgroundImage = `url(${imageArray[i - 1].thumbnail})`;
  mainTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
  nextTNBox.style.backgroundImage = `url(${imageArray[i + 1].thumbnail})`;
} /*else if (i === imageArray.length - 2) {
  console.log(i);
  currentImage.style.backgroundImage = `url(${imageArray[i + 1].url})`;
  prevTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
  mainTNBox.style.backgroundImage = `url(${imageArray[i + 1].thumbnail})`;
  nextTNBox.style.backgroundImage = `url(${imageArray[0].thumbnail})`;
  i++;
}*/
else if (i === imageArray.length - 1) {
  console.log(i);
  currentImage.style.backgroundImage = `url(${imageArray[i].url})`;
  prevTNBox.style.backgroundImage = `url(${imageArray[i - 1].thumbnail})`;
  mainTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
  nextTNBox.style.backgroundImage = `url(${imageArray[0].thumbnail})`;
  i = 0;
} else if (i === 1) {
  console.log(i);
  currentImage.style.backgroundImage = `url(${imageArray[i].url})`;
  prevTNBox.style.backgroundImage = `url(${imageArray[i - 1].thumbnail})`;
  mainTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
  nextTNBox.style.backgroundImage = `url(${imageArray[i + 1].thumbnail})`;
  i++;
}
else {
  //i++;
  /* if (i === imageArray.length - 3) {
     console.log(i);
     currentImage.style.backgroundImage = `url(${imageArray[i].url})`;
     prevTNBox.style.backgroundImage = `url(${imageArray[i - 1].thumbnail})`;
     mainTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
     nextTNBox.style.backgroundImage = `url(${imageArray[i + 1].thumbnail})`;
     i++;
   } else {*/
  console.log(i);
  currentImage.style.backgroundImage = `url(${imageArray[i].url})`;
  prevTNBox.style.backgroundImage = `url(${imageArray[i - 1].thumbnail})`;
  mainTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
  nextTNBox.style.backgroundImage = `url(${imageArray[i + 1].thumbnail})`;
  i++;
}
}


if (i === 0) {
  console.log(i);
  i = imageArray.length - 1;
  currentImage.style.backgroundImage = `url(${imageArray[i].url})`;
  mainTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
  prevTNBox.style.backgroundImage = `url(${imageArray[i - 1].thumbnail})`;
  nextTNBox.style.backgroundImage = `url(${imageArray[0].thumbnail})`;
} else if (i === imageArray.length - 1) {
  console.log(i);
  i--;
  currentImage.style.backgroundImage = `url(${imageArray[i].url})`;
  mainTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
  prevTNBox.style.backgroundImage = `url(${imageArray[i - 1].thumbnail})`;
  nextTNBox.style.backgroundImage = `url(${imageArray[imageArray.length - 1].thumbnail})`;
} else if (i === 1) {
  console.log(i);
  i = 0;
  currentImage.style.backgroundImage = `url(${imageArray[i].url})`;
  mainTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
  prevTNBox.style.backgroundImage = `url(${imageArray[imageArray.length - 1].thumbnail})`;
  nextTNBox.style.backgroundImage = `url(${imageArray[i + 1].thumbnail})`;
} else {
  console.log(i);
  i--;
  currentImage.style.backgroundImage = `url(${imageArray[i].url})`;
  mainTNBox.style.backgroundImage = `url(${imageArray[i].thumbnail})`;
  prevTNBox.style.backgroundImage = `url(${imageArray[i - 1].thumbnail})`;
  nextTNBox.style.backgroundImage = `url(${imageArray[i + 1].thumbnail})`;
}