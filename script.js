// تعاملات ساده صفحه؛ همه راه‌های ارتباطی به تماس و تلگرام هدایت می‌شوند.
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
  link.setAttribute('aria-label', 'تماس تلفنی با شماره 09370046567');
});
