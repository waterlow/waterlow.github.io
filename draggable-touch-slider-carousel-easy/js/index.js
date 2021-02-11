(function () {
  var items = document.querySelector('.items');
  var slideSize = document.querySelector('.slide').offsetWidth;
  var index = 0;
  var allowShift = true; // Click events

  document.querySelector('.prev').addEventListener('click', function () {
    shiftSlide(-1);
  });
  document.querySelector('.next').addEventListener('click', function () {
    shiftSlide(1);
  }); // Transition events

  items.addEventListener('transitionend', checkIndex);

  function shiftSlide(dir) {
    if (!allowShift) return;
    if (dir === 1 && index === 4 || dir === -1 && index === 0) return;

    items.classList.add('shifting');
    var posInitial = items.offsetLeft;
    items.style.left = posInitial - slideSize * dir + "px";
    index = index + dir;
    allowShift = false;
  }

  function checkIndex() {
    items.classList.remove('shifting');
    allowShift = true;
  }
})();
