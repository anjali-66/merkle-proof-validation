// src/App.js
// src/App.js
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import abi from './abi';
import './App.css'; // Import CSS file

const contractAddress = '0x759EF7f4D7928130F48A0E5c8B19b76cb0D6484D';

function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [merkleRoot, setMerkleRoot] = useState("");
  const [txHash, setTxHash] = useState("");
  const [proof, setProof] = useState([]);
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    const init = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      setSigner(signer);
      const contractInstance = new ethers.Contract(contractAddress, abi, signer);
      setContract(contractInstance);
      const account = await signer.getAddress();
      setAccount(account);
    };
    init();
  }, []);

  const handleSetMerkleRoot = async () => {
    try {
      const tx = await contract.setMerkleRoot(merkleRoot);
      await tx.wait();
      console.log('Merkle root set:', merkleRoot);
    } catch (error) {
      console.error('Error setting Merkle root:', error);
    }
  };

  const handleVerifyTransaction = async () => {
    try {
      const result = await contract.verifyTransaction(txHash, proof);
      setIsValid(result);
      console.log('Transaction verification result:', result);
    } catch (error) {
      console.error('Error verifying transaction:', error);
    }
  };

  return (
    <div className="app-container">
      <h1>My DApp</h1>
      <p className="connected-account">Connected Account: {account}</p>

      {/* Set Merkle Root Section */}
      <div className="section">
        <h3>Set Merkle Root</h3>
        <input
          type="text"
          placeholder="Enter Merkle Root"
          value={merkleRoot}
          onChange={(e) => setMerkleRoot(e.target.value)}
        />
        <button onClick={handleSetMerkleRoot}>Set Merkle Root</button>
      </div>

      {/* Verify Transaction Section */}
      <div className="section">
        <h3>Verify Transaction</h3>
        <input
          type="text"
          placeholder="Enter Transaction Hash"
          value={txHash}
          onChange={(e) => setTxHash(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Merkle Proof (comma-separated)"
          value={proof}
          onChange={(e) => setProof(e.target.value.split(','))}
        />
        <button onClick={handleVerifyTransaction}>Verify Transaction</button>
        {isValid !== null && (
          <p className="validation-result">
            Transaction is {isValid ? 'Valid' : 'Invalid'}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
