const hre = require("hardhat");

async function main() {
  const ECommerce = await hre.ethers.getContractFactory("ECommerce");
  const eCommerce = await ECommerce.deploy();

  // await eCommerce.deployed();

  console.log("ECommerce deployed to:", eCommerce.target);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
//0x5FbDB2315678afecb367f032d93F642f64180aa3