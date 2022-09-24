import React, { useState } from 'react';
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import {swal} from "../../../../utils/swal"
import "../Auth.styles.css";

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

const Register = () => {
	const navigate = useNavigate();
	const [ infoEmail, setEmail ] = useState(false)
	const initialValues = {
		fullname: "",
		email: "",
		password: "",
		confirm: "",
	};
	const required = "* Este campo es obligatorio";

	const validationSchema = () =>
		Yup.object().shape({
				fullname: Yup.string()
					.min(15, "Muy corto!")
					.required(required),
				email: Yup.string()
					.email('email invalido!') 
					.required(required),
				password: Yup.string().required(required),
				confirm: Yup.string()
					.when("password", {
						is: value => (value && value.length > 0 ? true : false),
						then: Yup.string().oneOf(
							[Yup.ref("password")],
							'Las contraseñas deben coincidir!')
						})	
					.required(required)
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
				<h2>Resgistrar me</h2>
				<form onSubmit={handleSubmit}>
					{/* FullName */}
					<div className='container__box'>
						<div className='container--input'>	
							<input 
								type="text" 
								name="fullname"
								onChange={handleChange}
								value={values.fullname}
								onBlur={handleBlur}
								required={values.fullname? "" :"required"}
							/>
							<span >Nombre Completo</span>
							<i></i>
						</div>
						{errors.fullname && touched.fullname && (<div className='error'>{errors.fullname}</div>)}
					</div>
					{/* Email */}
					<div className='container__box'>
						<div className='container--input'>
							<input 
								type="text" 
								name="email"
								onChange={(e) => {
									handleChange(e)
									setEmail(e.target.value)
									console.log(infoEmail)
								}}
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
					{/* Comfirm Password */}
					<div className='container__box'>
						<div className='container--input'>
							<input 
								type="password" 
								name="confirm"
								onChange={handleChange}
								value={values.confirm}
								onBlur={handleBlur}
								required={values.confirm? "" :"required"} 
								/>
							<span> Confirm contraseña</span>
							<i></i>
						</div>
						{errors.confirm && touched.confirm && (<div className='error'>{errors.confirm}</div>)}
					</div>
						<button type="submit">Enviar</button>
						<Link to='/login'>Ya tengo cuenta</Link>
				</form>
			</div>
		</>
		);
	}
 
export default Register;