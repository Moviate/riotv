// select all image elements on the page
var images = document.querySelectorAll("img");

// add a right-click event listener to each image
images.forEach(function (img) {
    img.addEventListener("contextmenu", function (event) {

        // prevent the default right-click menu from appearing
        event.preventDefault();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // code to disable right-click on images
});
