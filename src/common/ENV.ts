import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

const ENV = {
  Port: process.env.PORT || 5000,
};

export default ENV;
