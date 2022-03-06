function withdraw(amount) {
  let nairaBills = [0, 0, 0];
  while (amount !== 0) {
    if (amount >= 100) {
      nairaBills[0] += 1;
      amount -= 100;
    } else if (amount < 100 && amount >= 50) {
      nairaBills[1] += 1;
      amount -= 50;
    } else if (amount < 50 && amount >= 20) {
      nairaBills[2] += 1;
      amount -= 20;
    }
  }
  return nairaBills;
}

module.exports = withdraw;
