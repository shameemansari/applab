const accordion = document.querySelectorAll('.accordion-btn');
const collapse = document.querySelectorAll('.card > .collapse');

// console.log(accordion);
// console.log(collapse);

accordion.forEach((item) => {
  item.addEventListener('click', (e) => {
    // console.log((item.children[0].style.display = 'none'));
    // console.log(item.parentElement.nextElementSibling.classList);
    console.log(e.target.classList.toggle('open'));
  });
});

function check(item) {
  if (item.parentElement.nextElementSibling.classList.contains == 'show') {
    item.children[0].style.display = 'none';
  } else {
    item.children[0].style.display = 'block';
  }
}
