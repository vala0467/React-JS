
import './app.css'
export function AccountSignupForm() {
    function handleFormSubmit() {
        console.log("frm handle submit")
    }
    return (
        <>
            <h3>User Signup Form</h3>
            <form action={handleFormSubmit}>
                <ul>
                    <li>
                        <input className='form-control' type="text" placeholder='Enter Account Id' name='accountId'></input>
                    </li>
                    <li>
                        <input className='form-control' type='password' placeholder='Account password' name='accountPwd'></input>
                    </li>
                    <li>
                        <input className='form-control' type='password' placeholder='Reenter password' name='r_accountPwd'></input>
                    </li>
                    <li>
                        <input className='form-control' type='text' placeholder='Mail Id' name='mailId'></input>
                    </li>
                    <li>
                        <button>Register</button>
                    </li>
                </ul>
            </form>
        </>
    )
}