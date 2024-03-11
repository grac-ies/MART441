

$(document).ready(function () {
    var images = ["sandwhich/sandwhich1.jpeg", "sandwhich/sandwhich2.jpeg", "sandwhich/sandwhich3.jpeg"];

    var quotes = ["Lettuce", "tomato?", "salami"];

    var currentIndex = 0;

    // Function to fade out image and load next image
    function changeImage() {
        $('#artwork').fadeOut(1000, function () {
            $(this).attr('src', images[currentIndex]).fadeIn(1000);
            currentIndex = (currentIndex + 1) % images.length;
        });
    }

    // Function to change text
    function changeText() {
        $('#quote').fadeOut(1000, function () {
            $(this).text(quotes[currentIndex]).fadeIn(1000);
            currentIndex = (currentIndex + 1) % quotes.length;
        });
    }

    // Function to move shapes around
    function moveShapes() {
        $('.shape').each(function () {
            var newLeft = Math.random() * ($(window).width() - $(this).width());
            var newTop = Math.random() * ($(window).height() - $(this).height());
            $(this).animate({ left: newLeft, top: newTop }, 2000);
        });
    }

    // Initial setup
    changeImage();
    changeText();
    moveShapes();

    // Set interval for changing image, text, and moving shapes
    setInterval(function () {
        changeImage();
        changeText();
        moveShapes();
    }, 5000);
});
