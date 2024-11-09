require('dotenv').config();

const {ethers} = require('ethers');

// Access environment variables
const infuraApiKey = process.env.INFURA_API_KEY;
const alchemyApiKey = process.env.ALCHEMY_API_KEY;
const walletPrivateKey = process.env.PRIVATE_KEY;

// Use the Sepolia testnet instead of the mainnet
const provider = new ethers.providers.InfuraProvider("sepolia", infuraApiKey);
const wallet = new ethers.Wallet(walletPrivateKey, provider);

async function fetchTransactions() {
    // Fetch and log transactions or any specific data here
    console.log("Wallet address:", wallet.address);
    // Add further code as per your project needs
}

fetchTransactions().catch(console.error);
