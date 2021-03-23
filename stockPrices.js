// First Month Prices
const priceList1 = [18.93, 20.25, 17.05, 16.59, 21.09, 16.22, 21.43, 27.13, 18.62, 21.31, 23.96, 25.52, 
    19.64, 23.49, 15.28, 22.77, 23.1, 26.58, 27.03, 23.75, 27.39, 15.93, 17.83, 18.82, 21.56, 25.33, 25, 
    19.33, 22.08, 24.03]

// Second Months Prices
const priceList2 = [22.74, 22.27, 20.61, 26.15, 21.68, 21.51, 19.66, 24.11, 20.63, 20.96, 26.56, 26.67, 
    26.02, 27.20, 19.13, 16.57, 26.71, 25.91, 17.51, 15.79, 26.19, 18.57, 19.03, 19.02, 19.97, 19.04, 
    21.06, 25.94, 17.03, 15.61]


function buyAndSell(arr){
    let buyPrice = Math.max(...arr) 
    let secondBuyPrice = Math.max(...arr) 
    let sellPrice = 0;
    let profit = 0;

    // find the best and 2nd best buy prices by starting with the max value and working down

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === buyPrice){
            secondBuyPrice = buyPrice;
        } else if (arr[i] < buyPrice) {
            secondBuyPrice = buyPrice;
            buyPrice = arr[i];
        } else if (arr[i] < secondBuyPrice) {
            secondBuyPrice = arr[i];
        }
    }

    buyDate = arr.indexOf(buyPrice)
    secondBuyDate = arr.indexOf(secondBuyPrice)

    // if best buyPrice is the last day of the month
    if(buyDate === arr.length - 1){
        buyDate = secondBuyDate
        buyPrice = secondBuyPrice
    }

    // get best selling price after the buyDate
    for (let i = buyDate; i < arr.length; i++) {
        if(arr[i] > sellPrice){
            sellPrice = arr[i];
        } 
    }

    let sellDate = arr.indexOf(sellPrice)

    profit = (sellPrice - buyPrice).toFixed(2)


    // console.log(arr);
    // console.log(buyPrice);
    // console.log(secondBuyPrice);
    // console.log(buyDate);
    // console.log(secondBuyDate);
    // console.log(sellPrice);
    // console.log(sellDate);
    console.log((buyDate + 1) + "(" + buyPrice + ")" + ",", (sellDate + 1) + "(" + sellPrice + ")")
    return console.log("this will give a profit of £" + profit);
}

console.log(buyAndSell(priceList1));

