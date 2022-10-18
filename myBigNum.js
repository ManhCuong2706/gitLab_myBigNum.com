const $ = (s) => {
  return document.querySelector(s);
};

const numA = $('#numA');
const numB = $('#numB');
const logWrap = $('#logWrap');

const btnAdd = $('#btnAdd');

const renderLog = (logData) => {
  let html = logData.map((log) => {
    return `<p>${log}</p></p>`;
  });
  logWrap.innerHTML = html.join('\n');
};

const myBigNum = (A, B) => {
  const lenA = A.length;
  const lenB = B.length;
  const log = [];

  let temp = 0;
  let mind = 0;
  let r = 0;
  const result = [];

  if (lenA > lenB) {
    let len = lenA - lenB;
    for (let i = 0; i < len; i++) {
      B = 0 + B;
    }
  } else {
    let len = lenB - lenA;
    for (let i = 0; i < len; i++) {
      A = 0 + A;
    }
  }

  if (lenA > lenB) {
    for (let i = lenA - 1; i >= 0; i--) {
      temp = Number(A[i]) + Number(B[i]) + mind;
      log.push(`${A[i]} + ${B[i]} = ${temp}`);
      mind = Math.trunc(temp / 10);
      log.push(`Nhớ ${mind}`);

      r = temp % 10;
      result.unshift(r);
      log.push(`Kết quả : ${result.join('')}`);
    }
  } else {
    for (let i = lenB - 1; i >= 0; i--) {
      temp = Number(A[i]) + Number(B[i]) + mind;
      log.push(`${A[i]} + ${B[i]} = ${temp}`);

      mind = Math.trunc(temp / 10);
      log.push(`Nhớ ${mind}`);

      r = temp % 10;
      result.unshift(r);
      log.push(`Kết quả : ${result.join('')}`);
    }
  }
  renderLog(log);
  return result.join('');
};

btnAdd.onclick = () => {
  console.log('click');
  const numAValue = numA.value;
  const numBValue = numB.value;
  myBigNum(numAValue, numBValue);
};
