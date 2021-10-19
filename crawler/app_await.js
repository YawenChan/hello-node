const axios = require("axios");

let stockCode = "3008";
let today = "20211017";
let format = "json";

async function StockData(stockCode, today, format) {
  try{
      let res = await axios.get(
          "https://www.twse.com.tw/exchangeReport/STOCK_DAY",{
              params: {
                  response: format,
                  date: today,
                  stockNo: stockCode,
                },
          }
      );
      console.log(res.data)
  } catch(err){
      console.log(err);
  }
}
StockData(stockCode, today, format);

// 參考同學的另一種寫法
// let stockData = axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
//   params: {
//     response: format,
//     date: today,
//     stockNo: stockCode,
//   },
// });

// (async () => {
//   try {
//     let show = await stockData;
//     console.log(show.data);
//   } catch (e) {
//     console.error(e);
//   }
// })();