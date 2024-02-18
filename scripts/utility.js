

function repeatSeatMap(val) {
    const seatMap = document.getElementById("seatMap");
    seatMap.innerHTML += `
      <p>${val}</p>
      <p id="${val}1" class="bg-[#F7F8F8] p-2 rounded-md seat">${val}1</p>
      <p id="${val}2" class="bg-[#F7F8F8] p-2 rounded-md seat">${val}2</p>
      <p></p>
      <p id="${val}3" class="bg-[#F7F8F8] p-2 rounded-md seat">${val}3</p>
      <p id="${val}4" class="bg-[#F7F8F8] p-2 rounded-md seat">${val}4</p>`;
  }
  
  repeatSeatMap("B");
  repeatSeatMap("C");
  repeatSeatMap("D");
  repeatSeatMap("E");
  repeatSeatMap("F");
  repeatSeatMap("G");
  repeatSeatMap("H");
  repeatSeatMap("I");
  repeatSeatMap("J");


const seats = document.getElementsByClassName('seats')


function changeSeatBgColor(){
    
}

 