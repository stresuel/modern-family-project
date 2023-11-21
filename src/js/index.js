const carouselButtons = document.querySelectorAll('.button');
const img = document.querySelectorAll('img');

carouselButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        deactivateSelectedButton();

        selectCarouselButton(button);

        hideActiveImg();

        showBackgroundImg(index);
    })
});

function showBackgroundImg(index) {
    img[index].classList.add('active');
}

function selectCarouselButton(button) {
    button.classList.add('selected');
}

function hideActiveImg() {
    const activeImage = document.querySelector('.active');
    activeImage.classList.remove('active');
}

function deactivateSelectedButton() {
    const selectedButton = document.querySelector('.selected');
    selectedButton.classList.remove('selected');
}

document.onmousedown=disableclick;
function disableclick(event)
{
  if(event.button==2)
   {
     return false;    
   }
}