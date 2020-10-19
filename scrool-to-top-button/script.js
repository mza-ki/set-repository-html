/* let scrollToTop = document.getElementById('scroll-to-top');
let dataShow = false;

window.addEventListener('scroll', () => {
if (window.scrollY > 50 && !dataShow) {
  scrollToTop.setAttribute('data-show', 'true');
  dataShow = true;
}

if (window.scrollY <= 50 && dataShow) {
  scrollToTop.setAttribute('data-show', 'false');
  dataShow = false;
}
});

scrollToTop.addEventListener('click', () => {
window.scrollTo({
  top: 0,
  behavior: 'smooth'
});
}); */
let dataShow = false;

function scroll() {
  let scrollToTop = document.getElementById('scroll-to-top');

  if (window.scrollY > 50 && !dataShow) {
    scrollToTop.setAttribute('data-show', 'true');
    dataShow = true;
  }

  if (window.scrollY <= 50 && dataShow) {
    scrollToTop.setAttribute('data-show', 'false');
    dataShow = false;
  }

  console.log(window.scrollY);
}

function btnUp() {
  let scrollToTop = document.getElementById('scroll-to-top');

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}