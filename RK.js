
// f = function
// x0, y0 = initial conditions
// h = step size
// n = number of steps

function RK() {
    let x = x0;
    let y = y0;
    let y2 = y0;
    if (isAdaptive == true) {
        if (isImplicit == true) {
            AdaptiveRK(x,y,y2)
        } else {
            AdaptiveRK(x,y,y2)
        }
    } else {
        if (isImplicit == true) {
            NonAdaptiveRK(x,y,h,n + 1)
        } else {
            NonAdaptiveRK(x,y,h,n)
        }
    }
}


function NonAdaptiveRK(x,y,h,n) {
    let sum;
    let sum2;
    for (let i = 0; i < n; i++) {
        sum = 0
        sum2 = 0
        for (let j = 0; j < s; j++) {
            let lm = j
            if (isImplicit == true) {
                lm = s + 1
            }
            for (let l = 0; l < lm; l++) {
                sum += a[j][l] * k[l]
            }
            k[j] = evaluateFunction(FunctionInput, x + c[j] * h, y + h * sum)
            sum2 += b[j] * k[j]
        }
        y += h * sum2;
        x += h;
    }
    results = y
}

function AdaptiveRK(x,y,y2) {
    let sum;
    let sum2;
    let sum3;
    h = (target - x0) / 10
    while (target - x > 0) {
        sum = 0
        sum2 = 0
        sum3 = 0
        for (let j = 0; j < s; j++) {
            let lm = j
            if (isImplicit == true) {
                lm = s + 1
            }
            for (let l = 0; l < lm; l++) {
                sum += a[j][l] * k[l]
            }
            k[j] = EvaluateFunction(FunctionInput, x + c[j] * h, y + h * sum)
            sum3 += b2[j] * k[j]
            sum2 += b[j] * k[j]
        }
        y += h * sum2;
        y2 += h * sum3
        x += h;
        h = UpdateStepsize(y,y2)
    }
    results = y
}

function UpdateStepsize(y,y2) {
    let stepsize2 = Math.sqrt(acc / (2 * Math.abs(y - y2)))
    if (stepsize2 < 0.3) {
        stepsize2 = 0.3
    } else if (stepsize2 > 2) {
        stepsize2 = 2
    }
    return 0.9 * h * stepsize2
}