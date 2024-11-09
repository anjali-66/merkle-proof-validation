// src/App.js
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import abi from './abi';

const contractAddress = '0x759EF7f4D7928130F48A0E5c8B19b76cb0D6484D'; // Your contract's address

function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const init = async () => {
      // Connect to MetaMask
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);

      // Request user account access
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      setSigner(signer);

      // Connect to the contract
      const contractInstance = new ethers.Contract(contractAddress, abi, signer);
      setContract(contractInstance);

      // Get and set the user's account address
      const account = await signer.getAddress();
      setAccount(account);
    };

    init();
  }, []);

  const exampleFunction = async () => {
    try {
      const result = await contract.exampleFunction(); // Replace with actual contract function
      console.log('Transaction Result:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>My DApp</h1>
      <p>Connected Account: {account}</p>
      <button onClick={exampleFunction}>Run Contract Function</button>
    </div>
  );
}

export default App;
