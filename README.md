# merkle-proof-validation


This project involves creating a smart contract that verifies the inclusion of a specific transaction in a block on a blockchain (using Sepolia or zkSync testnets) by leveraging Merkle proofs. This verification requires constructing a Merkle tree from block transactions, storing the Merkle root in a smart contract, and enabling users to submit Merkle proofs for transaction verification. The project also includes a frontend interface to interact with the contract.

Key Functionalities

Fetch Transactions: Retrieve all transactions from a specified block.
Merkle Tree Construction: Construct a Merkle tree from the transactions, generate a root, and create proofs for specific transactions.
Smart Contract Verification: A smart contract stores the Merkle root and verifies the inclusion of transactions.
Frontend Interface: A React-based UI allows users to input transaction details and proofs for on-chain verification.
Project Setup

Prerequisites
Node.js and NPM
Infura or Alchemy API key for interacting with Sepolia
Metamask or another Web3-compatible wallet for deploying contracts and interacting with the blockchain
