'use strict';
let submit = document.getElementById('submit');
let form = document.getElementById('form');
let table = document.getElementById('table');

var val = 0;
function food(val,name,type,price){
    this.id = val;
    this.name = name;
    this.type = type;
    this.price = price;
    this.render();

}
food.prototype.render = function(){
    let newRow = document.createElement('tr');
    table.appendChild(newRow);
    let newId = document.createElement('td');
    newId.textContent = this.id;
    newRow.appendChild(newId);
    let newName = document.createElement('td');
    newName.textContent = this.name;
    newRow.appendChild(newName);  
    let newType = document.createElement('td');
    newType.textContent = this.type;
    newRow.appendChild(newType);
    let newPrice = document.createElement('td');
    newPrice.textContent = this.price;
    newRow.appendChild(newPrice);
    newRow.classList.add('row');
    

}

food.id;
form.addEventListener('submit',handleSubmit);
    function handleSubmit(event){
        event.preventDefault();
        let name = event.target.foodName.value;
        let type = event.target.foodType.value;
        let price = event.target.price.value;
        let id = uniqueId();
        const newFood = new food(id,name,type,price);
    }


function uniqueId(){
    val = Math.floor(1000 + Math.random() * 9000);
    return val;
}

