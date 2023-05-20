import app from "./index";
import mongoose from "mongoose";

// Server port initialization
const SERVER_PORT = process.env.SERVER_PORT || 3000;

// Mongo connection
mongoose
  // Try to connect to database
  .connect(process.env.DATABASE_CONNECTION_URL!)
  // If connected starts the server
  .then(() => {
    app.listen(SERVER_PORT, () => {
      console.log(`Server on port: ${SERVER_PORT}`);
    });
  })
  // If not connected returns and error
  .catch((error) => {
    console.log(error);
  });
