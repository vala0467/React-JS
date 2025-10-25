export function ObjectIterator() {
    var customerAccountDetails = {
        name: 'Raj',
        accountNo: '009234234234',
        accountType: 'Savings',
        balanceAmount: 20000,
        branchCode: 'GPA_124'
    }
    
    return (
        <div>
            Object iterator
            <h3>
                Account Details
            </h3>
            <ul>
                {
                    Object.keys(customerAccountDetails).map((key) => (
                        <li><b>{key} </b>- {customerAccountDetails[key]}</li>
                    ))
                }
            </ul>
        </div>
    )
}