function checkCashRegister(price, cash, cid) {
  const bills = 
  {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  }
  let total_cid = 0;
  for (let element of cid) 
  {
    total_cid += element[1];
  }
  total_cid = total_cid.toFixed(2);

  let changeToGive = cash - price;
  const changeArray = [];
  if (changeToGive > total_cid) 
  {
    return { status: "INSUFFICIENT_FUNDS", change: changeArray };
  } 
  else if 
  (changeToGive.toFixed(2) === total_cid) 
  {
    return { status: "CLOSED", change: cid };
  } 
  else
  {
    cid = cid.reverse();
    for (let elem of cid) 
    {
      let temp = [elem[0], 0];
      while (changeToGive >= bills[elem[0]] && elem[1] > 0) {
        temp[1] += bills[elem[0]];
        elem[1] -= bills[elem[0]];
        changeToGive -= bills[elem[0]];
        changeToGive = changeToGive.toFixed(2);
      }
      if (temp[1] > 0) 
      {
        changeArray.push(temp);
      }
    }
  }
  if (changeToGive > 0) 
  {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return { status: "OPEN", change: changeArray};

}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
