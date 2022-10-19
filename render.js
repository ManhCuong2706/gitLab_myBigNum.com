const renderLog = (logData) => {
  let html = logData.map((log) => {
    return `<p>${log}</p></p>`;
  });
  logWrap.innerHTML = html.join('\n');
};
