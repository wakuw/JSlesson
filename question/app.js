//JS_lesson_Section5
//Q1
let nickname = 'はっしー';
let age = 30;
console.log('私のニックネームは' + nickname +'です。年齢は' + age +'歳です。');


//Q2
let languages = ['Javascript', 'PHP', 'Ruby', 'Python', 'Go'];
let template = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(template);


//Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);


//Q4
let playList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game','Basket Ball','Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder','The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football','Smash Bros.'],
  },
];
console.log(playList[1].favorites[1]);


//Q5
// ⁼とは「代入」
let sum =0;
for(let i =0; i<playList.length; i++){
  sum += playList[i].age;
}
let ave = sum / playList.length
console.log(ave)


//Q6
// 定義
function sayHello(){
  let hello = 'Hello'
  console.log(hello)
}
// 実行
sayHello();

const difine1 = function(){
  let sayWorld = 'world';
  console.log(sayWorld);
}
difine1();


//Q7
user.birthday = '2000-09-27';
user.sayHello = function(){
  console.log('Hello!');
}
user.sayHello()


//Q8
let calc = {
  add: function(x,y){
    let sum = x + y;
    console.log(sum)
  },
  subtract: function(x,y){
    let difference = x - y;
    console.log(difference)
  },
  multiply: function(x,y){
    let product = x * y;
    console.log(product)
  },
  divide: function(x,y){
    let quotient = x / y;
    console.log(quotient)
  }
};
calc.add(3,4);
calc.subtract(11,1);
calc.multiply(7,7);
calc.divide(5,1);


//Q9
function remainder(x,y){
  let result = x % y;
  return result;
};
let x =5;
let y = 3;

console.log(`${x}を${y}で割った余りは${remainder(x,y)}です。`)


/*Q10
スコープという変数や関数の有効範囲が決められており、、
関数の中で定義した変数はその関数の中でしか参照できないため、、
今回の場合、関数fooの外でconsole.logを実行しても
定義されていないと表示される。*/


//JS_lesson_section6
//Q1
let ramdom = Math.floor(Math.random()*10);
console.log(ramdom);


//Q2
function hello(){
  console.log(`Hello World!`);
}
setTimeout(hello,3000);


//Q3
let num = 0;
if(num > 0){
  console.log(`num is greater than 0`);
}else if (num < 0){
  console.log(`num is less than 0`);
}else{
  console.log(`num is 0`);
};


//Q4
let numbers =[];
for(let i =0; i <= 99; i++){
  numbers.push(i)
};
console.log(numbers)


//Q5
let mixed = [4,'2',5,'8','9',0,1];
for(let i =0; i<mixed.length; i++){
  let value = mixed[i];
  if(typeof value === 'number'){
    if(value % 2 === 0){
      console.log('even')
    } else{
      console.log('odd')
    }
  } else{
    console.log('not number')
  }
}