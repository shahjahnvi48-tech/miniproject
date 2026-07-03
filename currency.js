function convert(){

    let amount = Number(document.getElementById("amount").value);
    let from = Number(document.getElementById("from").value);
    let to = Number(document.getElementById("to").value);

    if(amount <= 0){
        alert("Please enter a valid amount.");
        return;
    }

    // Convert to INR first
    let inr = amount * from;

    // Convert INR to selected currency
    let result = inr / to;

    document.getElementById("result").innerHTML =
    "Converted Amount: " + result.toFixed(2);
}