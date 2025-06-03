// Sosial şəbəkə dropdown-un mouse ilə rahat açılıb-bağlanması üçün

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector('.navbar-social-dropdown');
  const content = document.querySelector('.social-dropdown-content');
  let dropdownTimeout;

  if (dropdown && content) {
    dropdown.addEventListener('mouseenter', () => {
      clearTimeout(dropdownTimeout);
      content.style.display = 'block';
      content.style.opacity = '1';
      content.style.pointerEvents = 'auto';
    });
    dropdown.addEventListener('mouseleave', () => {
      dropdownTimeout = setTimeout(() => {
        content.style.display = '';
        content.style.opacity = '';
        content.style.pointerEvents = '';
      }, 350); // 350ms gecikmə
    });
    content.addEventListener('mouseenter', () => {
      clearTimeout(dropdownTimeout);
      content.style.display = 'block';
      content.style.opacity = '1';
      content.style.pointerEvents = 'auto';
    });
    content.addEventListener('mouseleave', () => {
      dropdownTimeout = setTimeout(() => {
        content.style.display = '';
        content.style.opacity = '';
        content.style.pointerEvents = '';
      }, 350);
    });
  }
});