const alfy = require('alfy');

//Get the coins from coingecko
const data = await alfy.fetch("https://api.coingecko.com/api/v3/search?locale=en");

const coins = data.coins;

const items = alfy
  .inputMatches(coins, "symbol")
	.map(element => ({
		title: element.name + " (" + element.symbol + ")",
		subtitle: element.symbol,
    arg: "https://www.coingecko.com/en/coins/" + element.id,
    //icons need to be local files, so proving a URL wont work
    //icon: {
      //path: "img/bitcoin.png"
    //}
  }));

alfy.output(items);
