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
    title,
    status: "open",
    priority: "normal",
    user_id: req.session.user_id,
    support_user_id: 2,
  };

  // Send the ticketData object to your ticketRoutes.js file using an AJAX request
  // assuming this is how you do it??
  fetch("/api/ticket/create-ticket", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticketData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Handle the response data here
    })
    .catch((error) => console.error(error));
});
