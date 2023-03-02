# **Online Chat Support**


## **Project Description**

When signing up for the first time, the application will check from the database if the following properties are duplications of existing records:
- username
- email

If duplicated, the application will (automatically, i.e. without pressing `submit` button?) prompt an error message and asks the user to use a different username or email.

Once logged in, an **`end user`** would be able to perform the following tasks:
- Create a new ticket (POST request)
- Read support_user's reply to the ticket (GET request)
- Read all existing tickets and contents within (as well as username/first_name/last_name of a support_user and timestamp) (GET request)
- Update personal profiles, e.g. username, password, first_name, last_name, email (PUT request) >> once updated, existing records must be updated as well
- Update ticket status (PUT request)
- Delete a ticket (DELETE request)? -- in real practice, we might not want to allow deletion as the records accessible to both parties could prevent any disputes in the future
- Filter tickets by status, ticket_id, updatedAt in DESC order, and tag

Once logged in, a **`support_user`** would be able to perform the following tasks:
- Read an end user's submitted ticket and contents within (as well as username/first name/last name of the end-user and timestamp)
- Update personal profiles, e.g. username, password, first_name, last_name, email (PUT request) >> once updated, existing records must be updated as well
- Submit a reply to the ticket (POST request)
- Update ticket status (PUT request)
- Update ticket priority (PUT request)
- Filter tickets by status, ticket_id, updatedAt in DESC order, and tag

---
## **URLs**
- [Deployed Application]()
- [GitHub Repository URL]()

---
## **Table of Contents**
- <a href="#installation">Installation</a>
- <a href="#technologies-used">Technologies Used</a>
- <a href="#usage">Usage</a>
- <a href="#future-development">Future Developments</a>

---
## **Installation**
The following npm libraries must be installed to run this application:
- axios v1.3.4
- bcrypt v5.1.0
- connect-session-sequelize v7.1.5
- dotenv v16.0.3
- ejs v3.1.8
- express v4.18.2
- express-handlebars v6.0.7 
- express-session v1.17.3
- lint v0.8.19
- mysql2 v3.1.2
- nodemon v2.0.20
- sequelize v6.29.0

These installations can be simply done by the running the following command line at the root directory: 
```
npm i
```

---
## **Technologies Used**
- HTML
- CSS
- Bootstrap
- Node.js
- MySQL
- Express.js

---

## **Usage**


---

## **Future Developments**
- Forgot password handling
- filter in DESC order
- include a Model for an admin_user that can approve a new support_user account and assign a support_user to a ticket