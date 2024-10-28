const radios = document.getElementsByName('payment');
const options = document.getElementById('payment__information');

radios.forEach(radio => {
    radio.addEventListener('change', () => {
        options.classList.remove('height-transition', 'show');
        options.style.height = 0;
        options.innerHTML = '';

        switch (radio.value) {
            case 'Momo':
                options.innerHTML = `
                    <label for="momo_phone">Phone number</label>
                    <br>
                    <input type="text" name="momo_phone" id="momo_phone" inputmode="numeric" pattern="[0-9]*"
                        title="Please enter Phone number" placeholder="Number" required
                        oninput="this.value = this.value.replace(/[^0-9]/g,'')">
                    <br>
                    <label for="momo_name">Name</label>
                    <br>
                    <input type="text" name="momo_name" id="momo_name" title="Please enter Name" placeholder="Name" required>
                    <br>
                    <label for="momo_pin">Pin code</label>
                    <br>
                    <input type="text" name="momo_pin" id="momo_pin" inputmode="numeric" pattern="[0-9]*"
                        title="Please enter Pin code" placeholder="******" required
                        oninput="this.value = this.value.replace(/[^0-9]/g,'')" maxlength="6">
                `;
                break;

            case 'ATM':
                options.innerHTML = `
                    <label for="atm_card_number">Card number</label>
                    <br>
                    <input type="text" inputmode="numeric" name="atm_card_number" id="atm_card_number" pattern="[0-9]*"
                        title="Please enter Card number" placeholder="Card number" required
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')">
                    <br>
                    <label for="atm_expired_date">Expired date</label>
                    <br>
                    <input type="text" inputmode="numeric" name="atm_expired_date" id="atm_expired_date" pattern="[0-9]*"
                        title="Please enter Expired date" placeholder="MM/YY" required
                        oninput="this.value = this.value.replace(/[^0-9/]/g, '')" maxlength="5">
                    <br>
                    <label for="atm_cvc">CVC</label>
                    <br>
                    <input type="text" name="atm_cvc" id="atm_cvc" inputmode="numeric" pattern="[0-9]*"
                        title="Please enter CVC" placeholder="CVC" required
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')" maxlength="4">
                    <br>
                    <label for="atm_phone">Phone number</label>
                    <br>
                    <input type="text" name="atm_phone" id="atm_phone" inputmode="numeric" pattern="[0-9]*"
                        title="Please enter Phone number" placeholder="Number" required
                        oninput="this.value = this.value.replace(/[^0-9]/g,'')">
                    <br>
                    <label for="atm_pin">Pin code</label>
                    <br>
                    <input type="text" name="atm_pin" id="atm_pin" inputmode="numeric" pattern="[0-9]*"
                        title="Please enter Pin code" placeholder="******" required
                        oninput="this.value = this.value.replace(/[^0-9]/g,'')" maxlength="6">
                    <br>
                    <label for="atm_name">Name</label>
                    <br>
                    <input type="text" name="atm_name" id="atm_name" title="Please enter Name" placeholder="Name" required>
                `;
                break;

            case 'Cash':
                options.innerHTML = `
                    <label for="cash_phone">Phone number</label>
                    <br>
                    <input type="text" name="cash_phone" id="cash_phone" inputmode="numeric" pattern="[0-9]*"
                        title="Please enter Phone number" placeholder="Number" required
                        oninput="this.value = this.value.replace(/[^0-9]/g,'')">
                    <br>
                    <label for="cash_name">Name</label>
                    <br>
                    <input type="text" name="cash_name" id="cash_name" title="Please enter Name" placeholder="Name" required>
                    <br>
                    <label for="cash_amount">Amount</label>
                    <br>
                    <input type="text" inputmode="numeric" name="cash_amount" id="cash_amount" pattern="[0-9]*"
                        title="Please enter Amount" placeholder="Amount" required
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')">
                    <br>
                    <label for="cash_note">Note (optional)</label>
                    <br>
                    <input type="text" name="cash_note" id="cash_note" title="Enter Note" placeholder="Note (optional)">
                `;
                break;

            default:
                options.innerHTML = '';
                break;
        }

        // UPDATE HEIGHT
        requestAnimationFrame(() => {
            options.classList.add('height-transition');
            const height = options.scrollHeight + 'px';
            options.style.height = height;
            options.classList.add('show');
        });
    });
});