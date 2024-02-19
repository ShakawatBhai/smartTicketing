
const seatLeft = document.getElementById("seat-left");
let totalSeats = 40;

const seatChoice = document.getElementById("seat-choosen");
let choosenSeat = 0;

const seatInfo = document.getElementById('seat-info');


const coupnInput = document.getElementById('coupon-input')
const couponApplyButton = document.getElementById('coupon-apply-button')

const totalPriceElement = document.getElementById('total-price');
let totalPrice = 0;

const discountPriceElement = document.getElementById('discount-price')
let discountedPrice = 0;

const grandTotalElement = document.getElementById('grand-total');
let grandTotal = 0;

const contactNumber = document.getElementById('number');


let maxSize = 0;


for (const seat of seats) {
    const seatNumber = seat.innerText;
    seat.onclick = function () {
        

        const colorCheck = seat.classList.contains("bg-[var(--base)]");
        if (colorCheck == false) {
            
            maxSize++;

            if (maxSize <= 4) {
                seat.classList.add("bg-[var(--base)]");
               
                totalSeats--;
                seatLeft.innerText = totalSeats;
               
                choosenSeat++;
                seatChoice.innerText = choosenSeat;

                seatInfo.innerHTML +=
                    `<tr class='${seatNumber} , seat-information'>
                    <td id = 'seat-number'>${seatNumber}</td>
                    <td id = 'seat-class'>Economy</td>
                    <td id = 'fare'>550</td>
                </tr>`

                if (maxSize == 4) {
                    coupnInput.removeAttribute('disabled');
                    couponApplyButton.removeAttribute('disabled');

                }
                else {
                    coupnInput.setAttribute('disabled', '');
                    couponApplyButton.setAttribute('disabled', '');
                }

                totalPrice += 550;
                totalPriceElement.innerText = totalPrice;

                
                grandTotalElement.innerText = totalPrice;

                
                couponApplyButton.onclick = function () {

                    // NEW15 coupon apply
                    if (coupnInput.value === "NEW15") {

                        document.getElementById('discount-container').classList.remove('hidden');

                        discountedPrice = totalPrice * 0.15;
                        discountPriceElement.innerText = discountedPrice;

                        grandTotal = totalPrice - discountedPrice;
                        grandTotalElement.innerText = grandTotal;

                        
                        document.getElementById('discount-container').classList.add('hidden')

                    }

                    // couple 20  coupon apply
                    else if (coupnInput.value === "Couple 20") {
                        document.getElementById('discount-container').classList.remove('hidden');

                        discountedPrice = totalPrice * 0.20;
                        discountPriceElement.innerText = discountedPrice;

                        grandTotal = totalPrice - discountedPrice;
                        grandTotalElement.innerText = grandTotal;

                        document.getElementById('discount-container').classList.add('hidden')

                    }

                    else {
                        alert('Invalid coupon')
                        coupnInput.value = '';
                    }
                };

               
                if (maxSize > 0) {
                 
                    contactNumber.onkeyup = function () {
                        const contactNumberValue = contactNumber.value;

                        if (!Number.isNaN(Number(contactNumberValue))) {
                            console.log('hello');
                            document.getElementById('nextbutton').removeAttribute('disabled');
                        }
                        else {
                            document.getElementById('nextbutton').setAttribute('disabled', '');
                        }

                    }
                }

            }

            else {
                alert('You cannot select more than 4 seats')
                maxSize--;
                console.log(maxSize);
            }

        } else {
            seat.classList.remove("bg-[var(--base)]");
         
            totalSeats++;
            seatLeft.innerText = totalSeats;

            choosenSeat--;
            seatChoice.innerText = choosenSeat;

            console.log(seatInfo)

            const seatsWithClassInTable = document.getElementsByClassName('seat-information')
            for (const seatWithClassInTable of seatsWithClassInTable) {
                const checkSeat = seatWithClassInTable.classList.contains(`${seatNumber}`)

                if (checkSeat == true) {
                    seatWithClassInTable.classList.add('hidden');
                }
            }

            maxSize--;
            console.log(maxSize)

            if (maxSize == 4) {
                coupnInput.removeAttribute('disabled');
                couponApplyButton.removeAttribute('disabled');
            }
            else {
                coupnInput.setAttribute('disabled', '');
                couponApplyButton.setAttribute('disabled', '');
                document.getElementById('nextbutton').setAttribute('disabled', '');

                contactNumber.value = '';
            }

            totalPrice -= 550;
            totalPriceElement.innerText = totalPrice;

            grandTotalElement.innerText = totalPrice;
        }
    };
}

function reload() {
    window.location.reload()
}