import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/**
 * const,letの変数宣言
 */

// var val1 = "var変数"
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数上書き"
// console.log(val1);

// var val1 = "var変数を再宣言"
// console.log(val1);

// let val2 = "let変数"
// console.log(val2);

// // let変数は上書き可能
// val2 = "let変数を上書き"
// console.log(val2);

// letは再宣言不可
// let val2 = "let変数を　再宣言"
// console.log(val2);

// const val3 = "const変数"
// console.log(val3);

// // const変数は上書きできない
// val3 = "const変数を上書き"
// console.log(val3);

// constは再宣言不可
// const val3 = "const変数を　再宣言"
// console.log(val3);

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// }
// val4.name = "jak"
// val4.address = "広島"
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat']
// val5[0] = 'bird'
// val5.push('monkey')
// console.log(val5);
