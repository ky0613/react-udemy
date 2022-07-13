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

/**
 *　 スプレッド構文
 */

// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1); => [1,2]
// console.log(...arr1); => 1 2

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1])
// sumFunc(...arr1)

// 配列をまとめて受け取る
// const arr2 = [1,2,3,4,5]
// const [num1, num2, ...arr3] = arr2
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー,結合
// const arr4 = [10, 20]
// const arr5 = [30, 40]

// const arr6 = [...arr4]
// arr4[0] = 100
// console.log(arr6);

// const arr7 = [...arr4, ...arr5]
// console.log(arr7);

// const arr8 = arr4
// console.log(arr8);
// arr8[0] = 100
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */

// const nameArr = ["中田", "山田", "こうせい"];
//  for (let index = 0; index < nameArr.length; index++){
//    console.log(`${index + 1}番目は，${nameArr[index]}です。`);
//  }

// const nameArr2 = nameArr.map((name) => name)
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は，${name}です。`))

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => num % 2 === 0)
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "こうせい") {
//     return name
//   }　 else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */

// ある条件　? 条件がtrueのとき : 条件がfalseのとき
// const val1 = 1 > 0 ? "trueです" : "false";
// console.log(val1);

// const num = 1300
// console.log(num.toLocaleString())

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください'
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です'
// }

// console.log(checkSum(50, 60));

/**
 * 論理演算子を本当の意味を知ろう
 */

//  const flag1 = true
//  const flag2 = false

//  if (flag1 || flag2) {
//    console.log("1か２はtrueになります");
//  }
//  if (flag1 && flag2) {
//    console.log("1も２もtrueになります");
//  }

// || は左側がfalseとなるとき右側を返す
// 左側から判定していってtrueのものが見つかったらそれを返す
// const num = null
// const fee = num || true ||"金額未設定です"
// console.log(fee);

// && は左側がtrueなら右側を返す
// 左側から判定していってfalseがあればそれを返す
// すべてtrueだったら一番最後のものを返す
// const num1 =  100
// const fee2 = num1 && 'なにか設定されました' && '最後まできたね'
// console.log(fee2);
