/**
 * const,letについて
 */

/**
 * varの場合
 */

// var vall = "var宣言";
// console.log(vall);

// // var は上書き
// vall = "上書き";
// console.log(vall);

// // 再宣言
// var vall = "再宣言";
// console.log(vall);

/**
 * let
 */

// let vall2 = "let宣言";
// console.log(vall2);

// vall2 = "let上書き";
// console.log(vall2);

// let vall2 = "let再宣言";

/**
 * const
 */

// const vall3 = "const宣言";
// console.log(vall3);

// vall3 = "上書き不可"
// const vall3 = "再定義不可";

/**
 * const（OBJ）
 * オブジェクトは、プロパティの変更が可能
 */

// const val4 = {
//   name: "hoge",
//   age: 26
// };
// val4.name = "tuno";
// console.log(val4);
// val4.adress = "tokyo";

/**
 * const（配列）
 * 配列の変更が可能
 */

// const val5 = ["dog", "cat"];
// console.log(val5);
// val5[0] = "DOG";
// val5.push("bird");

/**
 * テンプレート文字列
 */
// const name = "tsuno";
// const age = 27;
const arr4 = [10, 20];
const arr5 = [30, 40];

// コピー
// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = [...arr4];
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

// const nameArr = ["田中", "山田", "安田"];
// // nameArr.map((name, index) => console.log(`${index}番目は${name}`));

// const nameNewArr = nameArr.map((name) => {
//   if (name === "安田") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(nameNewArr);

/**
 * 三項演算子
 * if/elseを書く必要がなくなる
 * ある条件を書いて「？」を書いて、trueの時：falseの時
 */
// const val1 = 1 < 0 ? "T" : "F";
// console.log(val1);

// const num = "1300";

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力して";
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100超えてる" : "100以下";
};
console.log(checkSum(1, 100));
