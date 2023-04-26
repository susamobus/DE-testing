
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
        h = (target-x0)/10
        while (target-x > 0) {
        sum = 0
        sum2 = 0
        sum3 = 0
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
            h /= (y-y2)
        } else {
            // Increase h
            h *= (y-y2)
        }
        // y? y2? Average?
        results = y
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
  