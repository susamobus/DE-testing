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
    DeleteTableau()
    let id = "Exp"
    var tabs = document.getElementsByClassName("defbutton") 
    if (isImplicit == false && isAdaptive == false) {
        document.getElementsByClassName("maindefbutton")[0].innerHTML = "Implicit"
        isImplicit = true
        id = "Imp"
    } else if (isAdaptive == false) {
        document.getElementsByClassName("maindefbutton")[0].innerHTML = "Adaptive (Soon)"
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
  