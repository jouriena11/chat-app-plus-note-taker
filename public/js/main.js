// // codes to render TicketList and TicketMessages

// const EJS = require('ejs');

// function renderTickets(tickets) {
//   const ticketsTemplate = `
//     <div class="container">
//       <div class="right-section">
//         <% tickets.forEach(function(ticket) { %>
//           <div class="card">
//             <div class="textBox">
//               <div class="textContent">
//                 <p class="h1">Ticket: <%= ticket.id %></p>
//                 <p class="h4">Title: <%= ticket.title %></p>
//                 <p class="h4">Status: <%= ticket.status %></p>
//                 <p class="h4">Priority: <%= ticket.priority %></p>
//                 <p class="h4">Created: <%= ticket.createdAt %></p>
//               </div>
//             </div>
//           </div>
//         <% }); %>
//       </div>
//     </div>
//   `;

//   const renderedHTML = EJS.compile(ticketsTemplate)(tickets);
//   const ticketsContainer = document.querySelector('.tickets-container');
//   ticketsContainer.innerHTML = renderedHTML;
// }

// // Example usage
// const tickets = [
//   {
//     id: 1,
//     title: 'Fix login bug',
//     status: 'Open',
//     priority: 'High',
//     createdAt: '2022-01-01'
//   },
//   {
//     id: 2,
//     title: 'Update homepage layout',
//     status: 'In Progress',
//     priority: 'Medium',
//     createdAt: '2022-01-02'
//   }
// ];

// renderTickets(tickets);
