function fib(n: number): number {
  // Mathematical solution by solving recurrence relation equation
  const SQRT_FIVE = Math.sqrt(5);
  const PHI = (1 + SQRT_FIVE) / 2;
  return (1 / SQRT_FIVE) * (PHI ** n - (1 / SQRT_FIVE) * (1 - PHI) ** n);
}

function fibRec(n: number): number {
  // Recursive solution
  if (n < 2) return n;

  return fibRec(n - 1) + fibRec(n - 2);
}

// Memo solution
function memoizer(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) return cache[args];

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n <= 1) return n;

  return fibMemo(n - 1) + fibMemo(n - 2);
}
const fibMemo = memoizer(slowFib);
