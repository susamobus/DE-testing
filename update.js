var results = 0
var isImplicit = false;
var isAdaptive = false;
var x0 = 0;
var y0 = 0;
var h = 0;
var n = 0;
var acc = 0;
var target = 0;
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
    var tabs = document.getElementsByClassName("defbutton") 
    if (isImplicit == false && isAdaptive == false) {
        document.getElementsByClassName("maindefbutton")[0].innerHTML = "Implicit"
        isImplicit = true
        id = "Imp"
    } else if (isAdaptive == false) {
        document.getElementsByClassName("maindefbutton")[0].innerHTML = "Adaptive"
        document.getElementById("stepsizedisp").innerHTML = "Target: "
        document.getElementById("stepsdisp").innerHTML = "Threshold: "
        isImplicit = false
        isAdaptive = true
        id = "Adp"
    } else {
        document.getElementsByClassName("maindefbutton")[0].innerHTML = "Explicit"
        document.getElementById("stepsizedisp").innerHTML = "Stepsize: "
        document.getElementById("stepsdisp").innerHTML = "Steps: "
        isAdaptive = false
    }
    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].id == id) {
            tabs[i].style.display = "block"
        } else {
            tabs[i].style.display = "none"
        }
    }
}

function Calculate() {
    FunctionInput = document.getElementById("FunctionInput").value
    s = Number(document.getElementById("stage").value)
    if (isAdaptive == true) {
        acc = Number(document.getElementById("stepsize").value)
        target = Number(document.getElementById("step").value)
    } else {
        n = Number(document.getElementById("step").value)
        h = Number(document.getElementById("stepsize").value)
    }
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
    let n2 = n
    if (isAdaptive == true) {
        while (target-x > 0) {
        sum = 0
        sum2 = 0
        sum3 = 0
        e = 0
        for (let j = 0; j < s; j++) {
            for (let l = 0; l < j; l++) {
                sum += a[j][l] * k[l]
            }
            k[j] = evaluateFunction(FunctionInput,x + c[j] * h, y + h * sum)
            sum3 += b2[j] * j[j]
            sum2 += b[j] * k[j]
        }
        }
        y += h * sum2;
        y2 += h * sum3
        x += h;
        if (y-y2 >= acc) {
            // Decrease h
        } else {
            // Increase h
        }
    } else {
    if (isImplicit == true) {
        n2 = n+1
    }
    for (let i = 0; i < n2; i++) {
        sum = 0
        sum2 = 0
        for (let j = 0; j < s; j++) {
            let lm = j
            if (isImplicit == true) {
                lm = s+1
            }
            for (let l = 0; l < lm; l++) {
                sum += a[j][l] * k[l]
            }
            k[j] = evaluateFunction(FunctionInput,x + c[j] * h, y + h * sum)
            sum2 += b[j] * k[j]
        }
        y += h * sum2;
        x += h;
    }
    results = y
}
}
  