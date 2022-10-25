const btn = document.querySelector(`.btn`);
const container = document.querySelector(`.container`);

btn.addEventListener(`click`, function () {
  const random1 = Math.trunc(Math.random() * 280);
  const random2 = Math.trunc(Math.random() * 280);
  const random3 = Math.trunc(Math.random() * 280);

  container.style.background = `rgb(${random1},${random2},${random3})`;
});
