const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  // Deploy UniswapV2Router02 contract
  const PancakeRouter01 = await ethers.getContractFactory("PancakeRouter01");
  const pancakeRouter01 = await PancakeRouter01.deploy(
    "0xbf94a8FA8ca537634f57bF89a539ba20E6f4BC79",
    "0xec1c9B2Dc278A55D9d87Dd5e5157F99ebc7593d5",
    { gasLimit: 4000000 }
  );

  // Wait for the contract to be mined
  await pancakeRouter01.deployed();

  // Save the contract address to a file
  fs.writeFileSync("router-address.txt", pancakeRouter01.address);

  console.log("PancakeRouter01 deployed to:", pancakeRouter01.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
