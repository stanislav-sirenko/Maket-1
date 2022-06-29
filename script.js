let btnMore = document.querySelector('.btn-more-1');
const HIDE = 'Скрыть';
const READ_ALL = 'Читать далее';

btnMore.addEventListener("click", function () {
  let mainText = document.querySelectorAll('.text-visible');
    for (let i = 0; i < mainText.length; i++) {
  mainText[i].classList.toggle("text-hide");
  if (mainText[i].classList.contains("text-hide")) {
    btnMore.value = READ_ALL;
  } else {
    btnMore.value = HIDE;
  }

  let rotate = document.querySelector('.read-more-img');
  
  if (btnMore.value === HIDE) {
    rotate.style.transform = 'rotate(' + 180 + 'deg)';
  } else {
    rotate.style.transform = null;
  }
}
});