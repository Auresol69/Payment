const contentDiv = document.getElementById('content');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const paymentInfo = {};

// Content
const paymentData = [
    `
        <div class="payment__option" id="payment__option">
            <h2>How would you like to pay?</h2>
            <br>
            <label>
                <input type="radio" name="payment" value="Momo"> Momo
            </label>
            <label>
                <input type="radio" name="payment" value="ATM"> ATM
            </label>
            <label>
                <input type="radio" name="payment" value="Cash"> Cash
            </label>
        </div>
        <div class="payment__information" id="payment__information">
        </div>
    `,
    `<div id="locat-delivery">
            <h2>Where would you like to delivery?</h2>
            <label for="location">Location delivery</label>
            <br>
                <input type="text" id="location" title="Please enter your location" placeholder="123/A Hau Giang Street, P11, Q6, TP.HCM">
        </div>`,
    `<div class="receipt-container">
    <h2>Your Receipt</h2>
    <p>Thank you for your purchase!</p>
    <div id="payment-info"></div>
</div>
`
];

let currentIndex = 0;

function updateContent() {
    contentDiv.innerHTML = paymentData[currentIndex];

    const radios = document.getElementsByName('payment');

    radios.forEach(radio => {
        radio.removeEventListener('change', handleRadioChange);
    });

    radios.forEach(radio => {
        radio.addEventListener('change', handleRadioChange);
    });
}

let currentMethod = '';

function handleRadioChange(event) {
    const options = document.getElementById('payment__information');

    options.innerHTML = '';
    options.classList.remove('height-transition', 'show');
    options.style.height = 0;
    currentMethod = event.target.value;
    switch (currentMethod) {
        case 'Momo':
            options.innerHTML = `
                        <div class="payment__option__item">
                            <label for="momo_phone">Phone number</label>
                            <input type="text" name="momo_phone" id="momo_phone" inputmode="numeric" pattern="[0-9]*"
                                title="Please enter Phone number" placeholder="Number" required
                                oninput="this.value = this.value.replace(/[^0-9]/g,'')">
                        </div>
                        <div class="payment__option__item">
                            <label for="momo_name">Name</label>
                            <input type="text" name="momo_name" id="momo_name" title="Please enter Name" placeholder="Name" required>
                        </div>
                        <div class="payment__option__item">
                            <label for="momo_pin">Pin code</label>
                            <input type="text" name="momo_pin" id="momo_pin" inputmode="numeric" pattern="[0-9]*"
                                title="Please enter Pin code" placeholder="******" required
                                oninput="this.value = this.value.replace(/[^0-9]/g,'')" maxlength="6">
                        </div>
                    `;
            break;

        case 'ATM':
            options.innerHTML = `
                        <div class="payment__option__item">
                            <label for="atm_card_number">Card number</label>
                            <input type="text" inputmode="numeric" name="atm_card_number" id="atm_card_number" pattern="[0-9]*"
                                title="Please enter Card number" placeholder="Card number" required
                                oninput="this.value = this.value.replace(/[^0-9]/g, '')">
                        </div>
                        <div class="payment__option__item">
                            <label for="atm_expired_date">Expired date</label>
                            <input type="text" inputmode="numeric" name="atm_expired_date" id="atm_expired_date" pattern="[0-9]*"
                                title="Please enter Expired date" placeholder="MM/YY" required
                                oninput="this.value = this.value.replace(/[^0-9/]/g, '')" maxlength="5">
                        </div>
                        <div class="payment__option__item">
                            <label for="atm_cvc">CVC</label>
                            <input type="text" name="atm_cvc" id="atm_cvc" inputmode="numeric" pattern="[0-9]*"
                                title="Please enter CVC" placeholder="CVC" required
                                oninput="this.value = this.value.replace(/[^0-9]/g, '')" maxlength="4">
                        </div>
                        <div class="payment__option__item">
                            <label for="atm_phone">Phone number</label>
                            <input type="text" name="atm_phone" id="atm_phone" inputmode="numeric" pattern="[0-9]*"
                                title="Please enter Phone number" placeholder="Number" required
                                oninput="this.value = this.value.replace(/[^0-9]/g,'')">
                        </div>
                        <div class="payment__option__item">
                            <label for="atm_pin">Pin code</label>
                            <input type="text" name="atm_pin" id="atm_pin" inputmode="numeric" pattern="[0-9]*"
                                title="Please enter Pin code" placeholder="******" required
                                oninput="this.value = this.value.replace(/[^0-9]/g,'')" maxlength="6">
                        </div>
                        <div class="payment__option__item">
                            <label for="atm_name">Name</label>
                            <input type="text" name="atm_name" id="atm_name" title="Please enter Name" placeholder="Name" required>
                        </div>
                    `;
            break;

        case 'Cash':
            options.innerHTML = `
                        <div class="payment__option__item">
                            <label for="cash_phone">Phone number</label>
                            <input type="text" name="cash_phone" id="cash_phone" inputmode="numeric" pattern="[0-9]*"
                                title="Please enter Phone number" placeholder="Number" required
                                oninput="this.value = this.value.replace(/[^0-9]/g,'')">
                        </div>
                        <div class="payment__option__item">
                            <label for="cash_name">Name</label>
                            <input type="text" name="cash_name" id="cash_name" title="Please enter Name" placeholder="Name" required>
                        </div>
                        <div class="payment__option__item">
                            <label for="cash_amount">Amount</label>
                            <input type="text" inputmode="numeric" name="cash_amount" id="cash_amount" pattern="[0-9]*"
                                title="Please enter Amount" placeholder="Amount" required
                                oninput="this.value = this.value.replace(/[^0-9]/g, '')">
                        </div>
                        <div class="payment__option__item">
                            <label for="cash_note">Note (optional)</label>
                            <input type="text" name="cash_note" id="cash_note" title="Enter Note" placeholder="Note (optional)">
                        </div>
                    `;
            break;
        default:
            options.innerHTML = '';
            break;
    }

    // Cập nhật chiều cao
    requestAnimationFrame(() => {
        options.classList.add('height-transition');
        const height = options.scrollHeight + 'px';
        options.style.height = height;
        options.classList.add('show');
    });
}

function saveDataToLocalStorage() {
    const paymentMethod = document.querySelector('input[name="payment"]:checked');
    if (paymentMethod) {
        paymentInfo.method = paymentMethod.value;

        switch (paymentInfo.method) {
            case 'Momo':
                paymentInfo.phone = document.getElementById('momo_phone').value;
                paymentInfo.name = document.getElementById('momo_name').value;
                paymentInfo.pin = document.getElementById('momo_pin').value;
                break;
            case 'ATM':
                paymentInfo.cardNumber = document.getElementById('atm_card_number').value;
                paymentInfo.expiredDate = document.getElementById('atm_expired_date').value;
                paymentInfo.cvc = document.getElementById('atm_cvc').value;
                paymentInfo.phone = document.getElementById('atm_phone').value;
                paymentInfo.pin = document.getElementById('atm_pin').value;
                paymentInfo.name = document.getElementById('atm_name').value;
                break;
            case 'Cash':
                paymentInfo.phone = document.getElementById('cash_phone').value;
                paymentInfo.name = document.getElementById('cash_name').value;
                paymentInfo.amount = document.getElementById('cash_amount').value;
                paymentInfo.note = document.getElementById('cash_note').value;
                break;
        }
    }
    if (currentIndex === 1) { // Trang nhập địa chỉ
        const locationInput = document.getElementById('location');
        paymentInfo.location = locationInput ? locationInput.value : ''; // Kiểm tra nếu trường có tồn tại
    }

    localStorage.setItem('paymentInfo', JSON.stringify(paymentInfo));
    console.log('Dữ liệu đã được lưu:', paymentInfo);
}

function getPaymentInfoFromLocalStorage() {
    const storedPaymentInfo = localStorage.getItem('paymentInfo');
    return storedPaymentInfo ? JSON.parse(storedPaymentInfo) : null;
  }

function clearData() {
    getPaymentInfoFromLocalStorage();
    const momoPhone = document.getElementById('momo_phone');
    const momoName = document.getElementById('momo_name');
    const momoPin = document.getElementById('momo_pin');
    const atmCardNumber = document.getElementById('atm_card_number');
    const atmExpiredDate = document.getElementById('atm_expired_date');
    const atmCvc = document.getElementById('atm_cvc');
    const atmPhone = document.getElementById('atm_phone');
    const atmPin = document.getElementById('atm_pin');
    const atmName = document.getElementById('atm_name');
    const cashPhone = document.getElementById('cash_phone');
    const cashName = document.getElementById('cash_name');
    const cashAmount = document.getElementById('cash_amount');
    const cashNote = document.getElementById('cash_note');
    
    if (currentIndex === 1){
        for (let key in paymentInfo) {
            delete paymentInfo[key];
        }
        localStorage.removeItem('paymentInfo');
        if (momoPhone) momoPhone.value = '';
        if (momoName) momoName.value = '';
        if (momoPin) momoPin.value = '';
        if (atmCardNumber) atmCardNumber.value = '';
        if (atmExpiredDate) atmExpiredDate.value = '';
        if (atmCvc) atmCvc.value = '';
        if (atmPhone) atmPhone.value = '';
        if (atmPin) atmPin.value = '';
        if (atmName) atmName.value = '';
        if (cashPhone) cashPhone.value = '';
        if (cashName) cashName.value = '';
        if (cashAmount) cashAmount.value = '';
        if (cashNote) cashNote.value = '';
    }
    
    if (currentIndex===2) {
        delete paymentInfo.location;
        const locationInput = document.getElementById('location');
        if (locationInput) locationInput.value = '';
    }


    console.log('Dữ liệu đã được xóa');
    console.log('Dữ liệu còn lại:', paymentInfo);
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        clearData();
        currentIndex--;
        updateContent();
        notShowInfo();
    }
    console.log(currentIndex);
});

nextButton.addEventListener('click', () => {
        if (currentIndex < paymentData.length - 1) {
            saveDataToLocalStorage();
            currentIndex++;
            updateContent();
            if (currentIndex === 2)
            showInfo();
    }
    console.log(currentIndex);
});

function showInfo() {
    const storedPaymentInfo = localStorage.getItem('paymentInfo');
    const paymentInfo = storedPaymentInfo ? JSON.parse(storedPaymentInfo) : [];
    const paymentInfoDiv = document.getElementById('payment-info');
    switch (paymentInfo.method) {
        case 'Momo':
            paymentInfoDiv.innerHTML = `name: ${paymentInfo.name}<br>phone: ${paymentInfo.phone}<br>pin: ${paymentInfo.pin}<br>location: ${paymentInfo.location}`;
            break;
        case 'ATM':
            paymentInfoDiv.innerHTML = `card number: ${paymentInfo.cardNumber}<br>expired date: ${paymentInfo.expiredDate}<br>cvc: ${paymentInfo.cvc}<br>phone: ${paymentInfo.phone}<br>pin: ${paymentInfo.pin}<br>name: ${paymentInfo.name}<br>location: ${paymentInfo.location}`;
            break;
        case 'Cash':
            paymentInfoDiv.innerHTML = `phone: ${paymentInfo.phone}<br>name: ${paymentInfo.name}<br>amount: ${paymentInfo.amount}<br>note: ${paymentInfo.note}<br>location: ${paymentInfo.location}`;
            break;
        default:
            paymentInfoDiv.innerHTML = '';
            break;
    }
}

function notShowInfo() {
    const paymentInfoDiv = document.getElementById('payment-info');
    if (paymentInfoDiv)
        paymentInfoDiv.innerHTML = '';
}

updateContent();
