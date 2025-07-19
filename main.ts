// Restaurant website entry point
import './style.css'

// Import the existing script functionality
const nextButton = document.getElementById('next') as HTMLButtonElement;
const prevButton = document.getElementById('prev') as HTMLButtonElement;
const carousel = document.querySelector('.carousel') as HTMLElement;
const listHTML = document.querySelector('.carousel .list') as HTMLElement;
const seeMoreButtons = document.querySelectorAll('.seeMore') as NodeListOf<HTMLButtonElement>;
const backButton = document.getElementById('back') as HTMLButtonElement;

if (nextButton && prevButton && carousel && listHTML && backButton) {
  nextButton.onclick = function(){
      showSlider('next');
  }
  
  prevButton.onclick = function(){
      showSlider('prev');
  }
  
  let unAcceptClick: NodeJS.Timeout;
  const showSlider = (type: 'next' | 'prev') => {
      nextButton.style.pointerEvents = 'none';
      prevButton.style.pointerEvents = 'none';

      carousel.classList.remove('next', 'prev');
      let items = document.querySelectorAll('.carousel .list .item');
      if(type === 'next'){
          listHTML.appendChild(items[0]);
          carousel.classList.add('next');
      }else{
          listHTML.prepend(items[items.length - 1]);
          carousel.classList.add('prev');
      }
      clearTimeout(unAcceptClick);
      unAcceptClick = setTimeout(()=>{
          nextButton.style.pointerEvents = 'auto';
          prevButton.style.pointerEvents = 'auto';
      }, 2000)
  }
  
  seeMoreButtons.forEach((button) => {
      button.onclick = function(){
          carousel.classList.remove('next', 'prev');
          carousel.classList.add('showDetail');
      }
  });
  
  backButton.onclick = function(){
      carousel.classList.remove('showDetail');
  }

  // Auto-play functionality (optional)
  let autoPlayInterval: NodeJS.Timeout;
  const startAutoPlay = () => {
      autoPlayInterval = setInterval(() => {
          if (!carousel.classList.contains('showDetail')) {
              showSlider('next');
          }
      }, 5000);
  }

  const stopAutoPlay = () => {
      clearInterval(autoPlayInterval);
  }

  // Stop auto-play when user interacts
  carousel.addEventListener('mouseenter', stopAutoPlay);
  carousel.addEventListener('mouseleave', startAutoPlay);
}