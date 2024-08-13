First start with create React App
In this project directory, you can run:
yarn start

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.

Inside api, initialize the Node.js application:
npm init -y
npm i express

Create an index.js file to set up the Express application.
Store the connection string in an .env file and access it using the dotenv library.
Connect to MongoDB using Mongoose and create schemas for hotels, users, and bookings.

User Authentication:
Use the bcrypt.js library for password hashing.

For backend setup:
yarn start

For frontend setup:
cd client
cd booking2024
yarn start

For deployment setup:
Log in to Render and create a new Web Service.
Connect the GitHub repository.
Set up environment variables.
Deploy and Render will handle building and serving your app.
