const n = document.querySelectorAll('.grid a').length;
let cols = Math.ceil(Math.sqrt(n)), bestDiff = Infinity;
for (let c = 1; c <= n; c++) {
  if (n % c === 0) {
    const diff = Math.abs(c - n / c);
    if (diff < bestDiff) { bestDiff = diff; cols = Math.max(c, n / c); }
  }
}
document.querySelector('.grid').style.gridTemplateColumns = `repeat(${cols}, 140px)`;
