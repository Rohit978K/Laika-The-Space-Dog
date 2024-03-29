const container = document.getElementById('container');

document.addEventListener('mousemove', (e) => {
  move(e)
})

const move = (e) => {
  const x = e.pageX;
  const y = e.pageY;

  container.style.top = y - 100 + 'px';
  container.style.left = x - 100 + 'px';
}