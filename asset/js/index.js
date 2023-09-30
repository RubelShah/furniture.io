/************************ country-select-menu*******************************************/
const selectorField =  document.getElementById('selector-field');
const list = document.getElementById('list');
const textArea = document.getElementById('text-area');
const options = document.querySelectorAll('.option');

selectorField.addEventListener('click',function(){
  if(list.classList.contains('hide')){
    list.classList.remove('hide');
  }else{
    list.classList.add('hide');
  }
})

options.forEach(function(item){
  item.addEventListener('click',function(){
    textArea.innerHTML = this.innerHTML;
    list.classList.toggle('hide');
  })
});
/*********************************** offcanvas*****************************************/
const closeBtn = document.getElementById('close-btn');
const offcanvasOpen = document.getElementById('offcanvas-open');
const offcanvas = document.getElementById('offcanvas');
const offcanvasWrapper = document.querySelector('.offcanvas-wrapper')

offcanvasOpen.addEventListener('click',()=>{
  offcanvas.classList.add('show');
  offcanvasWrapper.classList.add('show');
});
closeBtn.addEventListener('click',()=>{
  offcanvas.classList.remove('show');
  offcanvasWrapper.classList.remove('show');
});

window.addEventListener('click', function(e){
  if(e.target === offcanvasWrapper){
    offcanvas.classList.remove('show');
    offcanvasWrapper.classList.remove('show');
  };   
});
/*****************************modal***************************************/
const searchBox = document.getElementById('search-box');
const modalContainer = document.getElementById('modal-container');
const modal = document.getElementById('modal');
const modalcloseBtn = document.getElementById('modalclose-btn');

//evenlistener
searchBox.addEventListener('click', function(){
    modalContainer.classList.add('show');
    modal.classList.add('active');
});
modalcloseBtn.addEventListener('click', function(){
    modalContainer.classList.remove('show');
    modal.classList.remove('active');
    
});

window.addEventListener('click', function(e){
     if(e.target === modalContainer){
        modalContainer.classList.remove('show');
        modal.classList.remove('active');
     };   
});

/**************************search-suggestion*******************************/
const Searchinput = document.querySelector('#search-input'); 
const SearchsuggestionBox = document.querySelector('.search-suggestion'); 
const Searchlist = SearchsuggestionBox.querySelectorAll('li'); 


Searchinput.addEventListener('keyup',()=>{
  SearchsuggestionBox.classList.toggle('active');
});
Searchlist.forEach(function(item){
  item.addEventListener('click',function(){
    Searchinput.value = this.innerText;
    if(SearchsuggestionBox.classList.contains('active')){
      SearchsuggestionBox.classList.remove('active');
    }
    
  });
 
});
/*****************************m-menu-accordian**********************************/
const mlink = document.querySelector('#m-link');
const listli = document.querySelector('#list-li');
const mList = document.querySelector('.m-list');
mlink.addEventListener('click',()=>{
  listli.classList.toggle('active');
  if(listli.classList.contains('active-2')){
    listli.classList.remove('active-2');
  }
 for(element of chMlink){
    if(element.classList.contains('active')){
      element.classList.remove('active');
    }
 }
});

const chMlink = document.querySelectorAll('.ch-m-link');
const chMul = document.querySelector('.ch-m-ul');
chMlink.forEach((item,index)=>{
  item.addEventListener('click',function(){
    for(let i = 0; i < chMlink.length; i++){
      if(chMlink[i] != item){
        chMlink[i].classList.remove('active');
      }
      else{
        this.classList.toggle('active');
      }
    }
    listli.classList.add('active-2');
    // removeActive(index);
  })
})

// function removeActive(index1){
//   chMlink.forEach((item2,index2)=>{
//     if(index1 != index2){
//       item2.classList.remove('active')
//     }
//   })
// }