function toggleCheck() {
    var checkbox = document.getElementById("menu-bt-ch");
    var image = document.getElementById("menuimg");
    if (checkbox.checked) {
      image.src = "img/close.svg";
    } else {
      image.src = "img/menu.svg";
    }
  }
  
  function changeImage() {
    var checkbox = document.getElementById("menu-bt-ch");
    var image = document.getElementById("menuimg");
    checkbox.checked = !checkbox.checked;
    if (checkbox.checked) {
      image.src = "img/close.svg";
    } else {
      image.src = "img/menu.svg";
    }
  }
  
  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
      event.preventDefault();
    }
  });
  