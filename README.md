# MERN Stack Application

This repository contains a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The project is designed to demonstrate the integration of a NoSQL database with a RESTful API, a modern frontend, and a backend server.

## Features

- MongoDB: Database for storing application data.
- Express.js: Backend framework for building RESTful APIs.
- React.js: Frontend library for building interactive user interfaces.
- Node.js: Runtime for executing server-side JavaScript.
- User authentication with JSON Web Tokens (JWT).
- CRUD operations for managing resources.
- Responsive and dynamic user interface.

## Getting Started

Follow these steps to set up and run the application on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/en) (v16.x or higher recommended)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the Repository:

> bash

```
git clone https://github.com/PeterBorza/MERN.git
cd MERN
```

2. Install Dependencies:

- Backend dependencies:
  > bash

```
cd server
npm install
```

- Frontend dependencies:
  > bash

```
cd ../client
npm install
```

3. Environment Variables:

- Create a `.env` file in the backend directory with the following variables:

> makefile

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

- Replace `your_mongodb_connection_string` and `your_jwt_secret` with your own values.
  Running the Application

1. Start the Backend:

> bash

```
cd backend
npm run start
```

2. Start the Frontend:

> bash

```
cd ../frontend
npm start
```

3. Access the Application: Open [localhost 3000](http://localhost:3000) in your browser.

## Project Structure

> bash

mern-app/
├── backend/ # Express server and API
│ ├── config/ # Configuration files (e.g., database connection)
│ ├── controllers/ # Request handlers
│ ├── models/ # Mongoose schemas
│ └── routes/ # API routes
├── frontend/ # React application
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Page components
│ │ └── utils/ # Helper functions
└── README.md # Project documentation

## Scripts

### Backend

- `npm run start`: Starts the server in production mode.
- `npm run dev`: Starts the server in development mode with hot-reloading.

### Frontend

- `npm start`: Starts the React development server.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature-name"`.
4. Push to your branch: `git push origin feature-name`.
5. Create a pull request.

## License

This project is licensed under the MIT License. See the **LICENSE** file for details.
