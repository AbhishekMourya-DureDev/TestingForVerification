require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",

  networks: {
    gorile: {
      url: `https://eth-goerli.g.alchemy.com/v2/hi1QfAqt1tNAQ99bSH6PJeMfbJMHeHM6`,
      chainId: 5,
      gasPrice: 60000000000,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
  },
};
