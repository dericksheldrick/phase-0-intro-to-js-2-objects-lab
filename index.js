// Write your solution in this file!
let employee ={
    name: "Boaz",
    street: "Kimathi",
    Age: 24
};
function updateEmployeeWithKeyAndValue(employee, key, value){
   let  newEmployee = {...employee, [key]: value };

    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
     employee[key] = value;

    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    let deletedEmployee = {...employee};
    delete deletedEmployee[key];

    return deletedEmployee;
} 
function destructivelyDeleteFromEmployeeByKey(employee, key){
    employee[key] = key;
    delete employee[key];

    return employee;
}




console.log (updateEmployeeWithKeyAndValue(employee, 'Age', '29'));
console.log(employee);
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Linda'));
console.log(employee);

// let dreamCars = {
//     car1 : 'rangerover',
//     Model : 'Sport',
//     year : '2021',
// }

// // update the new list without affecting the original list 
// function updateDreamCarList(dreamCars, key, value){
//     let updateList = {...dreamCars, [key]: value}

//     return updateList
// }
// // I have made up my mind change the list completely 
// function changeCarList(dreamCars, key,value){
//     dreamCars[key]= value;

//     return dreamCars
// }

// //I made mistake with the model for Volve, kindly delete
// function deleteCarlist (dreamCars, key){
//     let confirm = {...dreamCars}
//     delete confirm[key]
//     console.log("Are you sure about this because the process is irreversiable?")

//     return confirm
// }
// // yes, I confirm kindly delete 
// function completelyDelete(dreamCars, key){
//     delete dreamCars[key]
//     console.log("The model is successfully deleted from the card details")

//     return dreamCars
// }

// console.log (updateDreamCarList(dreamCars, 'Model', 'House'))
// console.log(dreamCars);
// console.log(changeCarList(dreamCars,'car1','Volve xc90', 'year', '2024'))
// console.log(changeCarList(dreamCars, 'year', '2024'))
// console.log(deleteCarlist(dreamCars,'Model'))
// console.log(completelyDelete(dreamCars,'Model'))