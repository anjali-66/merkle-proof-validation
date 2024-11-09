async function main() {
    // We get the contract to deploy
    const [deployer] = await ethers.getSigners();
    
    console.log("Deploying contracts with the account:", deployer.address);
  
    // Replace 'YourContract' with your actual contract name
    const Contract = await ethers.getContractFactory("MerkleProofVerifier");
    
    // Deploy the contract
    const contract = await Contract.deploy(); // If your contract has constructor arguments, pass them here.
    
    console.log("Contract deployed to:", contract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  