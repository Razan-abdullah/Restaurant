




function constructor(name,type,price){

this.foodId;
this.foodName=name;
this.Type=type;
this.Price=price;
this.creatId(c);
allFood.push(this);
allfood2.push(this);
printInfo(allFood);
console.log(c);
}

constructor.prototype.creatId=function(counter){ this.foodId=counter+1000;++c;};


////////////////////////////////////table ///////////////

function getData() {
    let retrievedData = localStorage.getItem("food");
    // console.log(retrievedData);
  
    let arrayData = JSON.parse(retrievedData);
  
    console.log(arrayData);
    //create new instances from the constructor
    if (arrayData != null) {
      //how can I prevent print an already existing element in my array
      
      //arrayData inside allDrinks array -> dont create new instance for it 
      for (let i = 0; i < arrayData.length; i++) {
        new constructor(
          arrayData[i].foodName,
          arrayData[i].Type,
          arrayData[i].Price,
          arrayData[i].foodId,
         
        );
      }
    }
    // let x = new Drink(arrayData.name, arrayData.);
  
    //for (let i = 0; i < allDrinks.length; i++) {
      //allDrinks[i].printMenu();
    //}
  
   
  }
  getData();
  function printInfo(a){

    let tab = document.getElementById('tab');
    
    if (counter===0){
    
    console.log("hi from new function //test ");
    
    let headers = ['Food Name', 'Type of Food', 'Price','ID'];
    
    let headerRow = document.createElement('tr');
    headers.forEach((headerText) => {
        ++counter;
        let header = document.createElement('th');
        header.id="headerId";
        header.textContent=headerText;
        headerRow.appendChild(header);
    });
    
    tab.appendChild(headerRow);
    /////////////////////////////////////////////////////////////////
    
    allFood.forEach((emp) => {
        let row = document.createElement('tr');
        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            cell.textContent=text;
            row.appendChild(cell);
        })
        tab.appendChild(row);
        allFood.pop();
    });
    } //end of if statment 
    
    else{
    allFood.forEach(function (emp) {
        let row = document.createElement('tr');
        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            cell.textContent = text;
            row.appendChild(cell);
        });
        tab.appendChild(row);
       allFood.pop()
    });
    }
    
    
    
    };//end of else statment ;
      