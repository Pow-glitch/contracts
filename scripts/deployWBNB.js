const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const WBNB = await ethers.getContractFactory("WBNB");
  const wBNB = await WBNB.deploy();

  console.log("WBNB address:", wBNB.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
