const createTicketButton = document.getElementById("create-ticket-button");
createTicketButton.addEventListener("click", () => {
  // Show the new ticket view

  const createTicketButton = document.getElementById("create-ticket-button");
  const newTicketView = document.getElementById("new-ticket-view");
  createTicketButton.addEventListener("click", () => {
    newTicketView.style.display = "block";
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
  });
});
