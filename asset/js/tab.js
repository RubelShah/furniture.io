const MtabContents = document.querySelectorAll('.menu-tab-contents');
const btnList = document.querySelectorAll('[data-for-tab]');
const tabContainer = document.querySelector('#Mega-menu');
btnList.forEach(btn=>{
    btn.addEventListener('click',function(){
        const tabValue = this.dataset.forTab;
        const tabtoactivate =  tabContainer.querySelector(`[data-tab='${tabValue}']`);
        // console.log(BtnContainer)
        // console.log(tabContainer)
        // console.log(tabValue)
        // console.log(tabtoactivate)
        // btnList.forEach(btn=>{
        //     if(btn.classList.contains('active')){
        //      btn.classList.remove('active');
        //     }
        // });
        // this.classList.add('active');
        // MtabContents.forEach(tab=>{
        //     if(tab.classList.contains('active')){
        //         tab.classList.remove('active');
        //     }else{
        //         tabtoactivate.classList.add('active');
        //     }
        // });

/*********************************we can do the same thing by flowing code ***************/        
        for(const element of btnList){
            if(element.classList.contains('active')){
                element.classList.remove('active');
            }
        }
        this.classList.add('active');
        for(const element of MtabContents){
            if(element.classList.contains('active')){
                element.classList.remove('active');
            }
        }
        tabtoactivate.classList.add('active');
    })
    
});
// document.querySelector('[data-for-tab]').click();