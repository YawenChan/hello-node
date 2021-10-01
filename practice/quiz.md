###### tag: `javascript` `HW`

## event loop 作業

[Q : 作業題目](https://github.com/azole/hello-node/blob/main/practice/quiz.md)

##　程式 1: 請問以下執行結果為何？ after 會在什麼數字後印出？ 為什麼？

- 提示: 手動自己畫畫看整段程式的執行過程，call stack 的變化為何？

```javascript
function readData(idx) {
  for (let i = 0; i < 100; i++) {
    idx++;
    console.log(idx);
  }
  if (idx < 500) {
    readData(idx);
  }
}
readData(0);
console.log("after");
```

Ans 1 :

- 輸出結果 : 0, 1, 2, 3, 4, 5,...500 after

- 解說 : 因為這邊沒有要處理的需要放入 webapis 的函式，所會將每個步驟依序丟進 Stack 裡面讓她處理後 console.log 出來。
  ★ callback 函式和這邊的內容沒有關係，callback 並不影響同步和非同步。

## 程式 2: 請問以下執行結果為何？ after 會在什麼數字後印出？ 為什麼？

- 提示: 手動自己畫畫看整段程式的執行過程，call stack 的變化為何？

```javascript
function readData(idx) {
  for (let i = 0; i < 100; i++) {
    idx++;
    console.log(idx);
  }
  if (idx < 500) {
    setTimeout(function () {
      readData(idx);
    }, 0);
  }
}
readData(0);
console.log("after");
```

Ans 2 :

- 輸出結果 : 0, 1 ,2 ,3 ... 100 after 101,102,103, ...500

- 解說 : 程式碼是依序放進 stack 中的，一開始是先放 for 迴圈的東西，跑完後輸出。接下來要放進去的是 if 判斷式裡面的東西，但是這裡面的東西是屬於 Web apis 處理的，所以會將它外包出去處理。
  但 stack 還會繼續做事情，於是會處理接下來進入 stack 裡面的"after"，處理完後 Web apis 事先處理好的 setTimeout 的部分會先放在 Tesk Queue 裡，待 eventloop 檢查 Stack 裡面的東西已經處理好後，再將 Tesk queue 的東西丟進 stack 中處理。
