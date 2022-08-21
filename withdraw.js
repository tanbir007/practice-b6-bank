document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField =document.getElementById("withdraw-field");
    const withdrawAmountString= withdrawField.value;
    const newWithdrawAmount =parseFloat(withdrawAmountString)
    console.log(newWithdrawAmount,"with");
    withdrawField.value=" ";
    if (newWithdrawAmount<0) {
        alert("invalid")
        return
    }
     const previousWithdrawAmount1 =document.getElementById('withdraw-amount');
     const previousWithdrawAmountString = previousWithdrawAmount1.innerText;
     const previousWithdrawAmount =parseFloat(previousWithdrawAmountString);

     console.log(previousWithdrawAmount,"prev");

    const currentAmount = newWithdrawAmount + previousWithdrawAmount;

     previousWithdrawAmount1.innerText =currentAmount ;

     console.log(currentAmount,"currrent amou7nt");

      const balanceAmount=document.getElementById('balance-amount');

      const balanceTextString =balanceAmount.innerText
      const balanceText =parseFloat(balanceTextString)
      console.log(balanceText,"blTEXT");

      const newBalance = balanceText - newWithdrawAmount

      balanceAmount.innerText=newBalance

      console.log(newBalance,"newBLK");

     

})