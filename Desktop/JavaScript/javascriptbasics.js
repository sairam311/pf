console.log("hello")
let a1=10;
//cannot be a keyword
//cannot start with number
//cannot contain a space or -
console.log(a1);
let interestRate;
interestRate=0.4;
console.log(interestRate)
//value of const cannot change later
let a=10
//a=20 //error since it is a const variable
console.log(typeof(a));
a="balaji"
console.log(typeof(a))
//object
let person={
    name: 'Balaji',
    age:21
};
console.log(person)
person.age="john"
console.log(person.age)
person['name']='ammu'
console.log(person.name)
console.log(typeof(person))
//lists called here as arrays
let colors=["red","green"]
console.log(colors)
//getting elements by idx
console.log(colors[0])
//arrays can hava elements of different data types
//same like lists in py
//adding element to existing array
colors[2]=5
console.group(colors[2])
console.log(typeof(colors))
//functions
function greet(name,gmail){
    console.log('good morning '+name)
    console.log("your gmail is : "+ gmail)
}
greet('ammu',"5894@gmail.com")
function square(n){
    return n*n
}
let sq=square(5)
console.log(sq)
//console.log() is also a pre-defined function
let a2="balaji",a3="dev",a4="manish"
let val=5;
val++;
console.log(val);
console.log(typeof(val))
console.log(val+a2)
//so number+string results string+string
//operators
let b=20
console.log(a2,a3,a4)
let var1=5,var2=10
a=var1,b=var2
console.log(a+b)
console.log(a-b)
console.log(a*b)//multi   
console.log(a%b)//remainder
console.log(a/b)//quotient
console.log(a**b)//power
/*these are
multi line comments*/
a=a+b  //a+=b also valid
a-=b  //valid
a*=b //valid
a%=b //vlaid
a**=b //valid
a/=b //valid
let ele1=5,ele2=5,ele3=10
ele1==ele2 //equals to return true
ele1!=ele2 //not equals to returns false
ele1>ele3 //greater than returns fasle
ele1<ele3 //less than return true
/* similarly we have >=,<= */
let str1="5" 
console.log(ele1==str1) //returns true just comparing data not data types
console.log(ele1===str1) // return false it compares data and then check for same datatype or 
// we also have !=== learn about it
// and in python && in java && in js
if (5<10 && 6<10){
    console.log("lines are executed")
}
// or in python || in java || in js
if (5<10 || 50<10){
    console.log("lines are again executed")
}
//not in python ! in java ! in js
if (!(5>10)){
    console.log("lines are again and again executed")

}
//ternary operator
//syn: expression?true:false
console.log(5<10?"heyy":"hello")
//type converion
let result;
result='3'+2;//here implicitly it will be '3'+'2'
console.log(result)
//to number type
let res;
res='4'-'2'
console.log(res) //implicitly it is like 4-2
res='4'/'2' // implicit: 4/2
res='4'*"2"// implicit 4*2
console.log(res)
/* so only for plus operator it conversts to string
    for -,/,* converrts to stirng*/
//boolean to number
res='4'-true
console.log(res) //since - '4' will be 4 and true is 1 op will be 3
res='4'+true
console.log(res) //since + operator true is converted to string
//explicit conversion
 let ch='5'
 console.log(typeof(ch))
 ch=Number(ch)
 console.log(typeof(ch))
 let b1='5',b2=10
 let res1=b1+b2 // string +string
 let res2=Number(b2)+b2 //number + number
 console.log(res1)
 console.log(res2)
 let varia=Number("anc")
 console.log(varia)
 varia=String(100)
 console.log(typeof(varia))
 varia=Number(varia)
 console.log(typeof(varia))
 let bol=true
 bol=Number(bol)
 console.log(bol)
 bol=Boolean(43564) //when 0 return false any other number returns true
 console.log(bol) 
 let num=104.34
 console.log(num)
 console.log(Number(num))
 console.log(parseInt(num)) //similar to floor(num)
 console.log(parseFloat(num))
 num=200
 console.log(num)
 console.log(Number(num))
 console.log(parseInt(num))
 console.log(parseFloat(num))
 num=200.63
 console.log(Math.floor(num));
 //string is a reference type datatype
 //same like py single,double quotes are considered as same
 let str="Hello world"
 console.log(str.length) //return length of string no need of parenthesis same like arrays of java
 console.log(str.charAt(1));//returns character at given index
 //indexing starts from 0 and left to right
console.log(str.indexOf('w'))//returns position of first occurence of given character
console.log(str.toUpperCase());//return uppercase of string
console.log(str.toLowerCase())
//str.toString()//return a string or a string object as a string
console.log()
//to represent single quote or double quotes blw string is by using backslash
/*
    \' to represent '
    \" to represent "
    \\ to represent \
    \n new line
    \t tab space
*/
//creating array can be done in 2 ways
let array=["balaji","devamsh","manish"]
let array1=new Array("pandu","ammu")
console.log(array)
console.log(array1)
//negative indexing is NOT allowed
console.log(array[0])//prints 1st element
//if statement
if (5==5){
    console.log("heyy")
}
//if else
if (5==6) console.log("equal")
else console.log("not equal")
//if else ladder
if (5>6){
    console.log("5 is greater than 6")
}else if (6>5){
    console.log("6 is greater than 5")
}else console.log("Both are equal")
//switch statement
a=5
switch(a){
    case 1:
        console.log("value of a is 1")
        break
    case 2:
        console.log("value of a is 2")
        break
    case 5:
        console.log("value of a is less than or equal to 5")
        break
    default:
        console.log("value of a is greater than 5")

}
/* points to rememer on switch statement
-> duplicate case values are not allowed
-> the data type of the variable in the switch and value of a case must be same
-> case values should be constant or a string . it cannot be a variable
-> break should be written
-> default is optional statement and can be used anywhere in switch statement
-> multuple defaults are also not allowed
*/ 

//while loop
let i=0;
while (true){
    console.log(i++);
    if (i==5){
        break
    }
}
//do while
i=0
do{
    console.log(i++)
}while (i<5)
//for loop
for(i=0;i<5;i++){
    console.log(i);
}
//continue and break
i=0
while (true){
    if (i%2==0){
        i++;
        continue;
    } 
    console.log(i);
    if (i>10) break;
    i++;
}
/* scopes
3 types block scope,global scope,function/local scope
-> let,const provide block scope
-> if a variable is decalred with var , then it can be used in whole code
*/
const constglobal=100;
let letglobal=50;
var varglobal=70;
if (1){
    console.log(constglobal)
    console.log(letglobal)
    console.log(varglobal)
    var insidevar=12;
    let insidelet=123;
    const insideconst=1234;
}
console.log(insidevar)
//console.log(insideconst) cannot accessible
//console.log(insidelet) cannot accessible
/*
function my(){
    var abc=19;
}
my()
console.log(abc);
 so even if we declare var variables inside a function
 you cannot access it outside
 if it is decaled as abc=19 then it is considered as global
 and we get op*/
 function my(){
    abc=19;
}
my()
console.log(abc);
ab=10
function pr(){
    console.log(ab)
}
pr()