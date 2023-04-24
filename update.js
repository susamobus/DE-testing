var results = 0
var isImplicit = false;
var isAdaptive = false;
var x0 = 0;
var y0 = 0;
var h = 0;
var n = 0;
var acc = 0;
var s = 0;
var c = [];
var b = [];
var b2 = [];
var a = [];
var k = [];
var FunctionInput = "";

window.setInterval(function(){
    document.getElementById("result").innerHTML = results
},75)

function ToggleMethods() {
    let id = "Exp"
    let id2 = "Non-Adapt"
    var tabs = document.getElementsByClassName("defbutton") 
    var cells = document.getElementsByClassName("cell")
    if (isImplicit == false && isAdaptive == false) {
        document.getElementsByClassName("maindefbutton")[0].innerHTML = "Implicit"
        isImplicit = true
        id = "Imp"
    } else if (isAdaptive == false) {
        document.getElementsByClassName("maindefbutton")[0].innerHTML = "Adaptive"
        isImplicit = false
        isAdaptive = true
        id = "Adp"
        id2 = "Adapt"
    } else {
        document.getElementsByClassName("maindefbutton")[0].innerHTML = "Explicit"
        isAdaptive = false
    }
    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].id == id) {
            tabs[i].style.display = "block"
        } else {
            tabs[i].style.display = "none"
        }
    }
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].id == id2) {
            cells[i].style.display = "block"
        } else {
            cells[i].style.display = "none"
        }
    }
}

function Calculate() {
    FunctionInput = document.getElementById("FunctionInput").value
    s = Number(document.getElementById("stage").value)
    n = Number(document.getElementById("step").value)
    h = Number(document.getElementById("stepsize").value)
    x0 = Number(document.getElementById("x0").value)
    y0 = Number(document.getElementById("y0").value)
    UpdateTableau()
    RK()
}

// f = function
// x0, y0 = initial conditions
// h = step size
// n = number of steps

function RK() {
    let x = x0;
    let y = y0;
    let y2 = y0;
    let sum = 0;
    let sum2 = 0;
    let sum3 = 0;
    let e = 0;
    let n2 = n
    if (isImplicit == true) {
        n2 = n+1
    }
    for (let i = 0; i < n2; i++) {
        sum = 0
        sum2 = 0
        sum3 = 0
        e = 0
        for (let j = 0; j < s; j++) {
            let lm = j
            if (isImplicit == true) {
                lm = s+1
            }
            for (let l = 0; l < lm; l++) {
                sum += a[j][l] * k[l]
            }
            k[j] = evaluateFunction(FunctionInput,x + c[j] * h, y + h * sum)
            if (isAdaptive == true) {
                sum3 += b2[j] * j[j]
            }
            sum2 += b[j] * k[j]
        }
        y += h * sum2;
        x += h;
        if (isAdaptive == true) {
            y2 += h * sum3
            e = y - y2
            if (e > acc) {
                h += 0.1
            } else {
                h -= 0.1
            }
        }
    }
    results = y
}
  