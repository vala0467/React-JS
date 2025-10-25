
import React, { useContext, useState } from 'react';
import './app.css';

var AccountContextMemory = React.createContext(null);
var sessionDataMemory = React.createContext(null);

function InsurenceDetails() {
    var details = {
        offer: '20% discount',
        type: 'Life insurence',
        org: 'Relience life insurence'
    }
    return (
        <>
            {/* <b>Account balance {accountbalance}</b> */}
            <ul>
                <li className='title'>Insurence Details</li>
                <li>Offer :{details.offer}</li>
                <li>Insurence Type :{details.type}</li>
                <li>Insurence Provider :{details.org}</li>

            </ul>
        </>
    )
}


function AccountStatement() {
    var contextRef = useContext(AccountContextMemory);
    var sessionRef = useContext(sessionDataMemory);
    console.log(sessionRef);
    console.log(contextRef);
    var accountStatementDetails = [
        {
            transactionType: 'debit',
            amount: 20,
            date: '15/10/2025'
        },
        {
            transactionType: 'credit',
            amount: 1000,
            date: '16/10/2025'
        },
         {
            transactionType: 'debit',
            amount: 566,
            date: '11/10/2025'
        }
    ]
    return (
        <>
            <b>The current account balance -> {contextRef.accountBalance}</b>
            <table className='table table-borderd'>
                <thead>
                    <tr>
                        <th>sno</th>
                        <th>TransactionType</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        accountStatementDetails.map((transaction, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{transaction.transactionType}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.date}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export function ContextMemoryDemo() {
    const[a, setA] = useState(0);
    var accountDetails = {
        name: 'Kevin Grey',
        accountBalance: 2000000,
        accountType: 'Current'
    }
    return (
        <>
            <h3>User account Details Page</h3>
            <ul>
                <li className='title'>Account details</li>

                <li>Account Holder name - {accountDetails.name}</li>
                <li>Account Balance - {accountDetails.accountBalance}</li>
                <li>Account Type - {accountDetails.accountType}</li>
            </ul>
            <hr />
            <sessionDataMemory.Provider value={10000}>
                <AccountContextMemory.Provider value={accountDetails}>
                    <AccountStatement></AccountStatement> 
                </AccountContextMemory.Provider>
                <InsurenceDetails></InsurenceDetails>
            </sessionDataMemory.Provider>
            <hr />
            
        </>
    )
}