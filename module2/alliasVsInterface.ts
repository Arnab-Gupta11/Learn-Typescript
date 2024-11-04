{
  //Function
  type add1 = (num1: number, num2: number) => number;
  // const add: add1 = (num1, num2) => num1 + num2;
  // let add: add1 = function (num1, num2) {
  //   return num1 + num2;
  // };
  interface add2 {
    (num1: number, num2: number): number;
  }
  const add: add2 = (num1, num2) => num1 + num2;
  console.log(add(5, 5));

  //Array
  // type Fruits = string[];
  interface Fruits {
    [index: number]: string;
  }
  const fruits: Fruits = ["Apple", "Orange", "Banana", "lichi"];
}
