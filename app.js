// pin generatePin()
function generatePin() {
    function getPin() {
        const pin = Math.floor(Math.random() * 10000);
        const newPin = pin + '';
        if (newPin.length == 4) {
            return pin;
        } else {
            return getPin();
        }

    }

    document.getElementById('inputNumber').value = getPin();
}
// calculator part bubble use

document.getElementById('keys').addEventListener('click', function (event) {
    const keyValue = event.target.innerHTML;
    const numberValue = document.getElementById('number');
    if (isNaN(keyValue)) {
        if (keyValue == 'C') {
            numberValue.value = '';
        } else if (keyValue == '&lt;') {
            numberValue.value = numberValue.value.slice(0, -1);
        }
    } else {

        numberValue.value = numberValue.value + keyValue;
    }

});


// submit error and success massing

document.getElementById('sublite-btn').addEventListener('click', function () {
    const randomValue = document.getElementById('inputNumber').value;
    const myInputValue = document.getElementById('number').value;

    // error and success
    const errorMassage = document.getElementById('error');
    const successMassage = document.getElementById('success');

    if (randomValue == myInputValue) {
        successMassage.style.display = "block";
        errorMassage.style.display = "none";
    } else {
        successMassage.style.display = "none";
        errorMassage.style.display = "block";
    }

});