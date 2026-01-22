"use strict";
// let user:{type:{name:"John",age:30};
// console.log("hello")
// console.log(user.name);
Object.defineProperty(exports, "__esModule", { value: true });
// var a=12;
//basic types in typescript
//primitive types(number,string,boolean,null,undefined,symbol,bigint)
//array
//tuple
//enum
//any,unknown,never,void
// let a:number=12;
// //array
// let b:number[]=[1,2,3,];
// //tuple
// let c:[string,number]=["hello",12];
// //enum
// enum Color{
//     Red,
//     Green,
//     Blue
// }
// Color.Green
// //any
// let d=10;
// //unknown
// let e:unknown=20;
//
//innonation
// let a:number=10;
// //interface
// interface User{
//     name:string;
//     age:number;
//     isAdmin?:boolean; //optional property
// }
//interface and type alias
//definig interface
//using interface
//extending interface
// type alias
//intersection types
//union types
//interface
// interface user{
//     name:String,
//     email:String
// }
// function abcd(obj:user){
// }
// abcd({name:"su",email:"naayks"})
//type alias
// type user={
//     name:String,
//     email:String
// }
// function abcd(obj:user){
// }
// abcd({name:"su",email:"naayks"})
//intersection types
// type user={
//     name:String,
//     email:String
// }
// type admin={
//     isAdmin:boolean
// }   
// type superUser=user & admin;
// function abcd(obj:superUser){
//     console.log(obj.name);
// }   
// abcd({name:"su",email:"naayks",isAdmin:true})
//union
// type user=string|number;
// function abcd(obj:user){
//     console.log(obj);
// }
// abcd("naayks")
// abcd(1234)
//class and object-oriented programming in typescript
// class bottle{
//     color="white";
//     volume=120;
// }
// let bottle1=new bottle();
//constructor
// class bottlemaker{
// constructor(public color:string,public volume:number){
// }
// }
// let b1=new bottlemaker("red",200);
//this keyword
// class abcd{
//     name="harsh";
//     display(){
//         console.log(this.name);
//     }
// }
//
//# sourceMappingURL=app.js.map