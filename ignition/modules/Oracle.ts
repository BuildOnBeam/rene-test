// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const myModule = buildModule("OracleModule", (m) => {
  const myContract = m.contract("Oracle", [], {});

  return { myContract };
});

export default myModule;
