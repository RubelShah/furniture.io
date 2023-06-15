evenlistener
signinmodal.addEventListener('click', function(){
  modalContainer2.classList.add('show');
    modal2.classList.add('active');
});
modalcloseBtn2.addEventListener('click', function(){
    modalContainer2.classList.remove('show');
    modal.classList2.remove('active');
    
});

window.addEventListener('click', function(e){
     if(e.target === modalContainer2){
        modalContainer2.classList.remove('show');
        modal2.classList.remove('active');
     };   
});