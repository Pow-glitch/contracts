const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  // Deploy UniswapV2Factory contract
  const PancakeFactory = await ethers.getContractFactory("PancakeFactory");
  const pancakeFactory = await PancakeFactory.deploy(
    "0x6D9fBbF254C8199E111d2d10a3e2fE09EBF5902f",
    { gasLimit: 4000000 }
  );

  // Wait for the contract to be mined
  await pancakeFactory.deployed();

  // Save the contract address to a file
  fs.writeFileSync("factory-address.txt", pancakeFactory.address);

  console.log("UniswapV2Factory deployed to:", pancakeFactory.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
