let dmOverlay = document.querySelector('.dm-overlay');
let closeBtn = document.getElementById('close');
let menuBtn = document.querySelector('.btn');


/*Открываем popup block*/
function openPopUpBlock() {
    dmOverlay.style.display = 'block';

    closeBtn.addEventListener('click', closePopupOnBtn);
    dmOverlay.addEventListener('click', closePopupOverlayOnClick);
    window.addEventListener('keydown', closePopUpOnEsc);
}
menuBtn.addEventListener('click', openPopUpBlock);


/*Закрывает попап на кнопку с крестиком*/
function closePopupOnBtn() {
    dmOverlay.style.display = 'none';
    
    window.removeEventListener('keydown', closePopUpOnEsc);
    dmOverlay.removeEventListener('click', closePopupOverlayOnClick);
}


/*Закрываем попап на клик по невидимой области*/
function closePopupOverlayOnClick(evt) {
    let dmCell = evt.target;
    if(dmCell.classList.contains('dm-cell')) {
        dmCell.offsetParent.style.display = 'none'; 

        closeBtn.removeEventListener('click', closePopupOnBtn);
        window.addEventListener('keydown', closePopUpOnEsc);
    }
    else {
        return;
    }
}


/*Закрывает попап на клавишу esc*/
function closePopUpOnEsc(evt) {
    evt.keyCode === 27 ? dmOverlay.style.display = 'none' : null;

    closeBtn.removeEventListener('click', closePopupOnBtn);
    dmOverlay.removeEventListener('click', closePopupOverlayOnClick);
}


let preloader = document.querySelector('.preloader');

  setTimeout(function timeOut() {
    preloader.classList.add('preloader-remove')
  }, 1200)


/*Скрипт формы поиска*/
let form =  document.querySelector('.search_form');
let formInput = document.querySelector('.search');
function onSubmitSearch() {
    let queryLink = `${form.action}/search/?text=${formInput.value}`;
    window.location.origin= queryLink;
}
form.addEventListener('submit', onSubmitSearch);




          let optionMy = document.getElementById('my');
          
          optionMy.addEventListener('click', (evt)=> {
            alert('fphkfghfl');
          })


