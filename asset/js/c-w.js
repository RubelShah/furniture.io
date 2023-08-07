const progressCircle = document.querySelector('.progress-circle');
const innerTxt = document.querySelector('#inner-txt');
let start = 0;
let circleValue = 87;
window.addEventListener('DOMContentLoaded',bar);
function bar(){
    let innerprogress = setInterval(innerbar,5);
    function innerbar(){
        if(start<circleValue){
            start++;
        }else{
            start--;
        }
        console.log(start);
        innerTxt.textContent = `${start}%`;
        progressCircle.style.backgroundImage = `conic-gradient(#4AB247 ${start*3.6}deg,#f8f8f8 0deg)`;
        if(start==circleValue){
            clearInterval(innerprogress);
        }
    }
    

}