const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const imageGallery = document.querySelectorAll('.thumb-bar img')

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imageArray = ['pic1.png','pic2.png','pic3.png','pic4.png','pic5.png'];

const imageText = ['photo1','photo2.','photo3','photo4','photo5'];
const size = imageArray.length;

for(var i=0;i<size;i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imageArray[i]);
    newImage.setAttribute('alt', imageText[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', function(e){
        displayedImage.setAttribute('src', e.target.src);
    })
}
imageGallery.forEach(img => {
    img.addEventListener('click', function(){
        displayedImage.setAttribute('src', img.src);
    })
})

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });