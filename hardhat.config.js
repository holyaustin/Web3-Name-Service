require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

// const { API_URL, PRIVATE_KEY } = process.env;
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    
    mumbai: {
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY]
    },
    metis: {
      url: "https://stardust.metis.io/?owner=588",
      accounts: [process.env.PRIVATE_KEY]
    },

     arbitrium: {
      url: `https://rinkeby.arbitrum.io/rpc`,
      accounts: [process.env.PRIVATE_KEY]
    },
    harmony: {
      url: `https://api.s0.b.hmny.io`,
      accounts: [process.env.PRIVATE_KEY]
    },

  },
  solidity: {
    version: "0.8.10",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};


