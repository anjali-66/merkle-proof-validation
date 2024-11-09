const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

async function generateMerkleTree(transactions) {
    const leaves = transactions.map(tx => keccak256(tx));
    const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true });
    const merkleRoot = merkleTree.getRoot().toString('hex');
    
    console.log("Merkle Root:", merkleRoot);
    const tx = leaves[0];
    const proof = merkleTree.getProof(tx).map(node => node.data.toString('hex'));
    console.log("Merkle Proof:", proof);
    return { merkleRoot, proof };
}

generateMerkleTree(["txHash1", "txHash2", "txHash3"]).catch(console.error);
