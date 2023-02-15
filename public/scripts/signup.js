document
  .querySelector('#signup_forma')
  ?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { name, login, email, password, password2, action, method } =
      event.target;
    const res = await fetch(action, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        login: login.value,
        email: email.value,
        password: password.value,
        password2: password2.value,
      }),
    });
    const data = await res.json();
    if (data.signup === 'ok') {
      window.location.assign('/');
    } else {
      document.querySelector('#message').innerHTML = data.message;
    }
  });
