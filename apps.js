let allFood=[];
var c=1;
function constructor(name,type,price){

this.foodName=name;
this.Type=type;
this.Price=price;

this.creatId=function(counter){ this.foodId=counter+1000;++c;};


this.creatId(c);

console.log(`from constructor : price ${this.Price}`);
console.log(this.foodId);
console.log(this.Type);
console.log(this.foodName);
allFood.push(this);
console.table(this);



}

constructor.prototype.print=function(this){

    v
        for(var p in o){
            console.log(p);
            }
        
    }
    

}

let form1 =document.getElementById("form");
form1.addEventListener("submit",handleSubmit);
function handleSubmit(event)
{
event.preventDefault();
let Name=event.target.name.value;
let type=event.target.foodType.value;
let price=event.target.price.value;
/*console.log(Name);
console.log(type);
console.log(price);
*/
let a=new constructor(Name,type,price);

}
/*
let a=new constructor("razan","foos",10.0);
let form=document.getElementById("form");
let b=new constructor ("sara","khara",30);
*/
