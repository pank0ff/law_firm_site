document.querySelector('.form').addEventListener('submit', async function (event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Пожалуйста, заполните все поля.');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert('Введите корректный адрес электронной почты.');
      return;
    }

    alert('Ваше обращение принято.');
});
