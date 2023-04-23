var results = 0
var c2 = 1/2
var c3 = 1/2
var c4 = 1
var b1 = 1/6
var b2 = 1/3
var b3 = 1/3
var b4 = 1/6
var a21 = 1/2
var a31 = 0
var a32 = 1/2
var a41 = 0
var a42 = 0
var a43 = 1
var c = [0,0,c2,c3,c4]
var b = [0,b1,b2,b3,b4]
var a = [0,0,[a21],[a31,a32],[a41,a42,a43]]

window.setInterval(function(){
    document.getElementById("result").innerHTML = results
},50)

function g(x,y) {
    return x*x;
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
      const k2 = f(x + c[2] * h, y + h * a[2][1] * k1);
      const k3 = f(x + c[3] * h, y + h * (a[3][1] * k1 + a[3][2] * k2));
      const k4 = f(x + c[4] * h, y + h * (a[4][1] * k1 + a[4][2] * k2 + a[4][3] * k3));
      y += h * (b[1] * k1 + b[2] * k2 + b[3] * k3 + b[4] * k4);
      x += h;
    }
    results = y
}
  