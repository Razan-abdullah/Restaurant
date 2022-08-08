let allFood=[];
var c=1;
function constructor(name,type,price){

this.foodId;
this.foodName=name;
this.Type=type;
this.Price=price;
this.creatId(c);
allFood.push(this);
printInfo(allFood);
console.log(c);
}

constructor.prototype.creatId=function(counter){ this.foodId=counter+1000;++c;};


////////////////////////////////////


function printInfo(a){

let myTable=document.getElementById("div");

console.log("hi from new function //test ");

let headers = ['Food Name', 'Type of Food', 'Price','ID'];

let table = document.createElement('table');
let headerRow = document.createElement('tr');

headers.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
});

table.appendChild(headerRow);
allFood.forEach(emp => {
    let row = document.createElement('tr');
    Object.values(emp).forEach(text => {
        let cell = document.createElement('td');
        let textNode = document.createTextNode(text);
        cell.appendChild(textNode);
        row.appendChild(cell);
    })
    table.appendChild(row);
});
myTable.appendChild(table);};






////////////////////////////////


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
