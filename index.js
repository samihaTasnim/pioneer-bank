 document.getElementById("login-btn").addEventListener("click", function() {
   document.getElementById("login-area").style.display = "none";
   document.getElementById("transaction-area").style.display = "block";
})  

function sumAmount(id, idOfBtn) {
  let input = parseFloat(document.getElementById(idOfBtn).value);
  let prevBalance = parseFloat(document.getElementById(id).innerText); 
  let total = prevBalance + input;
  if(idOfBtn === "withdrawAmountInput" && id === "balanceAmount") {
    total = prevBalance - input;
  }
  document.getElementById(id).innerText = total;
}

document.getElementById("addDeposit").addEventListener("click", function() {

  if(document.getElementById("depositNum").value === "") {
    alert("Please add a number")
    document.getElementById("depositValue").innerText = inputValue;
    return null;
  };
  
  sumAmount("depositValue", "depositNum")
  sumAmount("balanceAmount", "depositNum")
  document.getElementById("depositNum").value = "";
})

document.getElementById("withdraw").addEventListener("click", function() {
  console.log("kala")
  sumAmount("withdrawAmount", "withdrawAmountInput")
  sumAmount("balanceAmount", "withdrawAmountInput")

  document.getElementById("withdrawAmountInput").value = "";
})
