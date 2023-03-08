
document.addEventListener("DOMContentLoaded", () => {
  const createTicketButton = document.getElementById("create-ticket-button");
  createTicketButton.addEventListener("click", () => {
    const newTicketView = document.getElementById("new-ticket-view");
    newTicketView.style.display = "block";
  });
});

const newTicketForm = document.getElementById("new-ticket-form");
newTicketForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const message = document.getElementById("message").value;
  const ticketData = {
    title: title,
    status: "open",
    priority: "normal",
    user_id: userId, // TODO: to fix this
    support_user_id: 2,
  };

  // Send the ticketData object to your ticketRoutes.js file using an AJAX request
  // assuming this is how you do it??
  const createTicketResponse = fetch("/api/ticket/create-ticket", {
    method: "POST",
    body: JSON.stringify(ticketData),
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticketData),
  })

    if (!createTicketResponse.ok) {
    throw new Error("Failed to create a ticket");
  }
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Handle the response data here
    })
    .catch((error) => console.error(error));
});

