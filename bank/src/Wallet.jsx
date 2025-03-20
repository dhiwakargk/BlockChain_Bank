import React, { useState } from 'react';
import { ethers } from 'ethers';
import metamaskabi from "./ABI/metamask_transfer.json"
function WalletTransfer() {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async() => {
    console.log("MetaMask Transfer")
    let metamask_wallet_contract="0x16695cdbE072956F660fF270690EAbE86C985Aa9"
    let account=await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log("Fund Transfer")
    let provider = await new ethers.providers.Web3Provider(window.ethereum);
    let signer =await provider.getSigner();
    let contract= await new ethers.Contract(metamask_wallet_contract,metamaskabi,signer)
    let c=await contract.TransferMeta(ethers.utils.getAddress(formData.to),{value:ethers.utils.parseEther(formData.amount)})
    let tx=await c.wait()
    console.log(tx)
  };

  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: '"Arial", sans-serif',
  };

  const formStyle = {
    display: 'inline-block',
    textAlign: 'left',
    padding: '20px',
    border: '2px solid #4CAF50',
    borderRadius: '10px',
    backgroundColor: '#f1f1f1',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    width: '500px', // Increased width
  };

  const headingStyle = {
    color: '#4CAF50',
    marginBottom: '20px',
  };

  const inputStyle = {
    display: 'block',
    margin: '10px 0',
    padding: '10px',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Wallet Transfer</h2>
      <div  style={formStyle}>
        <label>
          From:
          <input
            type="text"
            name="from"
            placeholder="Enter sender name"
            value={formData.from}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <label>
          To:
          <input
            type="text"
            name="to"
            placeholder="Enter receiver name"
            value={formData.to}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <button
          type="submit"
          style={{ ...buttonStyle }}
          onClick={()=>{handleSubmit()}}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default WalletTransfer;