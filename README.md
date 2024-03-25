# Ticketoes - Ticketing System

Ticketoes is a ticketing system built using the MERN (MongoDB, Express.js, React.js, Node.js) stack with JWT (JSON Web Token) authentication. It provides an interface for employees to create tickets, including pictures and descriptions, and track the progress and status of each ticket through discussions within each ticket. Additionally, only administrators have the privilege to delete completed tickets.

## Features

- **User Authentication**: JWT authentication ensures secure access to the ticketing system.
- **Ticket Creation**: Employees can create tickets, providing details such as picture, description, and other necessary information.
- **Ticket Progress Tracking**: Users can monitor the progress and status of their tickets through discussions within each ticket.
- **Admin Privileges**: Only administrators have the authority to delete completed tickets, ensuring data integrity.

## Technologies Used

- **MongoDB**: NoSQL database used for storing ticket data.
- **Express.js**: Web application framework for Node.js used for building the backend.
- **React.js**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime environment for server-side scripting.
- **JWT Authentication**: JSON Web Token authentication mechanism for securing user access.

## Setup

1. **Clone the Repository**: `git clone https://github.com/chapranj/ticketoes.git`
2. **Navigate to the Directory**: `cd ticketoes`
3. **Install Dependencies**:
   - Backend: `cd server && npm install`
   - Frontend: `cd client-blog && npm install`
4. **Configure Environment Variables**: Set up environment variables such as MongoDB URI and JWT secret key.
5. **Run the Application**:
   - Backend: `cd backend && npm start`
   - Frontend: `cd frontend && npm start`

## Usage
1. **User Authentication**:
   - Users need to sign up and log in using their credentials to access the system.
2. **Ticket Creation**:
   - Once logged in, employees can create tickets by providing relevant details including a picture and description.
3. **Ticket Progress Tracking**:
   - Users can view the status and progress of their tickets on their dashboard. Additionally, each ticket includes a discussion section where users can post updates and discuss the status and progress of the ticket.
4. **Admin Privileges**:
   - Administrators have the authority to delete completed tickets from the system.

## Contribution
Contributions to the Ticketoes project are welcome! Feel free to submit bug reports, feature requests, or even pull requests to enhance the functionality of the system.


