
// let user:{type:{name:"John",age:30};
// console.log("hello")
// console.log(user.name);

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

//modifiers
//readonly,public,private,protected
// class user{
//     constructor(public  readonly name:string){}
//     changeName(){
//         this.name="noob";
//     }
// }
// let u1=new user("harsh");
// u1.changeName();

//OPTIONAL CHAINING AND NULLISH COALESCING

//getter and setter
// class user{
//     constructor(public _name:string,public _age:number){}
//     get name(){
//         return this._name;  
//     }
//     get age(){
//         return this._age;
//     }
//     set name(name:string){
//         this._name=name;
//     }
// }
// let u1=new user("harsh",23);

//static


//function
// function add(a:number,b:number):number{
//     return a+b;
// }
// console.log(add(2,3));
// function greet(name:string="Guest"):void{
//     console.log(`Hello,${name}`);
// }   
// greet();
// greet("Harsh");

//optional and default parameters
// function multiply(a:number,b:number=2):number{
//     return a*b;
// }
// console.log(multiply(5));
// console.log(multiply(5,3));  

//rest parameters
// function sum(...arr:number[]){
//     console.log(arr);
// }
// sum(1,2,3,4,5)

//spread operator
// function add(a:number,b:number,c:number):number{
//     return a+b+c;
// }
// let nums=[1,2,3];
// console.log(add(...nums));


//overloading
// function add(a:number,b:number):number;
// function add(a:string,b:string):string;
// function add(a:any,b:any):any{       
//     return a+b;
// }
// console.log(add(2,3));
// console.log(add("Hello ","World"));
// console.log(add(2,"3"));

//generics
function log<T>(val:T):T{
    console.log(val);
    return val;
}
log<string>("Hello");
