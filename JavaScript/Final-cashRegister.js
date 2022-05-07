function checkCashRegister(price, cash, cid) {
    let AMOUNT = [
      ["PENNY", .01],
      ["NICKEL", .05],
      ["DIME", .1],
      ["QUARTER", .25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100]
    ];

    let changeToGive = cash - price;
    let answer = AMOUNT.map(elem => [elem[0], 0]) // initializing answer format
    let drawerCash = cid.reduce((a, b) => (a + b[1]),0) //store TOTAL cash .toFixed(2)

    if (drawerCash === changeToGive) {
      return { status: "CLOSED", change: cid };
    } else { 
      for (let i = AMOUNT.length - 1; i >= 0; i--) {
        while (changeToGive >= AMOUNT[i][1] && cid[i][1] > 0 && changeToGive > 0 ) {
          answer[i][1] += AMOUNT[i][1] // if still owe money return 1 coin of current amount
          changeToGive -= AMOUNT[i][1] // update change to give, now less...
          cid[i][1] -= AMOUNT[i][1] // update amount left in cid[i][1] cash
          changeToGive = changeToGive.toFixed(2)
        }
      }
      if (changeToGive > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
    }

    return {status: "OPEN", change: answer.filter(elem => elem[1] > 0).reverse()}
  }
  
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));