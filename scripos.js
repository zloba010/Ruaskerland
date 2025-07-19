document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            const user = data.users.find(user => user.username === username && user.password === password);

            if (user) {
                document.getElementById('message').textContent = 'Авторизация успешна!';
            } else {
                document.getElementById('message').textContent = 'Ошибка авторизации. Проверьте логин и пароль.';
            }
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных:', error);
        });
});