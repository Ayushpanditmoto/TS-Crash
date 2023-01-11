let id:number=1;
console.log('ID:',id);
let Name:string="John";
let isPresent:boolean=true;
let arr:number[]=[1,2,3];
let arr1:Array<number>=[1,2,3];
let arr2:any[]=[1,"John",true];
let arr3:Array<any>=[1,"John",true];
//Tuple
let arr4:[number,string,boolean]=[1,"John",true];
let arr5:Array<[number,string,boolean]>=[[1,"John",true],[2,"Smith",false]];
// let arr6:[number,string,boolean][]=[[1,"John",true],[2,"Smith",false]];


// arr1.push("John");
arr1.push(4);
//Union
let pid:number|string=1;
pid="1";

//Enum
enum Color{Red=1,Orange=2,Green=3,Blue=4};
Color.Red; //0 by default
enum Color1{Red="Red",Orange="Orange",Green="Green",Blue="Blue"};

// //Object
// const user:{
//     id:number,
//     Name:String
// }={
//     id:1,
//     Name:"John"
// }

//Type Assertion
type User={
    id:number,
    Name:String
}
const user:User={
    id:1,
    Name:"John"
}

//Type Assertion
//It is used to tell the compiler that the variable is of a particular type
//it will solve this problem
// Type 'string' is not assignable to type 'number'.
let cid:any=1;
let customerId= <number>cid;
// let customerId= cid as number;

//Functions
function addNum(x:number,y:number):number{
    return x+y;
}
//Optional Parameters
function addNum1(x:number,y?:number):number{
    if(y){
        return x+y;
    }
    return x;
}

//Default Parameters
function addNum2(x:number,y:number=10):number{
    return x+y;
}

//Rest Parameters
function addNum3(...nums:number[]):number{
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    return sum;
}
//void
function log(message:string):void{
    console.log(message);
}

//Interfaces is like custom type
interface  UserInterface{
    readonly id:number,
    Name:string,
    age?:number //optional
}
const user1:UserInterface={
    id:1,
    Name:"John"
}

// u can't use interface with primitive data type you can only used in objects
// interface Point=number|string; not allowed
type Point=number|string;
const p1:Point=1;
const p2:Point="1";

//Interface with function
interface MathFunc{
    (x:number,y:number):number
}

const add:MathFunc=(x:number,y:number):number=>x+y;
// const add1:MathFunc=(x:number,y:String):number=>x+y; not allowed

//Interface with classes

console.log(id);
console.log(Name);
console.log(isPresent);
console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);

//Map
let map:Map<number,string>=new Map<number,string>();
map.set(1,"John");
map.set(2,"Smith");

let map1:Map<number,any>=new Map<number,any>();
map1.set(1,"John");

//objects
let obj:any={
    id:1,
    Name:"John"
};
obj.id=2;
obj.Name="Smith";
obj.age=30;

//Classes

interface PersonInterface {
    id: number;
    Name: string;
    register(): string;
}
class Person implements PersonInterface{
   id:number;
    Name:string;
    constructor(id:number,Name:string){
        this.id=id;
        this.Name=Name;
    }
    register(){
        return `${this.Name} is now registered`;
    }
}

const person1=new Person(1,"John");
const person2=new Person(2,"Smith");

console.log(person1.register());
console.log(person2.register());

//Subclasses
class Employee extends Person{
    position:string;
    constructor(id:number,Name:string,position:string){
        super(id,Name);
        this.position=position;
    }
}

const emp1=new Employee(1,"John","Developer");
console.log(emp1.register());

//Generics
function getArray<T>(items:T[]):T[]{
    return new Array().concat(items);
}

let numArray=getArray<number>([1,2,3,4]);
let strArray=getArray<string>(["John","Smith"]);
numArray.push(5);
strArray.push("Mark");

console.log(numArray);
console.log(strArray);



