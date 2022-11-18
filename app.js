function myFunction() {
  document.getElementById("dropdown-menu").classList.toggle("dropdown-display");
}

window.onclick = function (event) {
  if (!event.target.matches(".fa-bars")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("dropdown-display")) {
        openDropdown.classList.remove("dropdown-display");
      }
    }
  }
};
