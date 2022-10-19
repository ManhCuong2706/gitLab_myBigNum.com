const myBigNum = (A, B) => {
  const lenA = A.length;
  const lenB = B.length;
  const maxLen = Math.max(lenA, lenB);
  const log = [];

  let temp = 0;
  let mind = 0;
  let r = 0;
  const result = [];

  let i1 = 0;
  let i2 = 0;

  let c1 = 0;
  let c2 = 0;

  for (let i = 0; i < maxLen; i++) {
    i1 = lenA - i - 1;
    i2 = lenB - i - 1;

    c1 = i1 < 0 ? 0 : Number(A[i1]);
    c2 = i2 < 0 ? 0 : Number(B[i2]);

    temp = c1 + c2 + mind;

    log.push(`${c1} + ${c2} + ${mind} = ${temp}`);

    mind = Math.trunc(temp / 10);

    log.push(`Nhớ ${mind}`);

    r = temp % 10;
    result.unshift(r);
    log.push(`Kết quả : ${result.join('')}`);
  }
  renderLog(log);
};
