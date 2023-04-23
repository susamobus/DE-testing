var results = 0
var results2 = 0
var results3 = 0
var results4 = 0
var results5 = 0
var re = 0
window.setInterval(function(){
    document.getElementById("result").innerHTML = results
    document.getElementById("k1").innerHTML = results2
    document.getElementById("k2").innerHTML = results3
    document.getElementById("k3").innerHTML = results4
    document.getElementById("k4").innerHTML = results5
    document.getElementById("i").innerHTML = re
},50)

function g(x,y) {
    return x^2;
}

function Calculate() {
    RK(g,0,1,1,1)
}

function RK(f, x0, y0, h, n) {
    // f is the function to be solved, x0 and y0 are the initial conditions,
    // h is the step size, and n is the number of steps to take
    let x = x0;
    let y = y0;
    for (let i = 0; i < n; i++) {
      const k1 = f(x, y);
      const k2 = f(x + h / 2, y + h * k1 / 2);
      const k3 = f(x + h / 2, y + h * k2 / 2);
      const k4 = f(x + h, y + h * k3);
      results2 = k1
      results3 = k2
      results4 = k3
      results5 = k4
      re = i
      y += h * (k1/6 + k2/3 + k3/3 + k4/6);
      x += h;
    }
    results = y
}
  