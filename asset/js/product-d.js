const ShareOp = document.querySelector('.share-i');
const shareOptionbox = document.querySelector('.share-option');
ShareOp.addEventListener('click',function(){
    shareOptionbox.classList.toggle('active');
})
/***********tab-js***************** */
const TabContainer = document.querySelector('#tab-container');
const TabBtns = document.querySelectorAll('.tab-btn');
const TabContents = document.querySelectorAll('.tab-content');

TabContainer.addEventListener('click',function(e){
    const id = e.target.dataset.id;
    if(id){
        TabBtns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        });

        TabContents.forEach(function(item){
            item.classList.remove('active');
        })
        const elementItem = document.getElementById(id);
        elementItem.classList.add('active')
    }
})
/*********************************** offcanvas*****************************************/
const rcloseBtn = document.getElementById('r-close-btn');

const roffcanvasOpen = document.getElementById('r-offcanvas-open');
const offcanvas2 = document.getElementById('offcanvas2');
const offcanvasWrapper2 = document.querySelector('#offcanvas-wrapper2')

roffcanvasOpen.addEventListener('click',()=>{
  offcanvas2.classList.add('show');
  offcanvasWrapper2.classList.add('show');
});
rcloseBtn.addEventListener('click',()=>{
  offcanvas2.classList.remove('show');
  offcanvasWrapper2.classList.remove('show');
});

window.addEventListener('click', function(e){
  if(e.target === offcanvasWrapper2){
    offcanvas2.classList.remove('show');
    offcanvasWrapper2.classList.remove('show');
  };   
});
/***************************************************************/
const CartcloseBtn = document.getElementById('cart-close-btn');

const cartcanvasOpen = document.getElementById('cartcanvas-open');
const cartcanvas2 = document.getElementById('cartcanvas2');
const cartcanvasWrapper2 = document.querySelector('#cartcanvas-wrapper2')

cartcanvasOpen.addEventListener('click',()=>{
  cartcanvas2.classList.add('show');
  cartcanvasWrapper2.classList.add('show');
});
CartcloseBtn.addEventListener('click',()=>{
  cartcanvas2.classList.remove('show');
  cartcanvasWrapper2.classList.remove('show');
});

window.addEventListener('click', function(e){
  if(e.target === cartcanvasWrapper2){
    cartcanvas2.classList.remove('show');
    cartcanvasWrapper2.classList.remove('show');
  };   
});