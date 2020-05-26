ScrollReveal().reveal('.vitrina', { delay: 500});
ScrollReveal().reveal('.vitrina-2', { delay: 500});
ScrollReveal().reveal('.deportes', { delay: 500});
ScrollReveal().reveal('.deportes', { delay: 500});

const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".my-form button");

checkbox.addEventListener("change", function() {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});
