async function main() {
    const { ethers } = require("hardhat");
  
    // Get the first signer as deployer
    const [deployer] = await ethers.getSigners();
    console.log("Deploying mock ERC20 Token with the account:", deployer.address);
  
    // Deploy the mock ERC20 token contract
    const MockERC20 = await ethers.getContractFactory("MockERC20");
    const mockERC20 = await MockERC20.deploy("MockToken", "MTK"); // Adjust name and symbol as needed
  
    console.log("Mock ERC20 Token deployed to:", mockERC20.target);
  }
  
  // Execute the deployment function
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  