import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    beamTestnet: {
      chainId: 13337,
      url: "https://build.onbeam.com/rpc/testnet",
      accounts: [process.env.PRIVATE_KEY!],
    },
  },
};

export default config;
