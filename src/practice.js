/**
 * テンプレート文字列
 */
const myname = "thrl";
const age = 29;
const message = `My name is ${myname}, age is ${age}`;

/**
 * アロー関数
 */
// 従来の関数
function func1(str) {
  return str;
}
// 関数を変数化
const func2 = function (str) {
  return str;
};
// アロー関数
const func3 = (str) => {
  return str;
};
// 評価項目が一つの場合、中括弧とreturnの省力が出来る。
const func4 = (a, b) => a + b;
// 評価項目が一つで、引数も一つの場合、括弧を省略出来る。
const func5 = (a) => a * 2;
// ※アロー関数は関数の外のthisを参照できる（レキシカルスコープ）
// 関数がどのように実行されるかによってthisが変動する問題を解消出来る。

/**
 * 分割代入
 */
const myProfile = {
  myProfileName: "thr-myp",
  myProfileAge: 29,
  from: "tokyo"
};

const { myProfileName, myProfileAge, from } = myProfile;
console.log(
  `名前は${myProfileName}で、年齢は${myProfileAge}で、出身は${from}です`
);

const fruits = ["Apple", "Orange", "Grape"];
const [a, b, c] = fruits;
console.log(a);
console.log(b);
console.log(c);

/**
 * デフォルト値
 */
const sayHello = (sayHelloName = "Guest") => console.log(`Hi ${sayHelloName}`);
sayHello(); // 引数に何も指定していない場合、デフォルト値として'Guest'が適応される。
// ※デフォルト値の指定が無い場合、undefinedが引数に渡る。

/**
 * スプレッド構文
 */

const arr1 = [11, 22, 33, 44, 55];
// 以下のように配列をコピーした場合、参照渡しが発生する。
const arr2 = arr1;
// 書き換えた配列の値は、コピー元の配列arr1にも影響する。
arr2[0] = 99;
// console.log(arr1); // [99, 22, 33, 44, 55];
// console.log(arr2); // [99, 22, 33, 44, 55];

// スプレッド構文を用いた場合、参照渡しは発生しない。
const arr3 = [...arr1];
arr3[0] = 11;
// console.log(arr1);
// console.log(arr3);
// 配列結合
const arr4 = [...arr1, ...arr3];
console.log(arr4);
