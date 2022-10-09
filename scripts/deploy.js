const hre = require("hardhat");

async function main() {
 
  const Manager = await hre.ethers.getContractFactory("Manager");
  const manager = await Manager.deploy();

  await manager.deployed();

  console.log(
    "Manager deployed to: ", manager.address
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
