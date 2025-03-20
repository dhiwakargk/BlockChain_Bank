import React, { useState } from 'react';
import fundtransferabi from "./ABI/fund_transfer.json"
import { ethers } from 'ethers';
const Fundform = () => {
  const [formData, setFormData] = useState({
    accountFrom: '',
    accountTo: '',
    amount: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async() => {
    let fund_contract_address="0xF97f92d0805C6eb6D12d92BaF402B6a97e85CE60"
    let account=await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log("Fund Transfer")
    let provider = await new ethers.providers.Web3Provider(window.ethereum);
    let signer =await provider.getSigner();
    let contract= await new ethers.Contract(fund_contract_address,fundtransferabi,signer)
    let c=await contract.Transfer(ethers.utils.getAddress(formData.accountFrom),ethers.utils.getAddress(formData.accountTo),formData.amount,formData.description)
    let tx=await c.wait()
    

  };

  return (
    <div style={styles.container}>
      <h2>Fund Transfer</h2>
      <div  style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="account-from">From Account:</label>
          <input
            type="text"
            id="account-from"
            name="accountFrom"
            placeholder="Enter your account number"
            value={formData.accountFrom}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="account-to">To Account:</label>
          <input
            type="text"
            id="account-to"
            name="accountTo"
            placeholder="Enter recipient's account number"
            value={formData.accountTo}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter transfer details"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            style={styles.textarea}
          ></textarea>
        </div>
        <button type="submit" style={styles.button} onClick={()=>{handleSubmit()}} >Transfer Funds</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    color:'black',
    backgroundColor:'whitesmoke'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    backgroundColor:'whitesmoke',
    color:'black'
  
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Fundform;