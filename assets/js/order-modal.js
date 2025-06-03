function openOrderModal(productName) {
  const modal = document.getElementById('orderModal');
  modal.style.display = 'flex';
  document.getElementById('modalProductTitle').textContent = productName + ' üçün sifariş';
  document.getElementById('modalProductInput').value = productName;
  document.getElementById('orderSuccess').style.display = 'none';
  document.getElementById('orderForm').reset();
}
function closeOrderModal() {
  document.getElementById('orderModal').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('orderForm').onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('orderSuccess').style.display = 'block';
    setTimeout(closeOrderModal, 1500);
  };
  window.onclick = function(event) {
    var modal = document.getElementById('orderModal');
    if (event.target === modal) closeOrderModal();
  };
});