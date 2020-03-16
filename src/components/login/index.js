import React, {Component, useEffect, useState} from 'react';
import { Redirect } from "react-router";    
import { Formik } from "formik";
import * as yup from "yup";
import './style.scss';

const schema = yup.object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("password is required")
});

function Login() {

    const [redirect, setRedirect] = useState(false);
    const handleSubmit = async e => {
        const isValid = await schema.validate(e);
        if (!isValid) return;
        setRedirect(true);
    };

    useEffect(() => {});    

    if (redirect) return <Redirect to="/dashboard" />;

        return(
            <div id="login">
                <div className="main-outercontainer">
                    <div className="main-innercontainer">
                        <h1 className="header-text">PROJECTO</h1>
                        
                        <Formik 
                            validationSchema={schema}
                            onSubmit={handleSubmit}
                            // initialValues={JSON.parse(localStorage.getItem("chatData") || "{}")}
                        >
                            {({
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                values,
                                touched,
                                isInvalid,
                                errors
                            }) => (
                                <form noValidate onSubmit={handleSubmit}>
                                    <row>
                                        {/* <group as={Col} md="12" controlId="handle"> */}
                                        <group>
                                            <input
                                                type = "text"
                                                name = "username"
                                                placeholder = "username"
                                                // value = {values.handle || ""}
                                                // onChange = {handleChange}
                                                // isInvalid = {touched.handle && errors.handle}
                                            />
                                            {errors.username}
                                        </group>
                                        <group>
                                            <input
                                                type = "text"
                                                name = "password"
                                                placeholder = "password"
                                                // value = {values.handle || ""}
                                                // onChange = {handleChange}
                                                // isInvalid = {touched.handle && errors.handle}
                                            />
                                            {errors.password}
                                        </group>

                                    </row>

                                    <button type="submit">
                                        Login
                                    </button>
                                </form>
                            )}
                        </Formik>
                        
                    </div>
                </div>
            </div>
        );       
}

export default Login;