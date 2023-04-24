function Fraction(input) {
    if (!input.includes('/')) {
      return input;
    }
    const parts = input.split('/');
    const numerator = Number(parts[0]);
    const denominator = Number(parts[1]);
    return numerator / denominator
  }
  