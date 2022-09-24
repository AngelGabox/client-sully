import React from "react";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import {swal} from "../../../../utils/swal"
import "../Auth.styles.css";

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

const Login = () => {
    const navigate = useNavigate();
    const initialValues = {
        fullname: "",
        email: "",
        password: "",
        confirm: "",
    };
    const required = "* Es obligatorio completarlo";

    const validationSchema = () =>
      Yup.object().shape({
            fullname: Yup.string()
                .min(30, "Muy corto")
                .required(required),
            password: Yup.string().required(required),
      });
    
      
      const onSubmit = () => {
        const { userName, password } = values;
    
        fetch(`${API_ENDPOINT}auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
          },
          body: JSON.stringify({
                userName,
                password,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status_code === 200) {
                    localStorage.setItem("token", data?.result?.token);
                    localStorage.setItem("userName", data?.result?.user.userName);
                    navigate("/", { replace: true });
                } else {
                    swal();
                }
            });
        };
        const formik = useFormik({ initialValues, validationSchema, onSubmit });
    
        const { handleSubmit, handleChange, errors, touched, handleBlur, values } = formik;
        return (
        <>
            <div className="auth">
                <form onSubmit={handleSubmit}>
                    {/* FullName */}
                    <div>
                        <label htmlFor="">Nombre Completo</label>
                        <input 
                            type="text" 
                            name="fullname"
                            onChange={handleChange}
                            value={values.password}
                            onBlur={handleBlur} 
                        />
                        {errors.fullname && touched.fullname && (<div>{errors.fullname}</div>)}
                    </div>
                    {/* Email */}
                    <div>
                        <label htmlFor="">Correo</label>
                        <input 
                            type="email" 
                            name="email"
                            onChange={handleChange}
                            value={values.password}
                            onBlur={handleBlur} 
                        />
                        {errors.email && touched.email && (<div>{errors.email}</div>)}
                    </div>
                    {/* Password */}
                    <div>
                        <label htmlFor="">Contraseña</label>
                        <input 
                            type="password" 
                            name="password"
                            onChange={handleChange}
                            value={values.password}
                            onBlur={handleBlur} 
                        />
                        {errors.password && touched.password && (<div>{errors.password}</div>)}
                    </div>
                    {/* Comfirm Password */}
                    <div>
                        <label htmlFor="">Contraseña</label>
                        <input 
                            type="password" 
                            name="confirm"
                            onChange={handleChange}
                            value={values.password}
                            onBlur={handleBlur} 
                        />
                        {errors.confirm && touched.confirm && (<div>{errors.confirm}</div>)}
                        </div>
                        <button type="submit">Enviar</button>
                        <Link to='/register'>Registrame</Link>
                </form>
            </div>
        </>
    )
}

export default Login