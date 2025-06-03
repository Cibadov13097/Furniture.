// JavaScript functionality for filtering furniture items by category

document.addEventListener('DOMContentLoaded', function() {
    const furnitureItems = document.querySelectorAll('.furniture-item');
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const category = this.getAttribute('data-category');

            furnitureItems.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

