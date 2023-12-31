import { Link } from "react-router-dom"
import useForm from "../../hooks/useForm"
import { useContext } from "react"
import { AuthContext } from "../../contexts/authContext"

export function Login() {
    const { loginSubmitHandler, serverError } = useContext(AuthContext)
    const { formValues, onSubmit, onChangeHandler } = useForm(loginSubmitHandler, {
        email: '',
        password: ''
    })

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" value={formValues.email} onChange={onChangeHandler} />

                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" value={formValues.password} onChange={onChangeHandler} />
                    {serverError?.loginErrorMsg && <p style={{color: 'red', margin: '2em'}}>{serverError.loginErrorMsg}</p>}

                    <input type="submit" className="btn submit" />

                    <p className="field">
                        <span>If you don&apos;t have profile click <Link to='/register'>here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    )
}