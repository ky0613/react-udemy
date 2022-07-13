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

/**
 * テンプレート文字列
 */

// const name = "じゃけぇ";
// const age = 28;

// // 私の名前はじゃけぇです。年齢は28歳です。
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //　アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 *　分割代入
 */

// const myProfile = {
//   name: 'こうせい',
//   age: '29'
// }
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(message1);

// const {name, age} = myProfile
// const message2 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message2);

// const myProfile = ["こうせい", "29"];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 *　デフォルト値
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん`);
// sayHello("こうせい")
