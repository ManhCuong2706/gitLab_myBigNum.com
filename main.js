const $ = (s) => {
  return document.querySelector(s);
};

const numA = $('#numA');
const numB = $('#numB');

const btnAdd = $('#btnAdd');
const result = $('#result');

btnAdd.onclick = () => {
  console.log('click');
  const numAValue = numA.value;
  const numBValue = numB.value;
  myBigNum(numAValue, numBValue);
};
