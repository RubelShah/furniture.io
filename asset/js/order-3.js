const OcloseBtn = document.getElementById('o-close-btn');

const OoffcanvasOpen = document.getElementById('o-offcanvas-open');
const offcanvas3 = document.getElementById('offcanvas3');
const offcanvasWrapper3 = document.querySelector('#offcanvas-wrapper3')

OoffcanvasOpen.addEventListener('click',()=>{
  offcanvas3.classList.add('show');
  offcanvasWrapper3.classList.add('show');
});
OcloseBtn.addEventListener('click',()=>{
  offcanvas3.classList.remove('show');
  offcanvasWrapper3.classList.remove('show');
});

window.addEventListener('click', function(e){
  if(e.target === offcanvasWrapper3){
    offcanvas3.classList.remove('show');
    offcanvasWrapper3.classList.remove('show');
  };   
});