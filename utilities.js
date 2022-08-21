
function getInputId(inputId) {
    const inputField = document.getElementById(inputId);
    const inputTextString = inputField.value
    const inputText = parseFloat(inputTextString)

    inputField.value = " ";

    return inputText;
}
function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementString = element.innerText
    const elementText = parseFloat(elementString);
    console.log(elementText, "element TExt");
    return elementText;
}

function setTextElementValueById(element, newValue) {
    const elementId = document.getElementById(element)
    elementId.innerText = newValue;
}
document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositInput = getInputId('deposit-field')
    //console.log(newDepositInput, 'new func');
    const previousDeposit = getElementValueById('deposit-amount');
    //console.log(previousDeposit, "pre");
    const total = newDepositInput + previousDeposit
    //console.log(total, "total ");
    //const newDepositBalance = 
    setTextElementValueById('deposit-amount', total)
    //const balanceText =
    const newBalance =getElementValueById('balance-amount');
    const newBalanceTotal = newBalance + newDepositInput
     setTextElementValueById('balance-amount',newBalanceTotal)
})
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const newWithDraw =getInputId('withdraw-field');
    console.log(newWithDraw,"draw");
    const previousWithdrawAmount =getElementValueById('withdraw-amount')
    console.log(previousWithdrawAmount,"prev withdraw ");

    const total =newWithDraw + previousWithdrawAmount
    console.log(total,"with total");

    setTextElementValueById('withdraw-amount',total)
    const previousBalance =getElementValueById('balance-amount')
    console.log(previousBalance,"pre balance");

    if (newWithDraw > previousBalance) {
        alert("You dont have sufficient balance")
        document.getElementById('withdraw-amount').innerText="00 "
        return
    }

    const newBalance = previousBalance - newWithDraw
    console.log(newBalance,"new with bLL");

    setTextElementValueById('balance-amount',newBalance)


})