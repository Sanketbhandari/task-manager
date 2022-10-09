require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 0x13881,
    },
    matic: {
      url: process.env.REACT_APP_MATIC_RPC,
      accounts: [process.env.PRI_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.REACT_APP_ETHERSCAN,
  }
};
