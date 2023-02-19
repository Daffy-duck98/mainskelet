document.querySelector('.myGames').addEventListener('click', async (event) => {
  // console.log(123456);
  if (event.target.classList.contains('delete')) {
    event.preventDefault();
    const { id } = event.target.dataset;
    const res = await fetch(`mygames/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (data.delete) {
      event.target.closest('.cardGame').remove();
    }
  }
});
