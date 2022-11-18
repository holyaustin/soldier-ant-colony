require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
   
    mumbai: {
      url: "https://red-yolo-county.matic-testnet.discover.quiknode.pro/735b95c35f376be2cc1e32e5da540cef149494cd/", 
      accounts: [process.env.PRIVATE_KEY],
    },

  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
