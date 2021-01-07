function scrollAppear(){
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/3;
    // console.log(`introPos: ${introText} and screenPos: ${screenPosition}`);
    if(introPosition < screenPosition){
        introText.classList.add('intro-appear');
    }
}

window.addEventListener('scroll', scrollAppear);