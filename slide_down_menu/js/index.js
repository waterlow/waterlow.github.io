(function () {
  var btn = document.getElementById("toggle_menu")
  var menu = document.querySelector(".menu")
  var menuHeight;

  function setARIAState(menuState) {
    var isShow = menuState === "show" ? true : false;

    menu.setAttribute("aria-hidden", !isShow);
  }

  function toggleMenu() {
    if (menu.getAttribute("aria-hidden") === "true") {
      // 非表示→表示
      setARIAState("show");
      menuHeight = menu.children[0].offsetHeight;
      menu.style.height = menuHeight + "px";
    }
  }

  btn.addEventListener("click", toggleMenu);
  setARIAState();
}());
