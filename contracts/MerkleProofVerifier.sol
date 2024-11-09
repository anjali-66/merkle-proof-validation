
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract MerkleProofVerifier is Ownable {
    bytes32 public merkleRoot;

    // Event emitted when the Merkle root is set
    event MerkleRootSet(bytes32 indexed newMerkleRoot);

    /**
     * @dev Sets the Merkle root. Can only be called by the contract owner.
     * @param _merkleRoot The Merkle root to be stored in the contract.
     */
    function setMerkleRoot(bytes32 _merkleRoot) external onlyOwner {
        merkleRoot = _merkleRoot;
        emit MerkleRootSet(_merkleRoot);
    }

    /**
     * @dev Verifies if a transaction hash is included in the stored Merkle root.
     * @param _txHash The transaction hash to verify.
     * @param _proof The Merkle proof showing inclusion of the _txHash.
     * @return isValid Boolean indicating if the transaction hash is valid.
     */
    function verifyTransaction(
        bytes32 _txHash,
        bytes32[] calldata _proof
    ) external view returns (bool isValid) {
        return MerkleProof.verify(_proof, merkleRoot, _txHash);
    }
}
