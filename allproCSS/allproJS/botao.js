

const blogin =document.querySelector('.Loguin');

const btn =document.querySelector('.btn-login');

const fecha =document.querySelector('.incon-fecha');

btn.addEventListener('click', ()=> {
  blogin.classList.add('active');
});

fecha.addEventListener('click', ()=> {
  blogin.classList.remove('active');
});
