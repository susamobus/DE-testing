function Fraction(input) {
    if (!input.includes('/')) {
      return input;
    }
    const parts = input.split('/');
    const numerator = Number(parts[0]);
    const denominator = Number(parts[1]);
    return numerator / denominator
  }
  
/*
  function evaluateFunction(input, x, y) {
    // Replace pi and e with their corresponding values
    input = input.replace(/pi/g, Math.PI).replace(/e/g, Math.E);
*/
    // Define regular expression to match valid operators and functions
//    const operatorRegex = /[+\-*/^()]/;
//    const functionRegex = /(sin|cos|tan|sqrt)/;
/* 
    // Split input into individual tokens
    const tokens = input.split(/(\s+|\d+\.\d*|\d+|\w+|\(|\))/).filter(token => token.trim() !== '');
  
    // Evaluate expression using recursive descent parsing
    function evaluateExpression() {
      let value = evaluateTerm();
      while (tokens.length > 0 && operatorRegex.test(tokens[0])) {
        const operator = tokens.shift();
        const right = evaluateTerm();
        if (operator === '+') {
          value += right;
        } else if (operator === '-') {
          value -= right;
        } else if (operator === '*') {
          value *= right;
        } else if (operator === '/') {
          value /= right;
        } else if (operator === '^') {
          value = Math.pow(value, right);
        }
      }
      return value;
    }
  
    // Evaluate term (either a number, a variable, or a function)
    function evaluateTerm() {
      if (tokens.length > 0 && functionRegex.test(tokens[0])) {
        return evaluateFunctionCall();
      } else if (tokens.length > 0 && tokens[0] === 'x') {
        tokens.shift();
        return x;
      } else if (tokens.length > 0 && tokens[0] === 'y') {
        tokens.shift();
        return y;
      } else {
        return parseFloat(tokens.shift());
      }
    }
  
    // Evaluate function call (including parentheses)
    function evaluateFunctionCall() {
      const functionName = tokens.shift();
      const argument = evaluateExpression();
      if (functionName === 'sin') {
        return Math.sin(argument);
      } else if (functionName === 'cos') {
        return Math.cos(argument);
      } else if (functionName === 'tan') {
        return Math.tan(argument);
      } else if (functionName === 'sqrt') {
        return Math.sqrt(argument);
      }
    }
  
    // Evaluate the entire expression
    const result = evaluateExpression();
  
    return result;
  }
*/

function EvaluateFunction(input,x,y) {
    // Replace LaTeX commands with JavaScript equivalents
    input = input.replace(/\\sqrt{(.*?)}/g, "Math.sqrt($1)");
    input = input.replace(/\\frac{(.*?)}{(.*?)}/g, "($1)/($2)");
    input = input.replace(/\\pi/g, "Math.PI");
    input = input.replace(/\\sin{(.*?)}/g, "Math.sin($1)");
    input = input.replace(/\\cos{(.*?)}/g, "Math.cos($1)");
    input = input.replace(/\\tan{(.*?)}/g, "Math.tan($1)");
    input = input.replace(/\\ln{(.*?)}/g, "Math.log($1)");
  
    // Remove brackets and add multiplication symbols
    input = input.replace(/\((.*?)\)/g, "$1");
    input = input.replace(/([a-zA-Z0-9])(\()/g, "$1*$2");
    input = input.replace(/(\))([a-zA-Z0-9])/g, "$1*$2");

    input = input.replace(/x/g, x)
    input = input.replace(/y/g, y)
    // Return the resulting JavaScript expression
    return eval(input);
  }
  
function DisplayFunction(input) {
  input = input.replace(/\\\\/g, "\\");
  input = input.replace(/\(/g, "\\left\(")
  input = input.replace(/\)/g, "\\right\)")
  return input;
}