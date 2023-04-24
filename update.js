var results = 0
var test2 = "loading"
var x0 = 0;
var y0 = 0;
var h = 0;
var n = 0;
var s = 0;
var c = [];
var b = [];
var a = [];
var k = [];

window.setInterval(function(){
    document.getElementById("result").innerHTML = results
    document.getElementById("test1").innerHTML = test2
    document.getElementById("test2").innerHTML = k
},75)

function g(x,y) {
    return x*x;
}

function Calculate() {
    s = Number(document.getElementById("stage").value)
    n = Number(document.getElementById("step").value)
    h = Number(document.getElementById("stepsize").value)
    x0 = Number(document.getElementById("x0").value)
    y0 = Number(document.getElementById("y0").value)
    RK(g)
}
// f = function
// x0, y0 = initial conditions
// h = step size
// n = number of steps

function RK(f) {
    let x = x0;
    let y = y0;
    let sum = 0;
    let sum2 = 0;
    for (let i = 0; i < n; i++) {
        sum = 0
        sum2 = 0
        for (let j = 0; j < s; j++) {
            for (let l = 0; l < j; l++) {
                sum += a[j][l] * k[l]
            }
            k[j] = f(x + c[j] * h, y + h * sum)
            sum2 += b[j] * k[j]
        }
        y += h * sum2;
        test2 = y
        x += h;
    }
    results = y
}
  