const fs = require("fs");


let p = new Promise((resolve, reject) => {
  fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);  // 錯誤的地方使用reject
    } else {
      resolve(data); // 正確的地方使用resolve
    }
  });
});
console.log(p); // 判斷狀態 pending -> fulfilled / reject

p.then((data) => {
  console.log("promise讀檔正確", data);
}).catch((err) => {
  console.error("promise讀檔失敗", err);
});