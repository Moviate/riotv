$(document).ready(function () {
  $.ajax({
      url: "aj/menu.html",
      success: function (response) {
          $(".menu").html(response);
      }
  });
});


$(document).ready(function () {
  $.ajax({
      url: "aj/page1.html",
      success: function (response) {
          $(".content").html(response);
      }
  });
});
