document.addEventListener('DOMContentLoaded', function () {
  const itemsPerPage = 18;
  const furnitureGrid = document.getElementById('bedroomGrid');
  const items = Array.from(furnitureGrid.querySelectorAll('.furniture-item'));
  const pagination = document.querySelector('.pagination');
  const prevBtn = pagination.querySelector('.pagination-btn.prev');
  const nextBtn = pagination.querySelector('.pagination-btn.next');
  const info = pagination.querySelector('.pagination-info');

  let currentPage = 1;

  function showPage(page) {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    currentPage = Math.max(1, Math.min(page, totalPages));
    items.forEach(item => item.style.display = 'none');
    items
      .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      .forEach(item => item.style.display = '');

    info.textContent = `${currentPage} / ${totalPages || 1}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
  }

  prevBtn.addEventListener('click', () => showPage(currentPage - 1));
  nextBtn.addEventListener('click', () => showPage(currentPage + 1));

  // Initial load
  showPage(1);
});