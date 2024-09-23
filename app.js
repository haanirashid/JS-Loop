console.log("testing");




// Table Assignment 


function tablefunc() {
    var tableData = document.getElementById("tableValue").value;
    var tab = document.getElementById("tab");
    tab.innerHTML = "";
    for (var i = tableData; i >= 1; i--) {
        tab.innerHTML += "<strong>Table of " + i + ":</strong><br>";

        for (var h = 1; h <= 10; h++) {
            tab.innerHTML += (i + " X " + h + " = " + i * h + "<br>");
        }

        tab.innerHTML += "<br>";
    }
}
// Table Assignment End


// Pyramid Assignment 

function pyramidfunc() {
    var pyramidData = document.getElementById("pyramidValue").value;
    var pyramid = document.getElementById("pyramid");
    pyramid.innerHTML = "";

    for (var a = 1; a <= pyramidData; a++) {
        var spaces = '';  // Initialize empty string for spaces
        var stars = '';   // Initialize empty string for stars

        // Build the spaces (leading spaces for alignment)
        for (let j = 0; j < pyramidData - a; j++) {
            spaces += '&nbsp;';  // Add space for each iteration
        }

        // Build the stars (2 * i - 1 stars for the current row)
        for (let k = 0; k < (2 * a - 1); k++) {
            stars += '*';  // Add star for each iteration
        }

        // Append the row to the pyramidDiv
        pyramid.innerHTML += spaces + stars + "<br>";
    }
}
