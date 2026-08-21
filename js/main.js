// THE GATO GAZETTE — main.js
// Handles the category tab filtering on the homepage.
// No frameworks, no build step — keeps the site fast and simple to edit.

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabs button');
  const cards = document.querySelectorAll('.grid .card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;

      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
