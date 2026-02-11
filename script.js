const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".buttons");

  const maxX = wrapper.clientWidth - noBtn.clientWidth;
  const maxY = wrapper.clientHeight - noBtn.clientHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
