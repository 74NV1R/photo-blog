import React, { useState } from 'react'
import { Formik } from 'formik'
import { Button } from "reactstrap"

const Login = () => {

    const [count, setCount] = useState(0)
    const [mode, setMode] = useState('Login')


    const switchMode = () => {
        setMode(prevMode => (prevMode === 'Sign up' ? 'Login' : 'Sign up'));
    }


    return (
        <div>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    passwordConfirm: ""
                }}

                onSubmit={(values) => {
                    console.log(values)
                }
                }

                validate={(values) => {
                    const errors = {}

                    if (!values.email) {
                        errors.email = 'Required'
                    }

                    else if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(values.email)) {
                        errors.email = 'Invalid'
                    }


                    if (!values.password) {
                        errors.password = 'required'
                    }
                    else if (values.password.length < 4) {
                        errors.password = 'Must be at least four characters!'
                    }

                    if (mode == 'Sign up') {
                        if (!values.passwordConfirm) {
                            errors.passwordConfirm = 'required'
                        }

                        else if (values.password != values.passwordConfirm) {
                            errors.passwordConfirm = "Password doesn't match!"
                        }
                    }


                    console.log(errors)
                    return errors
                }}


            >

                {({ values, handleChange, handleSubmit }) => (<div>
                    <form onSubmit={handleSubmit}>
                        <Button
                            onClick={switchMode}
                            style={{
                                width: '100%',

                            }}>Switch to {mode === 'Sign up' ? 'Login' : 'Sign up'}</Button>
                        <br />
                        <br />
                        <input
                            name="email"
                            placeholder="Enter your email"
                            className="form-control"
                            value={values.email}
                            onChange={handleChange}
                        />


                        <br />
                        <input
                            name="password"
                            placeholder="Password"
                            className="form-control"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <br />


                        {mode === 'Sign up' ? <div>

                            <input
                                name="passwordConfirm"
                                placeholder="Confirm Password"
                                className="form-control"
                                value={values.passwordConfirm}
                                onChange={handleChange}
                            />
                            <br />
                        </div> : null}



                        <button type="submit" className="btn btn-success">
                            {mode == 'Login' ? 'Login' : 'Sign up'}
                        </button>


                    </form>
                </div>)}


            </Formik>
        </div>
    )
}

export default Login