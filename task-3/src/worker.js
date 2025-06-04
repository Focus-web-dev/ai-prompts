self.onmessage = function (e) {
  if (e.data === "startCalculation") {
    let t = 0;
    for (let i = 0; i < 1e8; i++) {
      t += i;
    }
    self.postMessage(t);
  }
};
