const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const AutomateReward = await hre.ethers.getContractFactory("CounterReward");
  const reward = await AutomateReward.deploy();
  await reward.deployed();
  console.log("reward deployed to:", reward.address);

  fs.writeFileSync('../client/config3.js', `
  export const reward = "${reward.address}"
  `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });