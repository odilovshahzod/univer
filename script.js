window.addEventListener('DOMContentLoaded',()=>{
    window.addEventListener('scroll',function(){
        const header=document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY>0)
    })

    menu_open=document.querySelector('.open');
    menu_close=document.querySelector('.close');
    navbar=document.querySelector('.navbar');
    navbar_open_close_click=document.querySelector('.menu_navbar .span_container');
    menu_open.addEventListener('click',()=>{
        navbar.classList.add('open_navbar_menu');
        navbar_open_close_click.style.cssText=`transform: translateY(-30px);`
    })
    menu_close.addEventListener('click',()=>{
        navbar.classList.remove('open_navbar_menu');
        navbar_open_close_click.style.cssText=`transform: translateY(0);`
    })
    container_img=document.querySelector('.container_img')
    const slides=document.querySelectorAll('.img'),
    slidesWrapper=document.querySelector('.cosmo_img'),
    slidesField=document.querySelector('.img_block'),
    leftButton=document.querySelector('#leftButton'),
    rightButton=document.querySelector('#rightButton'),
    width=getComputedStyle(slidesWrapper).width;


    let offset=0;
    slides.forEach(slide=>{
        slide.style.width=width 
        if (window.innerWidth<=1200) {
            container_img.style.width=`${window.innerWidth-60}px`
            slide.style.width=`${window.innerWidth-99}px`
        }
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
// if(window.innerWidth)
console.log(window.innerWidth);
























// -------------------------------------------------

    // const slides=document.querySelectorAll('.img'),
    // slidesWrapper=document.querySelector('.cosmo_img'),
    // slidesField=document.querySelector('.img_block'),
    // leftButton=document.querySelector('#leftButton'),
    // rightButton=document.querySelector('#rightButton'),
    // width=getComputedStyle(slidesWrapper).width;

    // let index=1;
    // let offset=0;
    // slidesField.style.width=100*slides.length+'%';
//     slides.forEach(slide=>{
//         slide.style.width=width 
//     })
//     console.log(width);
    
//     rightButton.addEventListener('click',()=>{
//         console.log(slides.);
//         if(offset==(+width.slice(0,width.length-2)*(slides.length-1))){
//             offset=0;
//         }
//         else{offset += +width.slice(0,width.length-2)}
//         slidesWrapper.style.transform=`translateX(-${offset}px)`
//     })
//     console.log('ofst='+offset);

//     leftButton.addEventListener('click',()=>{
//     if(offset==0){
//         offset = (+width.slice(0,width.length-2)*(slides.length-1));
//     }
//     else{offset -= +width.slice(0,width.length-2)}
//     slidesWrapper.style.transform=`translateX(-${offset}px)`

// })
})