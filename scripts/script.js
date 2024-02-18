// const seats = document.querySelectorAll('.seat');
// const couponInput = document.getElementById('coupon-input');
// const seatContainer = document.getElementById('seat-info');
// const couponApplyBtn = document.getElementById('coupon-apply-btn');

// let maxCap = 4;
// let seatCount = 0;
// let price = 0;
// let totalSeats = 40;
// let selectedSeat = 0;

// for (const seat of seats){
//     function seatClicked(){

//         // set bg color to seat
//         seat.classList.add('bg-[var(--base)]');
//         maxCap--;

//         // limit user to choose max 4 seats
//         if(maxCap < 0){
//             alert("You can only choose 4 seats");
//             seat.classList.remove('bg-[var(--base)]');

//         }
//         else{
//             seatContainer.innerHTML +=
//             ``
//         }

//         // add seat data to the table
//         const seatNumber = seat.id;
//         // const seatContainer = document.getElementById('seat-info');
//         seatContainer.innerHTML +=
//         `<tr>
//             <td id = 'seat-number'>${seatNumber}</td>
//             <td id = 'seat-class'>Economy</td>
//             <td id = 'fare'>550</td>
//         </tr>` ;

//         // show how many seat user has choose
//         const totalSeat = document.getElementById('total-seat');
//         seatCount++;
//         totalSeat.innerText = seatCount;

//         // calculate the total price
//         const totalPrice = document.getElementById('total-price');
//         price += 550;
//         totalPrice.innerText = price;

//         // set the left seats on the bus info
//         const seatLeft = document.getElementById('seat-left');
//         totalSeats--;
//         seatLeft.innerText = totalSeats;

//         selectedSeat++;

//         // enable the discount section if user choose 4 seats

//         if(selectedSeat == 4){
//             couponApplyBtn.removeAttribute('disabled');
//             couponInput.removeAttribute('disabled');
//         }

//         // if the user input is NEW15, user will get 15%
//         // check input

//         couponApplyBtn.onclick = function(){
//             if(couponInput.value == "NEW15"){
//                 const discountedPrice = price * 0.15;
//                 console.log(discountedPrice)
//             }
//         }

//     }

//     seat.addEventListener('click', seatClicked);

// }

// variables

const seatLeft = document.getElementById("seat-left");
let totalSeats = 40;

const seatChoosen = document.getElementById("seat-choosen");
let choosenSeat = 0;

const seatInfo = document.getElementById('seat-info');


const coupnInput = document.getElementById('coupon-input')
const couponApplyBtn = document.getElementById('coupon-apply-btn')

const totalPriceEle = document.getElementById('total-price');
let totalPrice = 0;

const discountedPriceEle = document.getElementById('discounted-price')
let discountedPrice = 0;

const grandTotalEle = document.getElementById('grand-total');
let grandTotal = 0;

const phoneNumber = document.getElementById('number');


let maxCapacity = 0;

// clicking the seats

for (const seat of seats) {
    const seatNumber = seat.innerText;
    seat.onclick = function () {
        // change the choose seat color

        const colorClassCheck = seat.classList.contains("bg-[var(--base)]");
        if (colorClassCheck == false) {
            // limit the user to choose 4 seats only
            maxCapacity++;

            if (maxCapacity <= 4) {
                seat.classList.add("bg-[var(--base)]");

                // decrease the total seat no
                totalSeats--;
                seatLeft.innerText = totalSeats;

                // increase choosen seat no
                choosenSeat++;
                seatChoosen.innerText = choosenSeat;


                // add the seat details in the table
                seatInfo.innerHTML +=
                    `<tr class='${seatNumber} , seat-information'>
                    <td id = 'seat-number'>${seatNumber}</td>
                    <td id = 'seat-class'>Economy</td>
                    <td id = 'fare'>550</td>
                </tr>`


                // enable/disble the discount section
                if (maxCapacity == 4) {
                    coupnInput.removeAttribute('disabled');
                    couponApplyBtn.removeAttribute('disabled');


                }
                else {
                    coupnInput.setAttribute('disabled', '');
                    couponApplyBtn.setAttribute('disabled', '');
                }

                // increase count Total price
                totalPrice += 550;
                totalPriceEle.innerText = totalPrice;

                grandTotalEle.innerText = totalPrice;




                // coupon apply button click event
                couponApplyBtn.onclick = function () {

                    // NEW15 discount
                    if (coupnInput.value === "NEW15") {

                        document.getElementById('discount-container').classList.remove('hidden');

                        discountedPrice = totalPrice * 0.15;
                        discountedPriceEle.innerText = discountedPrice;

                        grandTotal = totalPrice - discountedPrice;
                        grandTotalEle.innerText = grandTotal;

                        // hide the discount coupon container
                        document.getElementById('discount-input-container').classList.add('hidden')



                    }

                    // couple 20 discount
                    else if (coupnInput.value === "Couple 20") {
                        document.getElementById('discount-container').classList.remove('hidden');

                        discountedPrice = totalPrice * 0.20;
                        discountedPriceEle.innerText = discountedPrice;

                        grandTotal = totalPrice - discountedPrice;
                        grandTotalEle.innerText = grandTotal;

                        // hide the discount coupon container
                        document.getElementById('discount-input-container').classList.add('hidden')




                    }

                    // wrong code
                    else {
                        alert('You have put an incorrect coupon')
                        coupnInput.value = '';
                    }
                };

                // next button
                if (maxCapacity > 0) {


                    // check the number input
                    phoneNumber.onkeyup = function () {
                        const phoneNumberValue = phoneNumber.value;

                        if (!Number.isNaN(Number(phoneNumberValue))) {
                            console.log('hello');
                            document.getElementById('nextBtn').removeAttribute('disabled');
                        }
                        else {
                            document.getElementById('nextBtn').setAttribute('disabled', '');
                        }

                    }
                }


            }

            else {
                alert('You can choose 4 seat maximum')
                maxCapacity--;
                console.log(maxCapacity);
            }



        } else {
            seat.classList.remove("bg-[var(--base)]");

            // increase the total seat no
            totalSeats++;
            seatLeft.innerText = totalSeats;

            // decrease choosen seat no
            choosenSeat--;
            seatChoosen.innerText = choosenSeat;

            // remove the seat details in the table
            console.log(seatInfo)

            const seatsWithClassInTable = document.getElementsByClassName('seat-information')
            for (const seatWithClassInTable of seatsWithClassInTable) {
                const checkSeat = seatWithClassInTable.classList.contains(`${seatNumber}`)

                if (checkSeat == true) {
                    seatWithClassInTable.classList.add('hidden');
                }
            }


            // decrease max capacity
            maxCapacity--;
            console.log(maxCapacity)

            // enable/disble the discount section
            if (maxCapacity == 4) {
                coupnInput.removeAttribute('disabled');
                couponApplyBtn.removeAttribute('disabled');
            }
            else {
                coupnInput.setAttribute('disabled', '');
                couponApplyBtn.setAttribute('disabled', '');
                document.getElementById('nextBtn').setAttribute('disabled', '');

                phoneNumber.value = '';
            }

            // decrease count Total price
            totalPrice -= 550;
            totalPriceEle.innerText = totalPrice;

            grandTotalEle.innerText = totalPrice;
        }
    };
}


function reload() {
    window.location.reload()
}