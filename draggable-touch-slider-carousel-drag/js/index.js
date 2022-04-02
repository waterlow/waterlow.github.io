(function() {
  var items = document.querySelector('#items'),
      posX1 = 0,
      posInitial = null,
      threshold = 100,
      slideSize = document.querySelector('.slide').offsetWidth,
      index = 0,
      allowShift = true

  items.addEventListener('mousedown', dragStart)
  items.addEventListener('mouseup', dragEnd)
  items.addEventListener('mouseleave', dragEnd)
  items.addEventListener('mousemove', dragAction)

  items.addEventListener('transitionend', checkIndex);

  function dragStart (e) {
    e.preventDefault();
    posInitial = items.offsetLeft;
    posX1 = e.clientX;
  }

  function dragAction (e) {
    var diff = posX1 - e.clientX;
    var isEdge = index === 0 && diff < 0 || index === 4 && diff > 0;
    if (posInitial === null || isEdge) return;

    posX1 = e.clientX;
    items.style.left = (items.offsetLeft - diff) + "px";
  }

  function dragEnd () {
    if (Math.abs(items.offsetLeft - posInitial) > threshold) {
      shiftSlide(-1 * Math.sign(items.offsetLeft - posInitial));
    } else {
      items.style.left = posInitial + "px";
    }
    posInitial = null
  }

  function shiftSlide(dir) {
    items.classList.add('shifting');
    if(!allowShift) return;

    items.style.left = (posInitial - slideSize * dir) + "px";
    index += dir
    allowShift = false;
  }

  function checkIndex (){
    items.classList.remove('shifting');
    allowShift = true;
  }
})()
