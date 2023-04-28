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

function ChangeMethod() {
    DeleteTableau()
    isAdaptive = document.getElementById("AdaptiveInput").checked;
    isImplicit = document.getElementById("ImplicitInput").checked
    if (isAdaptive == true) {
        document.getElementById("stepsizedisp").innerHTML = "Target: "
        document.getElementById("stepsdisp").innerHTML = "Threshold: "
        Tab("defbutton","Adp")
    } else {
        document.getElementById("stepsizedisp").innerHTML = "Stepsize: "
        document.getElementById("stepsdisp").innerHTML = "Steps: "
        Tab("defbutton","Exp")
    }
    if (isImplicit == true) {
        Tab("defbutton","Imp")
    } else {
        Tab("defbutton","Exp")
    }
}

function Tab(name, id) {
    var tabs = document.getElementsByClassName(name) 
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
  