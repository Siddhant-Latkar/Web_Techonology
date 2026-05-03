// parking data stored in JS (like server data)
const parkingData = {
  mall: [true, true, false, true, false, true, true, false],
  station: [true, false, false, true, true, false, true, true],
  airport: [false, true, true, true, false, true, false, true]
};


// ✅ Simulated Fetch API using Promise
function fetchSlots(location) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(parkingData[location]);
    }, 700);
  });
}


function findSlots() {

  const location = document.getElementById("location").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  const error = document.getElementById("error");
  const loading = document.getElementById("loading");
  const slotsDiv = document.getElementById("slots");
  const title = document.getElementById("title");

  error.innerHTML = "";
  slotsDiv.innerHTML = "";

  // ✅ FORM VALIDATION
  if (!location || !date || !time) {
    error.innerHTML = "⚠ Please fill all fields";
    return;
  }

  loading.innerHTML = "Fetching available slots...";

  // ✅ FETCH API simulation
  fetchSlots(location).then(slots => {

    loading.innerHTML = "";
    title.innerHTML = "Available Slots";

    // ✅ DOM MANIPULATION
    slots.forEach((available, index) => {

      const slot = document.createElement("div");
      slot.classList.add("slot");
      slot.innerText = index + 1;

      if (available) {
        slot.classList.add("available");

        slot.onclick = () => bookSlot(slot, index);

      } else {
        slot.classList.add("booked");
      }

      slotsDiv.appendChild(slot);
    });

  });
}


// ✅ Promise booking simulation
function bookSlot(slotElement, index) {

  new Promise(resolve => {
    setTimeout(resolve, 500);
  }).then(() => {

    slotElement.classList.remove("available");
    slotElement.classList.add("booked");
    slotElement.onclick = null;

    alert("✅ Slot " + (index + 1) + " booked successfully!");
  });

}