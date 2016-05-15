function sortQuality() {
  document.getElementById("quality-dropdown").classList.toggle("show");
}

// Hide dropdown if user clicks outside of sort button
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

function sortDesc() {
  console.log('sort Desc');
}

function sortAsc() {
  console.log('sortAsc');
}
