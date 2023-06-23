const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  // Deploy UniswapV2Router02 contract
  const PancakeRouter = await ethers.getContractFactory("PancakeRouter");
  const pancakeRouter = await PancakeRouter.deploy(
    "0x6543cf1D93828d193E58310E960d09083E62A49B",
    "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
    { gasLimit: 4000000 }
  );

  // Wait for the contract to be mined
  await pancakeRouter.deployed();

  // Save the contract address to a file
  fs.writeFileSync("router-address.txt", pancakeRouter.address);

  console.log("PancakeRouter deployed to:", pancakeRouter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
