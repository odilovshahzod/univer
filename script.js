window.addEventListener('DOMContentLoaded',()=>{
    window.addEventListener('scroll',function(){
        const header=document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY>0)
    })
   
    const slides=document.querySelectorAll('.img'),
    slidesWrapper=document.querySelector('.cosmo_img'),
    slidesField=document.querySelector('.img_block'),
    leftButton=document.querySelector('#leftButton'),
    rightButton=document.querySelector('#rightButton'),
    width=getComputedStyle(slidesWrapper).width;
  
    const menuBtn=document.querySelector('.menu-btn');
    const navigation = document.querySelector('.navbar');
    const navigationIteams = document.querySelectorAll('.navbar a');
    menuBtn.addEventListener('click',()=>{
        menuBtn.classList.toggle('active')
        navigation.classList.toggle('active')
    })
    navigationIteams.forEach(navIteam =>{
        navIteam.addEventListener('click',()=>{
            menuBtn.classList.remove('active')
            navigation.classList.remove('active')
        })
    })

    let index=1;
    let offset=0;
    // slidesField.style.width=100*slides.length+'%';
    slides.forEach(slide=>{
        slide.style.width=width 
    })
    
    rightButton.addEventListener('click',()=>{
        if(offset==(+width.slice(0,width.length-2)*(slides.length-1))){
            offset=0;
        }
        else{offset += +width.slice(0,width.length-2)}
        slidesWrapper.style.transform=`translateX(-${offset}px)`
    })

    leftButton.addEventListener('click',()=>{
    if(offset==0){
        offset = (+width.slice(0,width.length-2)*(slides.length-1));
    }
    else{offset -= +width.slice(0,width.length-2)}
    slidesWrapper.style.transform=`translateX(-${offset}px)`

})
})