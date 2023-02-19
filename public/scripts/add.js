document
  .querySelector('#add_forma')
  ?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { title, img, description, action, method } = event.target;
    const res = await fetch(action, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title: title.value,
        img: img.value,
        description: description.value,
      }),
    });
    const data = await res.text();
    document.querySelector('.myGames').insertAdjacentHTML('beforeend', data);
  });
