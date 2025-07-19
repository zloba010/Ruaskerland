const particleContainer = document.getElementById('particle-container');
const changeButton = document.getElementById('change-particles');
const toggleButton = document.getElementById('toggle-particles');
const particleSelector = document.getElementById('particle-selector');

const particleImages = {
    leaf: ['https://cdn.glitch.global/1584c047-6111-4e8b-98d1-b725da2fb99f/akm-isolated-transparent-background.png?v=1740345474491', 'https://cdn.glitch.global/1584c047-6111-4e8b-98d1-b725da2fb99f/pngwing.com.png?v=1740344958949', 'https://cdn.glitch.global/1584c047-6111-4e8b-98d1-b725da2fb99f/vecteezy_bomb-3d-icon-isolated_49650963.png?v=1740344762028'],
    snow: ['snowflake1.png', 'snowflake2.png', 'snowflake3.png'],
    stars: ['star1.png', 'star2.png', 'star3.png'],
};

let currentParticleType = 'leaf';
let activeParticles = [];
let particlesEnabled = false;

function createParticle() {
    if (!particlesEnabled || activeParticles.length >= 10) return; // Проверяем, включены ли частицы и ограничиваем до 25

    const particle = document.createElement('img');
    const randomImage = particleImages[currentParticleType][Math.floor(Math.random() * particleImages[currentParticleType].length)];
    particle.src = randomImage;
    particle.className = 'particle';

    // Позиция частиц чуть выше экрана
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = (Math.random() * -100) + 'px'; // Начала падать чуть выше экрана

    particle.style.animationDuration = (Math.random() * 9 + 9) + 's'; // Более медленное падение

    // Определяем случайную траекторию для частиц
    const trajectory = Math.random() > 0.6 ? 'fall' : 'fall-with-trajectory';
    particle.style.animationName = trajectory;

    // Поворот частиц
    const rotation = Math.random() > 0.6 ? 'rotate(-15deg)' : 'rotate(15deg)';
    particle.style.transform += ` ${rotation}`;

    particleContainer.appendChild(particle);
    activeParticles.push(particle);

    // Удаляем частицу после падения
    particle.addEventListener('animationend', () => {
        particle.style.transform += ' translate(-50%, -50%)'; // Перемещение к центру экрана
        particle.style.opacity = '0'; // Плавное исчезновение
        setTimeout(() => {
            particle.remove();
            activeParticles = activeParticles.filter(p => p !== particle);
        }, 1000); // Ждем, пока пройдет анимация исчезновения
    });
}

function startFallingParticles() {
    setInterval(createParticle, 300); // создаем частицу каждые 700 мс
}

changeButton.addEventListener('click', () => {
    particleContainer.innerHTML = ''; // Очищаем контейнер частиц
    activeParticles = []; // Сбрасываем массив активных частиц
    startFallingParticles();
});

// Изменение типа частиц по селектору
particleSelector.addEventListener('change', (event) => {
    currentParticleType = event.target.value;
    particleContainer.innerHTML = ''; // Очищаем контейнер частиц
    activeParticles = []; // Сбрасываем массив активных частиц
    startFallingParticles(); // Запускаем эффект с новыми частицами
});

// Переключение включения/выключения частиц
toggleButton.addEventListener('click', () => {
    particlesEnabled = !particlesEnabled;
    toggleButton.textContent = particlesEnabled ? 'Выключить частички' : 'Включить частички';
    if (particlesEnabled) {
        startFallingParticles();
    } else {
        particleContainer.innerHTML = ''; // Очищаем контейнер частиц при выключении
        activeParticles = []; // Сбрасываем массив активных частиц
    }
});

// Запускаем эффект падающих частиц при загрузке страницы
startFallingParticles();