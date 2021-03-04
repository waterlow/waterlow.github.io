(function () {
  Array.from(document.querySelectorAll('.text-input input')).forEach(function (element) {
    element.addEventListener('focus', function (event) {
      event.target.classList.add('focus');
    });
    element.addEventListener('blur', function (event) {
      if (event.target.value !== '') return;

      event.target.classList.remove('focus');
    });
  });
})();
