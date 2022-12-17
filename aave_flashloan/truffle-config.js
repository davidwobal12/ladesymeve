// require('dotenv').config();
// const { MNEMONIC, PROJECT_ID } = process.env;

// const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    polygon_main_fork: {
      host: "127.0.0.1",
      port: 8545,
      network_id: 999,
    },
    matic_mainnet: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://polygon-mainnet.g.alchemy.com/v2/wxfOA3Xxe568myxOj74fzyBsgobuAF53}`),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.10"
    }
  }
};
