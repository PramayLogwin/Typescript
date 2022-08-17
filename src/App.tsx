import React from 'react'

const App = () => {

  //-----------class in Ts :
  // export {}
  // class App{
  //   test(){
  //     console.log("It's working.");
  //   }
  // }

  // let a = new App;
  // a.test();

  //------------------type(number,string,boolean)
  // export{}
  // let a: number = 10.2;
  // console.log(a);

  // ------------------Array
  // export {};
  // let arr:string[] = ["TypeScript"];
  // arr.push("hello");
  // console.log(arr);

  // let arr1:number[] = [10,20];
  // arr1.push(30);
  // console.log(arr1);

  // -------------------Object

  // export {};
  //you can use interface for give a type in object
  // interface ObjectTyped {
  //   name: string;
  //   age: number;
  //   address: any;
  // }
  // or
  //you can use "any" for enter any type of data like string,object
  // let obj: any = {
  //   name: "Typescript",
  //   age: 20,
  //   address: "india",
  // };
  // obj.address = 200;
  // console.log(obj);

  //----------------union type( | )
  // => This type is use for add string or number in variable.

  // let data: (number | string | boolean) [] = [10,"Hello",true];
  // data.push(30);
  // console.log(data);


  //---------------function 

  // function add (a:number , b:number):any{
  //   return a + b;
  // }
  // console.log(add(10,20));

  //----------------Class

  // class test {

  //   name : string ;
  //   constructor(name:string) {
  //     this.name = name
  //     // console.log("object");
  //   }
  //   getName():string{
  //     return this.name;
  //     // console.log(this.name)
  //   }
  // }

  // let a = new test("hello");
  // console.log(a.getName());
  // a.test()


  // -------------Inheritance:

  // child class get a property in the parent child it's called inheritance

  // class Parent {
  //   name: string = "Typescript";
  // }
  // class Child extends Parent {
  //   getName(): string {
  //     return this.name;
  //   }
  // }
  // let a1 = new Child;
  // console.log(a1.getName());


  //----------------generics function 


  // function users<T>(data: T): T {
  //   return data
  // }
  // console.log(users("It's working"));
  // console.log(users(20));
  // console.log(users(true));
  // console.log(users({name:"Working"}));


  // enum 

  // enum = sat of value and use for function and variables.

  // enum days {
  //   mon = "mon",tue="tue",
  // }

  // function selectDay(day:days){
  //   return day
  // }

  // console.log(selectDay(days.mon))

  //----------------------symbol

  // it's primitive data type 

  //---------------------configuration file

  // it's use some feature on/off , file conversion , which ecmascript version you can use like 3,5,7 and etc, experimental features

  //---------------------------------inference

  // by default value of function or variable

  //-----------------------tuple
  // -it's use for make tuple array 

  // let arr: (number | string)[] = [20, 20, "ts",20];
  // let arr1: [number,number,string,string] = [20, 20, "ts","yes"];
  // arr1.push("working") ;   
  // console.log(arr)
  // console.log(arr1);

  //-----------------Literal type

  // --same as union type 

  // let arr: (string | number)[] = ["tcs", 20];
  // console.log(arr);

  //-------------------alias
  // ---Alias is use for give a type (multiple variable and function)

  // ==> This  method is not good
  // let a: string | number | boolean = "Ts";
  // let b: string | number | boolean = 20;
  // let c: string | number | boolean = true;

  // this method is good 

  // type varType = string | number | boolean | undefined;

  // let a: varType = 20;
  // let b: varType = "20";
  // let c: varType = true;
  // let d: varType = undefined;

  // console.log("Variable Type : " + a + " " + b + " " + c + " " + d);

  //----------------------function type :

  // function test(a:number,b:number):any {
  //   return a+b;
  // }
  // console.log(test(10,20));

  //void------------------------:

  // function does not return any type this called a void type function.

  // function test() {

  // }
  // test();


  //---------------unknown type 

  // -it's similar to any type

  // let a: unknown;
  // a = 15;
  // a = "Ts File";

  // let b: "number";
  // b = a;

  // console.log(a);
  // console.log(b);

  //--------------------------- never type

  // let var1:string = "string";

  // function test(a: number, b: number): never {
    // throw a ,b;
    // return a + b;
    // console.log("object");
  // }
  // console.log(test(10, 20));





  return (
    <>


    </>
  )
}

export default App;