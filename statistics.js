"use strict";
let table = document.getElementById("table");

function render() {
  for (let i = 0; i < obj.length; i++) {
    let j = obj[i];
    let newRow = document.createElement("tr");
    table.appendChild(newRow);
    let newId = document.createElement("td");
    newId.textContent = j.id;
    newRow.appendChild(newId);
    let newName = document.createElement("td");
    newName.textContent = j.name;
    newRow.appendChild(newName);
    let newType = document.createElement("td");
    newType.textContent = j.type;
    newRow.appendChild(newType);
    let newPrice = document.createElement("td");
    newPrice.textContent = j.price;
    newRow.appendChild(newPrice);
    console.log(obj[i].type);
  }
}
let arrayData = [];
let obj = [];
// function getData(){
//     var retrieveData = localStorage.getItem("allFoods");
//     var newData = JSON.parse(retrieveData);
//     // arr.push(newData);
//     return newData;
// }

// let obj = [];
// obj.push(getData());
// console.log(obj);
function getData() {
  let retrievedData = localStorage.getItem("foods");

  arrayData = JSON.parse(retrievedData);
  return arrayData;
}
obj = getData();
render();
