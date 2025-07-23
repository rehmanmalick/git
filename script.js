const btn = document.getElementById('colorBtn');

btn.addEventListener('click', () => {
  const colors = ['#FF6B6B', '#6BCB77', '#4D96FF', '#F7B801', '#9D4EDD'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
