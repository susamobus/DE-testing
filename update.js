var results = 0
var s = 4
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
var k1 = 0
var k2 = 0
var k3 = 0
var k4 = 0
var c = [0,0,c2,c3,c4]
var b = [0,b1,b2,b3,b4]
var a = [0,0,[a21],[a31,a32],[a41,a42,a43]]
var k = [0,k1,k2,k3,k4]

window.setInterval(function(){
    document.getElementById("result").innerHTML = results
},50)

function g(x,y) {
    return x*x;
}

function Calculate() {
    RK(g,0,1,1,1)
}
// f = function
// x0, y0 = initial conditions
// h = step size
// n = number of steps


function createTableau(s) {
    let table = document.getElementById("table");

    // Create headers row
    let headers = ["c", "a", "b"];
    let headersRow = document.createElement("tr");
    for (let h of headers) {
      let header = document.createElement("th");
      header.textContent = h;
      headersRow.appendChild(header);
    }
    table.appendChild(headersRow);

    // Create input rows for coefficients
    for (let i2 = 1; i2 <= s; i2++) {
      let row = document.createElement("tr");
      for (let j2 = 1; j2 <= 3; j2++) {
        let cell = document.createElement("td");
        let input = document.createElement("input");
        input.type = "number";
        input.min = "0";
        input.step = "0.01";
        cell.appendChild(input);
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
  }

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    let s = parseInt(document.getElementById("s").value);
    createTableau(s);
});

function RK(f, x0, y0, h, n) {
    let x = x0;
    let y = y0;
    let sum = 0;
    let sum2 = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= s; j++) {
            for (let l = 1; l < j; l++) {
                sum += a[j][l] * k[l]
            }
            k[j] = f(x + c[j] * h, y + h * sum)
            sum2 += b[j] * k[j]
        }
        y += h * sum2;
        x += h;
    }
    results = y
}
  