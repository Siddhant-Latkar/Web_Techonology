async function bookEvent() {
  const name = document.getElementById("name").value;
  const eventId = document.getElementById("eventSelect").value;

  if (!name) {
    alert("Please enter your name");
    return;
  }

  const res = await fetch("/book", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({
      name: name,
      eventId: eventId
    })
  });

  const data = await res.json();

  document.getElementById("msg").innerText = data.message;

  loadEvents(); // refresh slots
}

