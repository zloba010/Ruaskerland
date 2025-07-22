console.log("%cопасно для жизни! код выполнен не профессионалом. изучение кода веб-страницы может убить в вас внутреннего програмиста. опасно для жизни!", "color: red; font-weight: bold;backraund-color:lightblue;");
console.log("%cя точно помню что запретил правый клик мыши на сайте. ты верно прожал сочетание клавиш, негодник.", "color: green; font-weight: bold;");
console.log("%cЧто ж, коль ты погружаешься в разбор кода - удачи. но помни, я предупреждал.", "color: red; font-weight: bold;");
console.log("%cЕсли ты разочаровался и сидишь грустный то вот тебе небольшое развлечение:", "color: green; font-weight: bold;");
console.log("%cКстати это пасхалка на сайте. введи в форму поикса /kliker и ты сможешь поиграть в секретную игру.", "color: red; font-weight: bold;");
console.log("%cEсли это тебя не развеселило и ты продолжаешь сидеть грустный - попробуй зибить болт.", "color: green; font-weight: bold;");
console.log("%cEсли это тебя не развеселило и ты продолжаешь сидеть грустный - попробуй забить болт еще раз.", "color: purple; font-weight: bold;");






const contextMenu = document.getElementById('context-menu');

document.addEventListener('contextmenu', e => {
    e.preventDefault();
    contextMenu.style.display = 'block';
    contextMenu.style.left = `${e.clientX}px`;
    contextMenu.style.top = `${e.clientY}px`;
});

document.addEventListener('click', () => {
    contextMenu.style.display = 'none';
});

function refreshPage() {
    window.location.reload();
}

async function pasteFromClipboard() {
    try {
        const text = await navigator.clipboard.readText();
        document.execCommand('insertText', false, text);
    } catch (err) {
        console.error('Не удалось вставить из буфера обмена:', err);
    }
}

function openSearchCommands() {
    window.open('https://ruaskerland.glitch.me/comandlist.html', '_blank', 'noopener,noreferrer');
}

function openWhatsNew() {
    window.open('https://ruaskerland.glitch.me/list-of-changes.txt', '_blank', 'noopener,noreferrer');
}

function openCodeNew() {
    window.open('https://ruaskerland.glitch.me/code.txt', '_blank', 'noopener,noreferrer');
}







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
}, 1200);














/*Скрипт формы поиска*/
let form = document.querySelector('.search_form');
let formInput = document.querySelector('.search');
let missionMessage = document.getElementById('missionMessage');


// Массив с популярными российскими радиостанциями
const radioStations = [
 'https://europaplus.hostingradio.ru:8014/europaplus320.mp3', // Европа Плюс +
 'https://pub0101.101.ru:8000/stream/reg/mp3/128/region_avto_237', // Авторадио +
 'https://radio.golvestnik.ru/radio7gol', // Радио 7 +
 'https://vanyareg.hostingradio.ru/saratov.vanya128.mp3', // Радио Ваня +
 'https://retroserver.streamr.ru:8043/retro256.mp3', // Ретро FM +
 'http://pub0101.101.ru:8000/stream/reg/mp3/128/region_humor_163', // Юмор FM -
];

// Состояние радио
let radioActive = false;
let currentRadioStation = 0;
let radioAudio = new Audio();

// Флаг для отображения команд
let showRadioCommands = false;

// Функция для показа/скрытия команд
function toggleRadioCommands(show) {
 if (show) {
 formInput.value = "/next /previous /stop";
 formInput.setAttribute('disabled', 'disabled');
 } else {
 formInput.value = "";
 formInput.removeAttribute('disabled');
 }
}

function typeMessage(message, element) {
 element.innerHTML = '';
 element.classList.remove('hidden');
 element.classList.add('visible');
 
 let index = 0;
 let interval = setInterval(() => {
 if (index < message.length) {
 element.innerHTML += message.charAt(index);
 index++;
 } else {
 clearInterval(interval);
 setTimeout(() => {
 element.classList.remove('visible');
 element.classList.add('hidden');
 }, 4500);
 }
 }, 85);
}

function onSubmitSearch(event) {
 event.preventDefault();
 let query = formInput.value.trim().toLowerCase();
 
 if (query === "hesoyam") {
 let audio = new Audio('https://cdn.glitch.global/1584c047-6111-4e8b-98d1-b725da2fb99f/gta-san-andreas-mission-complete-sound-hq_4ZVTov6.mp3?v=1740926955858');
 audio.play();
 typeMessage("Mission Completed. Respect+", missionMessage);
 } else if (query.startsWith("/qr")) {
 window.open('https://zloba010.github.io/Ruaskerland/qrkod.html', '_blank');
 } else if (query.startsWith("/kliker")) {
 window.open('https://github.io/Ruaskerland/kliker.html', '_blank');
 } else if (query.startsWith("/radio")) {
 if (!radioActive) {
 radioActive = true;
 currentRadioStation = 0;
 radioAudio.src = radioStations[currentRadioStation];
 radioAudio.play();
 typeMessage("Радио включено. Управление: /next , /previous , /stop .", missionMessage);
 
 // Показываем команды на 10 секунд
 toggleRadioCommands(true);
 showRadioCommands = true;
 setTimeout(() => {
 toggleRadioCommands(false);
 showRadioCommands = false;
 }, 10000);
 }
} else if (query.startsWith("/next")) {
 if (radioActive) {
 currentRadioStation = (currentRadioStation + 1) % radioStations.length;
 radioAudio.src = radioStations[currentRadioStation];
 radioAudio.play();
 typeMessage(`Переключено на ${currentRadioStation + 1} станцию`, missionMessage);
 }
} else if (query.startsWith("/previous")) {
 if (radioActive) {
 currentRadioStation = (currentRadioStation - 1 + radioStations.length) % radioStations.length;
 radioAudio.src = radioStations[currentRadioStation];
 radioAudio.play();
 typeMessage(`Переключено на ${currentRadioStation + 1} станцию`, missionMessage);
 }
} else if (query.startsWith("/stop")) {
 if (radioActive) {
 radioAudio.pause();
 radioActive = false;
 typeMessage("Радио остановлено", missionMessage);
 }
} else {
 let queryLink = `https://yandex.ru/search/?text=${encodeURIComponent(formInput.value)}`;
 window.location.href = queryLink;
 }
 
 formInput.value = "";
}

form.addEventListener('submit', onSubmitSearch);














var mql = window.matchMedia("(orientation: portrait)");

if(mql.matches) {  
    // Портретная ориентация
} else {  
    // Горизонтальная ориентация
}

// Прослушка события изменения ориентации
mql.addListener(function(m) {
    if(m.matches) {
        // Изменено на портретный режим
    }
    else {
        // Изменено на горизонтальный режим
    }
});

const setupTitle = document.querySelector('.setup__title');

const hideTitle = () => {setupTitle.classList.add('setup__title--hidden')}
window.addEventListener('load', hideTitle);

const setup = document.querySelector('.setup');

const showTitle = (e) => {
    console.log(e.target);
    setupTitle.classList.contains('setup__title--hidden') ?
     setupTitle.classList.remove('setup__title--hidden'):  
    setupTitle.classList.add('setup__title--hidden');
}

setup.addEventListener('mouseover', showTitle, false);
setup.addEventListener('mouseleave', showTitle);

window.addEventListener('load', () => {
    setTimeout(() => {
        setup.style.top = '0px';
    }, 10000);

    setInterval(() => {
        setup.style.top = '-55px';
    }, 20000);
});

