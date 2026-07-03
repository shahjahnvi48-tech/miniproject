let total = 0;

function addExpense(){

    let expense = document.getElementById("expense").value;
    let amount = document.getElementById("amount").value;

    if(expense=="" || amount==""){
        alert("Please fill all fields");
        return;
    }

    amount = Number(amount);

    total += amount;
    document.getElementById("total").innerHTML = total;

    let li = document.createElement("li");

    li.innerHTML = `
        <span>${expense} - ₹${amount}</span>
        <button class="delete">Delete</button>
    `;

    li.querySelector(".delete").addEventListener("click", function(){
        total -= amount;
        document.getElementById("total").innerHTML = total;
        li.remove();
    });

    document.getElementById("list").appendChild(li);

    document.getElementById("expense").value="";
    document.getElementById("amount").value="";
}