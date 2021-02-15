(function () {
  var items = document.querySelector('.items');
  var slideSize = document.querySelector('.slide').offsetWidth;
  var index = 0;

  document.querySelector('.prev').addEventListener('click', function () {
    if (index !== 0) shiftSlide(-1);
  });
  document.querySelector('.next').addEventListener('click', function () {
    if (index !== 4) shiftSlide(1);
  });
  items.addEventListener('transitionend', function () {
    items.classList.remove('shifting');
  });

  function shiftSlide(dir) {
    if (document.querySelector('.shifting')) return;

    items.classList.add('shifting');
    index = index + dir;
    items.style.left = - slideSize * index + 'px';
  }
})();
