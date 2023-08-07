const Clist = document.querySelectorAll('[data-list]');
const cartlistcontainer = document.querySelector('.cart_l_list');
const sideTabContents = document.querySelectorAll('.side-tab-content');

cartlistcontainer.addEventListener('click',function(e){
    const list = e.target.dataset.list;
    if(list){
        Clist.forEach(function(item){
            item.classList.remove('active');
            e.target.classList.add('active');
        });
        sideTabContents.forEach(function(item){
            item.classList.remove('active');
        });
        const elementItem = document.getElementById(list);
        elementItem.classList.add('active');
    }
})

/*allow-btn*/
const allowSelect = document.querySelector(".allow-select");
allowSelect.addEventListener('click',()=>{
    allowSelect.classList.toggle('active');
});
const allowSelect2 = document.getElementById('allow-select2');
allowSelect2.addEventListener('click',()=>{
    allowSelect2.classList.toggle('active');
});
const allowSelect3 = document.getElementById('allow-select3');
allowSelect3.addEventListener('click',()=>{
    allowSelect3.classList.toggle('active');
});
const allowSelect4 = document.getElementById('allow-select4');
allowSelect4.addEventListener('click',()=>{
    allowSelect4.classList.toggle('active');
});
const allowSelect5 = document.getElementById('allow-select5');
allowSelect5.addEventListener('click',()=>{
    allowSelect5.classList.toggle('active');
});
const allowSelect6 = document.getElementById('allow-select6');
allowSelect6.addEventListener('click',()=>{
    allowSelect6.classList.toggle('active');
});
const allowSelect7 = document.getElementById('allow-select7');
allowSelect7.addEventListener('click',()=>{
    allowSelect7.classList.toggle('active');
});
/********************************************copy-btns************************************************/
const inputarea = document.getElementById('input-li');
const input1 = document.getElementById('input-1');
const CopyBtn1 = document.getElementById('copybtn-1');

CopyBtn1.addEventListener('click',function(){
    navigator.clipboard.writeText(input1.value);
    toaster("coppied");
})

function toaster(message){
    div = document.createElement('div');
    div.innerText = message;
    div.className = 'toaster';
    inputarea.appendChild(div);
    div.addEventListener('animationend',function(){
        div.remove();
    })
}
const inputarea2 = document.getElementById('input-li2');
const input2 = document.getElementById('input-2');
const CopyBtn2 = document.getElementById('copybtn-2');

CopyBtn2.addEventListener('click',function(){
    navigator.clipboard.writeText(input2.value);
    toaster2("coppied");
})
function toaster2(message){
    div = document.createElement('div');
    div.innerText = message;
    div.className = 'toaster toaster2';
    inputarea2.appendChild(div);
    div.addEventListener('animationend',function(){
        div.remove();
    })
}
