import React, { useState } from 'react';
import { ethers } from "ethers";
import Addbeneficiery from "./ABI/beneficiery.json"
const Benifit = () => {
  const [formData, setFormData] = useState({
    beneficiaryName: '',
    accountNumber: '',
    confirmAccountNumber: '',
    bankName: '',
    ifscCode: '',
    transferType: '',
    mobileNumber: '',
    transactionLimit: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let formErrors = {};
    
    if (!formData.beneficiaryName) {
      formErrors.beneficiaryName = 'Beneficiary Name is required';
    }
    if (!formData.accountNumber) {
      formErrors.accountNumber = 'Account Number is required';
    }
    if (formData.accountNumber !== formData.confirmAccountNumber) {
      formErrors.confirmAccountNumber = 'Account Number and Confirm Account Number must match';
    }
    if (!formData.bankName) {
      formErrors.bankName = 'Bank Name is required';
    }
    if (!formData.ifscCode) {
      formErrors.ifscCode = 'IFSC Code is required';
    }
    if (!formData.transferType) {
      formErrors.transferType = 'Transfer Type is required';
    }
    if (!formData.mobileNumber || formData.mobileNumber.length !== 10) {
      formErrors.mobileNumber = 'Valid 10-digit Mobile Number is required';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async() => {
    //e.preventDefault();
    if (validate()) {
     let benefit_contract_address="0x577FaC7f2fb7E0086BAF59eB29493067675DAda4"
     let account=await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log("AddBeneficiery")
            let provider = await new ethers.providers.Web3Provider(window.ethereum);
            let signer =await provider.getSigner();
            let contract= await new ethers.Contract(benefit_contract_address,Addbeneficiery,signer)
            console.log("Add beneficiery contract:",contract) 
            let c=await contract.Add_user_Accounts(formData.beneficiaryName,ethers.utils.getAddress(formData.accountNumber),ethers.utils.getAddress(formData.accountNumber),formData.bankName,formData.ifscCode,formData.transferType,formData.mobileNumber)
            let tx=await c.wait()
            console.log("Transaction hash:",tx)
            let status=await contract.Status()
            console.log("Status:",status)
            alert(status)
      
    }
  };

  return (
    <div style={styles.container}>
      <h2>Add Beneficiary</h2>
      <div  style={styles.form}>
        <div style={styles.formGroup}>
          <label>Beneficiary Name:</label>
          <input
            type="text"
            name="beneficiaryName"
            value={formData.beneficiaryName}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.beneficiaryName && <span style={styles.error}>{errors.beneficiaryName}</span>}
        </div>

        <div style={styles.formGroup}>
          <label>Account Number:</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.accountNumber && <span style={styles.error}>{errors.accountNumber}</span>}
        </div>

        <div style={styles.formGroup}>
          <label>Confirm Account Number:</label>
          <input
            type="text"
            name="confirmAccountNumber"
            value={formData.confirmAccountNumber}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.confirmAccountNumber && <span style={styles.error}>{errors.confirmAccountNumber}</span>}
        </div>

        <div style={styles.formGroup}>
          <label>Bank Name:</label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.bankName && <span style={styles.error}>{errors.bankName}</span>}
        </div>

        <div style={styles.formGroup}>
          <label>IFSC Code:</label>
          <input
            type="text"
            name="ifscCode"
            value={formData.ifscCode}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.ifscCode && <span style={styles.error}>{errors.ifscCode}</span>}
        </div>

        <div style={styles.formGroup}>
          <label>Transfer Type:</label>
          <select
            name="transferType"
            value={formData.transferType}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Select</option>
            <option value="NEFT">Bitcoin</option>
            <option value="RTGS">Ethereum</option>
            
          </select>
          {errors.transferType && <span style={styles.error}>{errors.transferType}</span>}
        </div>

        <div style={styles.formGroup}>
          <label>Mobile Number:</label>
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.mobileNumber && <span style={styles.error}>{errors.mobileNumber}</span>}
        </div>

        <div style={styles.formGroup}>
          <label>Transaction Limit (Optional):</label>
          <input
            type="text"
            name="transactionLimit"
            value={formData.transactionLimit}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button} onClick={()=>{handleSubmit()}}>Add Beneficiary</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
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
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor:'whitesmoke' ,
    color:'black'
  },
  button: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '12px',
  },
};

export default Benifit;