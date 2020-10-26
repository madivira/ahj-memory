export default function sortParam(arr, param, direction) {
  const paramTd = document.getElementsByClassName(param)[0];

  const up = '\u{2193}';
  const down = '\u{2191}';

  if (direction === 'straight') {
    if (param === 'title') {
      arr.sort((a, b) => {
        if (b[param] > a[param]) return 1;
        if (b[param] < a[param]) return -1;
        return 0;
      });
    }
    arr.sort((a, b) => b[param] - a[param]);
    paramTd.textContent += down;
  } else if (direction === 'conversely') {
    if (param === 'title') {
      arr.sort((a, b) => {
        if (b[param] > a[param]) return -1;
        if (b[param] < a[param]) return 1;
        return 0;
      });
    }
    arr.sort((a, b) => a[param] - b[param]);
    paramTd.textContent += up;
  }
  return arr;
}
