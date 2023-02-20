document.querySelector('.myGames').addEventListener('click', async (event) => {
  if (event.target.classList.contains('delete')) {
    event.preventDefault();
    const { id } = event.target.dataset;
    const res = await fetch(`mygames/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (data) {
      event.target.closest('.cardGame').remove();
    }
  }
});
