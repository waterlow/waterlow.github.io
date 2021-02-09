(() => {
  const container = document.querySelector('.container');
  const slide = document.querySelector('.slide');
  const box = document.querySelectorAll('.box');
  let width = box[0].offsetWidth + 30;
  slide.style.width = `${box.length * width}px`;
  let start, change;
  container.addEventListener('dragstart', (event) => {
    start = event.clientX;
  })
  container.addEventListener('dragover', (event) => {
    event.preventDefault();
    let touch = event.clientX;
    change = start - touch;
  })

  container.addEventListener('touchstart', (event) => {
    start = event.touches[0].clientX;
  })
  container.addEventListener('touchmove', (event) => {
    event.preventDefault();
    let touch = event.touches[0].clientX;
    change = start - touch;
  })

  const slideShow = () => {
    if (change > 0) {
      container.scrollLeft += width;
    } else {
      container.scrollLeft -= width;
    }
  }
  container.addEventListener('dragend', slideShow);
  container.addEventListener('touchend', slideShow);
})()
