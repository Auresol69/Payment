const contentDiv = document.getElementById('content');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

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
    `<h2>Your Receipt</h2>
     <p>Thank you for your purchase!</p>`
];

let currentIndex = 0;

function updateContent() {
    contentDiv.innerHTML = paymentData[currentIndex];

    const options = document.getElementById('payment__information');
    const radios = document.getElementsByName('payment');

    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            options.classList.remove('height-transition', 'show');
            options.style.height = 0;
            options.innerHTML = '';

            switch (radio.value) {
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
        });
    });
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0)
        currentIndex--;
    updateContent();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < paymentData.length - 1)
        currentIndex++;
    updateContent();
});

updateContent();