import { Link } from "react-router-dom"
import useForm from "../../hooks/useForm"
import { useContext } from "react"
import { AuthContext } from "../../contexts/authContext"

export function Register() {
    const { registerSubmitHandler, serverError } = useContext(AuthContext)
    const { formValues, onSubmit, onChangeHandler } = useForm(registerSubmitHandler, {
        email: '',
        password: '',
        rePass: '',
    })

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com" value={formValues.email} onChange={onChangeHandler} />

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" value={formValues.password} onChange={onChangeHandler} />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="rePass" id="rePass" value={formValues.rePass} onChange={onChangeHandler} />

                    <input className="btn submit" type="submit" value="Register" />

                    {serverError?.registerErrorMsg && <p style={{color: 'red', margin: '2em'}}>{serverError.registerErrorMsg}</p>}

                    <p className="field">
                        <span>If you already have profile click <Link to='/login'>here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    )
}