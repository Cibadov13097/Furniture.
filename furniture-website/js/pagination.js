document.addEventListener('DOMContentLoaded', function () {
  const itemsPerPage = 6;
  const furnitureGrid = document.getElementById('furnitureGrid');
  const items = Array.from(furnitureGrid.querySelectorAll('.furniture-item'));
  const pagination = document.querySelector('.pagination');
  const prevBtn = pagination.querySelector('.pagination-btn.prev');
  const nextBtn = pagination.querySelector('.pagination-btn.next');
  const info = pagination.querySelector('.pagination-info');
  const catBtns = document.querySelectorAll('.cat-btn');

  let currentPage = 1;
  let filteredItems = items;

  function showPage(page) {
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    currentPage = Math.max(1, Math.min(page, totalPages));
    items.forEach(item => item.style.display = 'none');
    filteredItems
      .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      .forEach(item => item.style.display = '');

    info.textContent = `${currentPage} / ${totalPages || 1}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
  }

  function filterCategory(category) {
    if (category === 'all') {
      filteredItems = items;
    } else {
      filteredItems = items.filter(item => item.getAttribute('data-category') === category);
    }
    showPage(1);
  }

  prevBtn.addEventListener('click', () => showPage(currentPage - 1));
  nextBtn.addEventListener('click', () => showPage(currentPage + 1));

  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterCategory(btn.dataset.category);
    });
  });

  // Initial load
  showPage(1);
});