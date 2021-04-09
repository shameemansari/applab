const accordion = document.querySelectorAll('.accordion-btn');
const collapse = document.querySelectorAll('.card > .collapse');
const navpills = document.querySelectorAll('#pills-tab > a');
const tabpane = document.querySelectorAll('.tab-pane');

accordion.forEach((item) => {
  item.addEventListener('click', (e) => {
    console.log(e.target.classList.toggle('open'));
  });
});
