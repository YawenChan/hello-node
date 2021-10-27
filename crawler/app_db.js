const axios = require("axios");

let stockCode = "3008";
let today = "20211017";
let format = "json";

const mysql = require("MySQL")

var connection = mysql.createConnection({
  host:"localhost",
  user:"tester",
  database:"stocker"
})


axios
  .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
    params: {
      response: format,
      date: today,
      stockNo: stockCode,
    },
  })
  .then((res) => {
    // HTTP response
    console.log(res.data);
  })
  .catch((e) => {
    console.error("發生錯誤", e);
  });