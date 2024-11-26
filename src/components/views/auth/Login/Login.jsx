import React, {useState} from "react";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import {swal} from "../../../../utils/swal"
import "../Auth.styles.css";
import { loginRoute } from "../../../../utils/APIRoutes";


const Login = () => {
    const navigate = useNavigate();
    const initialValues = {
        email: "",
        password: ""
    };
    const required = "* Es obligatorio completarlo";

    const validationSchema = () =>
      Yup.object().shape({
            email: Yup.string()
                .email('email invalido')
                .required(required),
            password: Yup.string().required(required),
      });
    
      
    const onSubmit = () => {
        const { email, password } = values;
        fetch(`${loginRoute}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
        },
        body: JSON.stringify({
                email,
                password,
            }),
        })
        .then(async(response) => {
            const data = await response.json()
            return{
                status: response.status,
                user: data
            }
        })
        .then((data) => {
            if (data.status=== 200) {
                const user = sessionStorage.setItem("user", JSON.stringify(data.user));
                navigate("/home", { replace: true });
            } else {
                swal(data);
            }
        });
    };
    const formik = useFormik({ initialValues, validationSchema, onSubmit });

    const { handleSubmit, handleChange, errors, touched, handleBlur, values } = formik;
    return (
    <>
        <div className="auth">
            <form onSubmit={handleSubmit}>
                <span className='form--title'>Nueva cuenta</span>
                {/* Email */}
                <div className='container__box'>
                    <div className='container--input'>
                        <input 
                            type="text" 
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            required={values.email? "" :"required"} 
                        />
                        <span>Correo</span>
                        <i></i>
                    </div>
                    {errors.email && touched.email && (<div className='error'>{errors.email}</div>)}
                </div>
                {/* Password */}
                <div className='container__box'>
                    <div className='container--input'>
                        <input 
                            type="password" 
                            name="password"
                            onChange={handleChange}
                            value={values.password}
                            onBlur={handleBlur}
                            required={values.password? "" :"required"} 
                        />
                        <span>Contraseña</span>
                        <i></i>
                    </div>
                    {errors.password && touched.password && (<div className='error'>{errors.password}</div>)}
                </div>
                    <button type="submit">Enviar</button>
                    {/* <div style={{height: "10px", width: "10px", background: "#000"}} onClick={()=> dispatch(getUser(localStorage.getItem("user")))}></div> */}
                    <Link to='/register'>Registrame</Link>
            </form>
        </div>
    </>
    )
}

export default Login