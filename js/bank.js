// deposit button handler
document.getElementById('deposit-button').addEventListener('click', function () {
    //    get the amount deposited 
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmounttext = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmounttext);
    // console.log(newDepositAmount);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmounttext = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmounttext);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    previousBalanceTotalText = balanceTotal.innerText;
    previousBalanceTotal = parseFloat(previousBalanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input field
    depositInput.value = '';
})

document.getElementById('withdraw-button').addEventListener('click', function () {

    // get the amount from withdraw

    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmaountText = withdrawInput.value;
    const newWithdrawAmaount = parseFloat(newWithdrawAmaountText);
    // console.log(newWithdrawAmaount);

    // withdraw Total
    const withdrawTotal = document.getElementById('withdraw-total');
    previousWithdrawTotalText = withdrawTotal.innerText;
    previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmaount;

    withdrawTotal.innerText = newWithdrawTotal;

    // set withdraw amount to balance total
    const balanceTotal = document.getElementById('balance-total');
    previousBalanceTotalText = balanceTotal.innerText;
    previousBalanceTotal = parseFloat(previousBalanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmaount;
    balanceTotal.innerText = newBalanceTotal;


    withdrawInput.value = '';


});