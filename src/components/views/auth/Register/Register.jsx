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
		firstName: "",
		secondLastname: "",
		lastname: "",
		secondLastname: "",
		email: "",
		password: "",
		confirm: "",
	};
	const required = "* Este campo es obligatorio";

	const validationSchema = () =>
		Yup.object().shape({
				firstName: Yup.string("only letter")
				// .when("firstName", {
				// 	is: value => value.has
				// })
				.strict()
				.required(required),
				secondName: Yup.string()
					.required(required),
				lastname: Yup.string()
					.required(required),
				secondLastname: Yup.string()
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
		const { firstName, secondName, lastname, secondLastname, email, password} = values;
		const rol = 'student'
		fetch(`${API_ENDPOINT}user/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
		},
		body: JSON.stringify({
				firstName,
				secondName,
				lastname,
				secondLastname,	
				email,
				password,
				rol
			}),
		})
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
			if (data.status_code === 200) {
				localStorage.setItem("isLogged", data?.isLogged);
				localStorage.setItem("user", data?.user);
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
					{/* FirstName*/}
					<div className='container__box'>
						<div className='container--input'>	
							<input 
								type="text" 
								name="firstName"
								onChange={handleChange}
								value={values.firstName}
								onBlur={handleBlur}
								required={values.firstName? "" :"required"}
							/>
							<span >Primer Nombre</span>
							<i></i>
						</div>
						{errors.firstName && touched.firstName && (<div className='error'>{errors.firstName}</div>)}
					</div>
					{/*SecondName */}
					<div className='container__box'>
						<div className='container--input'>	
							<input 
								type="text" 
								name="secondName"
								onChange={handleChange}
								value={values.secondName}
								onBlur={handleBlur}
								required={values.secondName? "" :"required"}
							/>
							<span >Segundo Nombre</span>
							<i></i>
						</div>
						{errors.secondName && touched.secondName && (<div className='error'>{errors.secondName}</div>)}
					</div>
					{/* Lastname*/}
					<div className='container__box'>
						<div className='container--input'>	
							<input 
								type="text" 
								name="lastname"
								onChange={handleChange}
								value={values.lastname}
								onBlur={handleBlur}
								required={values.lastname? "" :"required"}
							/>
							<span >Primer Apellido</span>
							<i></i>
						</div>
						{errors.lastname && touched.lastname && (<div className='error'>{errors.lastname}</div>)}
					</div>
					{/* Second Lastname*/}
					<div className='container__box'>
						<div className='container--input'>	
							<input 
								type="text" 
								name="secondLastname"
								onChange={handleChange}
								value={values.secondLastname}
								onBlur={handleBlur}
								required={values.secondLastname? "" :"required"}
							/>
							<span >Segundo Nombre</span>
							<i></i>
						</div>
						{errors.secondLastname && touched.secondLastname && (<div className='error'>{errors.secondLastname}</div>)}
					</div>
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
							<span> Confirmar contraseña</span>
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