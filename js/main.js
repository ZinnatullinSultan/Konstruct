
document.addEventListener('DOMContentLoaded', function () {
  let burger = document.querySelector('.mobile-menu');
  let menu = document.querySelector('.menu__list');
  let overlay = document.querySelector('.overlay');

  document.addEventListener('click', (e)=>{
    let target = e.target;
    if(!(target.className =='menu__list open') && !(target.className =='mobile-menu') && !(target.tagName =='SPAN')){
      menu.classList.remove('open');
      overlay.classList.remove('overlay--open');
    }
  })

  burger.addEventListener('click', () => {
    menu.classList.toggle('open');
    overlay.classList.toggle('overlay--open');
  });
});
