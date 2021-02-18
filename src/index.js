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
const name = "tsuno";
const age = 27;

// テンプレート文字列をつかう
const message = `私の名前は${name}です。年齢は${age}さいです。`;
console.log(message);
