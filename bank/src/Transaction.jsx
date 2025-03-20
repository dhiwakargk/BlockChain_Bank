import React, { useEffect, useState } from "react";
import fundtransferabi from "./ABI/fund_transfer.json"
import './Transaction.css';
import { ethers } from "ethers";
const Transaction = () => {
  const [transactions, setTransactions] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const [add,setadd]=useState("")
  const Retrive=async()=>{
    
    let fund_contract_address="0xF97f92d0805C6eb6D12d92BaF402B6a97e85CE60"
    let account=await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log("Fund Transfer")
    let provider = await new ethers.providers.Web3Provider(window.ethereum);
    let signer =await provider.getSigner();
    let contract= await new ethers.Contract(fund_contract_address,fundtransferabi,signer)
    let history=await contract.Transaction_Details(ethers.utils.getAddress(add))
    
    setTransactions(...transactions, history)
    console.log(transactions[0])   
    
    
  }
  
  return (
    <div className="transaction-history">
      <h1>Transaction History</h1>
      <div>
        <label>Search</label>
        <input type="string"placeholder="Enter the address" onChange={(e)=>{setadd(e.target.value)}}></input>
        <button onClick={()=>{Retrive()}}>Sumbit</button>
      </div>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody key={1}>
          {transactions.map((transaction) => (
            <tr key={transaction.id} >
              <td>{transaction.from}</td>
              <td>{transaction.to}</td>
              <td>${Number(transaction.amount)}</td>
              <td>{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;