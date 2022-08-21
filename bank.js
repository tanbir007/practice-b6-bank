//Deposite---withDraw

document.getElementById('deposit-btn').addEventListener('click',function(){ 
    const depositField =document.getElementById('deposit-field')
    const depositText= parseFloat(depositField.value)
    
    const depositAmount =document.getElementById('deposit-amount')
    // console.log(depositAmount,"number");
    depositField.value=" ";
if (depositText<0) {
    alert("invalid")
    return
}
   const previousDepositTotal =parseFloat(depositAmount.innerText)
    const total = previousDepositTotal +depositText
     console.log(total,"not a nan");
    
        depositAmount.innerText = total

    // if (isNaN(depositText)) {
    //     alert("valid no den")
    //     return
    // }else{
    //     const total = previousDepositTotal +depositText
    //     depositAmount.innerText = total
    // }

    const balanceAmount=document.getElementById('balance-amount');

    const balanceText =parseFloat(balanceAmount.innerText)
    
   

     const newBalance =  balanceText + depositText;

     
     console.log(newBalance,"bla amunt");

    balanceAmount.innerText =newBalance

   

   
      
    // console.log(total,"new value 💘  ");
  

})