document
  .querySelector('#edit_forma')
  ?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { title, img, description, action } = event.target;
    const res = await fetch(action, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title: title.value,
        img: img.value,
        description: description.value,
      }),
    });
    const data = await res.json();
    if (data.edit === 'ok') {
      window.location.assign('/mygames');
    } else {
      document.querySelector('#message').innerHTML = data.message;
    }
  });
