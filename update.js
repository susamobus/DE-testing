var results = 0
window.setInterval(function(){
    document.getElementById("result").innerHTML = results
},50)

function f(x,y) {
    return x^2+y^2;
}

function Calculate() {
    RK(f,1,1,0.025,4)
}

function RK(f, x0, y0, h, n) {
    // f is the function to be solved, x0 and y0 are the initial conditions,
    // h is the step size, and n is the number of steps to take
    let x = x0;
    let y = y0;
    for (let i = 0; i < n; i++) {
      const k1 = h * f(x, y);
      const k2 = h * f(x + h / 2, y + k1 / 2);
      const k3 = h * f(x + h / 2, y + k2 / 2);
      const k4 = h * f(x + h, y + k3);
      y += (k1 + 2 * k2 + 2 * k3 + k4) / 6;
      x += h;
    }
    results = y
}
  