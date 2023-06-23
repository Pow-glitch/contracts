const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Bitcone = await ethers.getContractFactory("Bitcone");
  const bitcone = await Bitcone.deploy();

  console.log("Bitcone address:", bitcone.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
