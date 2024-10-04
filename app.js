console.log("testing");




// Table Assignment 


function tableFromLast() {
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

function tableFromOne() {
    var tableData = document.getElementById("tableValue").value;
    var tab = document.getElementById("tab");
    tab.innerHTML = "";
    for (var w = 1; w <= tableData; w++) {
        tab.innerHTML += "<strong>Table of " + w + ":</strong><br>";

        for (var d = 1; d <= 10; d++) {
            console.log(w + " X " + d + " = " + w * d);
            tab.innerHTML += (w + " X " + d + " = " + w * d + "<br/>");
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

    for (var y = 1; y <= pyramidData; y++) {
        for (var s = 1; s <= y; s++) {
            pyramid.innerHTML += "*"
        }
        pyramid.innerHTML += ("<br/>");
    }

}


// Pyramid Assignment End



// Center Pyramid Assignment



function single() {
    var centerData = document.getElementById("centerValue").value;
    var target = document.getElementById("target");
    target.innerHTML = "";

    for (var a = 1; a <= centerData; a++) {
        var stars = "";
        var spaces = "";

        for (let j = 0; j < centerData - a; j++) {
            spaces += '&nbsp;';
        }

        for (let k = 0; k < (2 * a - 1); k++) {
            stars += '*';
        }

        target.innerHTML += spaces + stars + "<br>";
    }
}

function turn() {
    centerData = document.getElementById("centerValue").value;
    target = document.getElementById("target");
    target.innerHTML = "";

    for (var e = centerData; e >= 1; e--) {
        var stars = "";
        var spaces = "";
        console.log("Main Loop E", e);

        for (let u = 0; u < centerData - e; u++) {
            spaces += '&nbsp;';
            console.log("Spaces U", u);
        }

        for (var g = 0; g < (2 * e - 1); g++) {
            stars += '*';
            console.log("Stars G", g);
        }

        target.innerHTML += spaces + stars + "<br>";
    }
}


function double() {
    centerData = document.getElementById("centerValue").value;
    target = document.getElementById("target");
    target.innerHTML = "";

    //top
    for (var q = 1; q <= centerData; q++) {
        var stars = "";
        var spaces = "";
        console.log("Main loop Q", q);

        for (let o = 0; o < centerData - q; o++) {
            spaces += '&nbsp;';
            console.log("Spaces O", o);
        }

        for (let e = 0; e < (2 * q - 1); e++) {
            stars += '*';
            console.log("Stars E", e);
        }

        target.innerHTML += spaces + stars + "<br>";
    }

    // Bottom
    for (var b = centerData; b >= 1; b--) {
        var stars = "";
        var spaces = "";
        console.log("Main Loop B", b);

        for (let s = 0; s < centerData - b; s++) {
            spaces += '&nbsp;';
            console.log("Spaces S", s);
        }

        for (var p = 0; p < (2 * b - 1); p++) {
            stars += '*';
            console.log("Stars P", p);
        }

        target.innerHTML += spaces + stars + "<br>";
    }

}


function point() {
    centerData = document.getElementById("centerValue").value;
    target = document.getElementById("target");
    target.innerHTML = "";

    // top
    for (var f = centerData; f >= 1; f--) {
        var stars = "";
        var spaces = "";
        console.log(" Main Loop F", f);

        for (let z = 0; z < centerData - f; z++) {
            spaces += '&nbsp;';
            console.log("Spaces Z", z);
        }

        for (var h = 0; h < (2 * f - 1); h++) {
            stars += '*';
            console.log("Stars H", h);
        }

        target.innerHTML += spaces + stars + "<br>";
    }

    // bottom
    for (var g = 1; g <= centerData; g++) {
        var stars = "";
        var spaces = "";
        console.log("Main loop G", g);

        for (let x = 0; x < centerData - g; x++) {
            spaces += '&nbsp;';
            console.log("spaces X", x);
        }

        for (let d = 0; d < (2 * g - 1); d++) {
            stars += '*';
            console.log("Stars D", d);
        }

        target.innerHTML += spaces + stars + "<br>";
    }
}


// Asscending Order 


var arr = [5, 7, 9, 8, 10, 3, 2];
// var value;
var asscendResult = document.getElementById("asscendTarget");
function asscend() {
    for (var i = 1; i < arr.length; i++) {
        // value = arr[i]

        for (var j = 0; j < arr.length - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                arr.splice(j, 0, arr[j + 1], arr[j]);
                arr.splice(j + 2, 2);
            };
        };
    };
    console.log(arr);
    asscendResult.innerHTML = arr

}

// Descending Order

var descendResult = document.getElementById("descendTarget");
function descend() {
    for (var i = 1; i < arr.length; i++) {
        // value = arr[i]

        for (var j = 0; j < arr.length - 1; j++) {

            if (arr[j] < arr[j + 1]) {
                arr.splice(j, 0, arr[j + 1], arr[j]);
                arr.splice(j + 2, 2);
            };
        };
    };
    console.log(arr);
    descendResult.innerHTML = arr

}