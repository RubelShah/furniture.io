const Clist = document.querySelectorAll('[data-list]');

Clist.forEach(function(item){
    item.addEventListener('click',function(){
        this.classList.toggle('active');
    })
})