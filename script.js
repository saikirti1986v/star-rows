document.addEventListener("DOMContentLoaded", function () {
    var rows = 5;
    var starsContainer = document.getElementById("stars-container");

    for (var i = 1; i <= rows; i++) {
        // Add leading spaces
        var spaces = " ".repeat(rows - i);

        // Add stars
        var stars = "*".repeat(i);

        // Append the row to the container
        starsContainer.innerHTML += spaces + stars + "\n";
    }
});
