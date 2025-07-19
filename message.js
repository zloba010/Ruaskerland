let currentUser = null;

// Массив для хранения сообщений
let messages = [];

function login() {
    const nickname = document.getElementById('nickname').value;
    if (nickname && !messages.some(msg => msg.nickname === nickname)) {
        currentUser = nickname;
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('chat-section').style.display = 'block';
        updateChat();
    } else {
        alert("Ник уже занят или не указан!");
    }
}

function sendMessage() {
    const message = document.getElementById('message').value;
    if (message.trim() !== "") {
        messages.push({ nickname: currentUser, message: message });
        document.getElementById('message').value = ''; // очистить поле ввода
        updateChat();
    }
}

function updateChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = '';
    messages.forEach(msg => {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${msg.nickname}: ${msg.message}`;
        chatBox.appendChild(messageElement);
    });
    chatBox.scrollTop = chatBox.scrollHeight; // прокрутить чат вниз
}