require("@nomicfoundation/hardhat-toolbox");


module.exports = {
  solidity: "0.8.20",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545", // Localhost URL for Hardhat's default network
      // accounts: {
      //   mnemonic: "test test test test test test test test test test test junk", // Mnemonic for local development (replace with your own)
      // },
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};




