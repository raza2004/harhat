const hre = require("hardhat");
const { ethers } = hre;

async function main() {
  // Parameters for your ERC20 token
  const name = "MyToken";
  const symbol = "MTK";
  const initialSupply = ethers.utils.parseUnits("100", 18); // 100 tokens with 18 decimal places

  // Deploy the ERC20 token contract
  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy(name, symbol, initialSupply);

  await myToken.deployed();

  // Mint additional tokens (if needed)
  const additionalTokens = ethers.utils.parseUnits("50", 18); // Mint 50 more tokens
  await myToken.mint(hre.ethers.constants.AddressZero, additionalTokens);

  console.log(`MyToken contract deployed to: ${myToken.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
