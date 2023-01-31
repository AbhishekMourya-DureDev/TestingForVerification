// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const Lock = await hre.ethers.getContractFactory("HelloWorld");
  const lock = await Lock.deploy("HelloWorld");

  await lock.deployed();

  console.log("Deployed at: ", lock.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//Deployed at:  0xcd14b826D3749ca4A7bc4D629208777d4030D57a
