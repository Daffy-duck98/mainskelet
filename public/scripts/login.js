document
  .querySelector('#login_forma')
  ?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { login, password, action, method } = event.target;
    const res = await fetch(action, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        login: login.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    if (data.login === 'ok') {
      window.location.assign('/');
    } else {
      document.querySelector('#message').innerHTML = data.message;
    }
  });
