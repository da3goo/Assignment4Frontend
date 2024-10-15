
//Task 2

function start(){
    let taskInput = document.getElementById("taskInput").value;
    if (taskInput.trim() == "") {
        alert("You must type something");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskInput;

    
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    

    
    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    
    li.appendChild(deleteButton);

    
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    
    document.getElementById("taskList").appendChild(li);

   
    document.getElementById("taskInput").value = "";
}

//practice 
function start1(){
    let taskInput = document.getElementById('taskInput1').value;
    if (taskInput.trim()  == "") {
        alert("Type something!!!");
        return ;
    }

    let li = document.createElement("li");
    li.textContent = taskInput;
    document.getElementById('taskList1').appendChild(li);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    li.appendChild(deleteButton);
    

    deleteButton.addEventListener("click" , function(){
        li.remove();
    });
    

    
    li.addEventListener("click", function(){
        li.classList.toggle('completed');
    });

    document.getElementById('taskInput1').value = ""; 
}

//task 4



document.getElementById("taskInput").addEventListener("keydown", function(event) {
    
    if (event.key == "Enter") {
        start();
    }
});




function clear1(){
    document.getElementById('number1').value = "";
    document.getElementById('number2').value = "";
    document.getElementById('calcRes').innerHTML = "";

}

function basicCalculations(index){
    let a =+document.getElementById('number1').value;
    let b =+document.getElementById('number2').value;
    if (a == "" || b == ""){
        document.getElementById('calcRes').innerHTML = "Enter nums!!!";
        document.getElementById('calcRes').style.color = 'red';
        return;
    }

    if(index == 1){
        document.getElementById('calcRes').innerHTML = a + b;
    }
    else if (index == 2){
        document.getElementById('calcRes').innerHTML = a - b;
    }
    else if (index == 3){
        document.getElementById('calcRes').innerHTML = a * b;
    }
    else if ( index == 4){
        document.getElementById('calcRes').innerHTML = a / b;
    }
}

function plusing(){
    basicCalculations(1);
}
function minus(){
    basicCalculations(2);
}
function multiplication(){
    basicCalculations(3);
}
function division(){
    basicCalculations(4);
}


//Task 3

function sortNums(){
    let inputNums = document.getElementById('numbers').value;
    let order = document.getElementById('order').value;

    let numberArr = inputNums.split(',');
    for (let i=0 ; i<numberArr.length;i++){
        numberArr[i] = numberArr[i].trim();
    }
    if (numberArr.some(isNaN)){
        document.getElementById('resArr').textContent = "Enter valid numbers";
        return ;
    }

    numberArr = numberArr.map(Number);
    if ( order == "ascending"){
        numberArr.sort();
    }
    else if(order == "descending"){
        numberArr.sort();
        numberArr.reverse();
    }

    document.getElementById('resArr').textContent = numberArr;

}

//Task 5
function taxCalculate(){
    let price = document.getElementById('price').value;
    if (price == "") {
        alert("Enter valid price!");
    }

    let tax;
    if (price > 10000) tax = 0.25;
    if (price > 5000 && price < 10000) tax = 0.2;
    if (price < 5000) tax = 0.15
    document.getElementById('resTax').innerHTML = price * tax ;
}
