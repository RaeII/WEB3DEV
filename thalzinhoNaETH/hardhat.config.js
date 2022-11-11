require("@nomiclabs/hardhat-waffle");
const env = require('./config/index')

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: env.ALCHEMY_API_URL,
      accounts: [env.PRIVATE_GOERLI_ACCOUNT_KEY],
    },
  },
};


