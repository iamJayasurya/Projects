const images = [
    'CoolPic1.jpg',
    'CoolPic2.jpg',
    'CoolPic3.jpg',
  ];

  let currentIndex = 0;
 let body=document.getElementById('body')
  function changeBackgroundImage() {
    body.style.backgroundImage = `url(./images/${images[currentIndex]})`;
    body.style.backgroundsize=`cover`
    currentIndex = (currentIndex + 1) % images.length;
  }
  setInterval(changeBackgroundImage, 5000);





        
