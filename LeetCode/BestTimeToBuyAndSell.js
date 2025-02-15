var maxProfit = function(prices) {
    let profit = 0
    let min = prices[0]
    for(let i = 1 ; i< prices.length ; i++){
        let dif = prices[i] - min
        if(dif < 0){
            min = prices[i]
            console.log("min",min)
        } 
        if (dif > 0 && dif > profit){
            profit = dif
            console.log("profit",profit)
        }
    }
    console.log(profit)
};

maxProfit([7,1,5,3,6,4])