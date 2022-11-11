const dotenv = require("dotenv");

const envFound = dotenv.config({ path: `.env` });

if (envFound.error) {
  // This error should crash whole process

  throw new Error("Couldn't find .env file.");
}

module.exports = {
  
  ALCHEMY_API_URL: process.env.ALCHEMY_API_URL,
  PRIVATE_GOERLI_ACCOUNT_KEY: process.env.PRIVATE_GOERLI_ACCOUNT_KEY,

};
