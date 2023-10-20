// Знайдіть елементи
const thunderCoding = document.querySelector(".main h2");
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");

// Додайте обробник подій для кліку на "Thunder Coding..."
thunderCoding.addEventListener("click", () => {
  modal.style.display = "block";
});

// Додайте обробник подій для закриття модального вікна
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Закриття модального вікна при кліку поза ним
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
