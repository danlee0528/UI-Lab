const loaderContainer = document.querySelector('.loader-container');

window.addEventListener('load', ()=>{
    console.log("listening to load() event")
    loaderContainer.classList.add('.hide');
});