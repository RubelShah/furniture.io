const Clist = document.querySelectorAll('[data-list]');
const cartlistcontainer = document.querySelector('.cart_l_list');
const sideTabContents = document.querySelectorAll('.side-tab-content');
Clist.forEach(listbtn=>{
    listbtn.addEventListener('click',function(){
        console.log(this);
        const list = this.dataset.list;
        console.log(list);
        const listItem = document.getElementById(list);
        for(element of Clist){
            if(element.classList.contains('active')){
                element.classList.remove('active');
            }
        }
        this.classList.add('active');
        for(const element of sideTabContents){
            if(element.classList.contains('active')){
                element.classList.remove('active');
            }
        }
        listItem.classList.add('active');
    })
})
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
