const calculateButton = document.getElementById('calculate');

const billAmountInput = document.getElementById('bill-amount');
const numberOfPeopleInput = document.getElementById('number-of-people');

const tipAmountText = document.getElementById('tip-per-person');
const totalPerPersonText = document.getElementById('total-per-person');

const radioTip = document.querySelectorAll('input[type=radio]');
const customTipInput = document.getElementById('custom-tip');


function buttonState () {
    if (billAmountInput.value !== '' && numberOfPeopleInput.value !== '') {
        calculateButton.removeAttribute('disabled');
        calculateButton.style.background = '#26C2AE';
    } else {
        calculateButton.setAttribute('disabled', true);
        calculateButton.style.background = '#0D686D';
    }
}


billAmountInput.addEventListener('input', buttonState);
numberOfPeopleInput.addEventListener('input', buttonState);


calculateButton.addEventListener('click', function() {
    const billAmount = Number(billAmountInput.value);
    // console.log(billAmount);

    const numberOfPeople = Number(numberOfPeopleInput.value);
    // console.log(numberOfPeople);

    const selectedRadioTip = document.querySelector('input[type=radio]:checked');
    console.log(selectedRadioTip);

    customTipInput.addEventListener('input', function () {
        selectedRadioTip.checked = false;
    });

    let totalTip;

    if (selectedRadioTip) {
        const tipPercent = Number(selectedRadioTip.value.slice(0,-1))/100;
        totalTip = Math.round(billAmount*tipPercent*100)/100;
        console.log(totalTip);
        
    } else if (customTipInput) {
        const customTip = Number(customTipInput.value)/100;
        totalTip = Math.round(billAmount*customTip*100)/100;
        console.log(totalTip);
    }

    const tipPerPerson = Math.round(totalTip/numberOfPeople*100)/100;
    // console.log(tipPerPerson);

    const totalBill = totalTip + billAmount;
    // console.log(totalBill);

    const billPerPerson = Math.round(totalBill/numberOfPeople*100)/100;
    // console.log(billPerPerson);

    tipAmountText.innerText = tipPerPerson;
    totalPerPersonText.innerText = billPerPerson;
})

buttonState();