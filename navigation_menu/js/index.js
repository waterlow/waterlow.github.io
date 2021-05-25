(function() {
  document.querySelector(".menu-icon").addEventListener("click", function() {
    this.classList.toggle('active');
    document.querySelector(".navigation-menu").classList.toggle('active');
    document.querySelector(".menu-icon i").classList.toggle('fa-times');
  })
})()
