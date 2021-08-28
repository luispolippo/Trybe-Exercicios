window.onload = () => {
  const button = document.getElementById('button');
  const counter = document.getElementById('count');
  let clickCount = 0
  button.addEventListener('click', () => {
    clickCount += 1;
    counter.innerHTML = clickCount;
  })
}