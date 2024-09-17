import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Form = () => {
    const formik = useFormik({
        initialValues:{
            firstname: "",
            lastname:"",
            email:"",
            password:""
        },
        validationSchema:yup.object({
            firstname:yup.string().min(4, "firstname is too short").required("firstname is required"),
            lastname:yup.string().max(20, "lastname is too long").required("lastname is required"),
            email:yup.string().email("email is not valid").required("email is required"),
            password:yup.string().matches(`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])`, "at least one upper case English letter, one lower case English letter and one number ").required("password is required")
        }),
        onSubmit:(value)=>{
           console.log(value);
           axios.post("http://localhost:3505/users",value)
           .then((res)=>{
            toast.success("signup successful")
            console.log(res);
           }).catch((err)=>{
            console.log(err);
           })
           
        }
    })
    console.log(formik.errors);
    
   console.log(formik.touched);
   
  return (
    <div>
        <form className='w-50 mx-auto px-3 py-3 shadow' onSubmit={formik.handleSubmit} >
            <div className='form-group mt-3'>
                <label htmlFor="">Firstname</label>
                <input className='form-control' name="firstname" onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" />
                <small className='text-danger '>{formik.touched.firstname? formik.errors.firstname : "" }</small>
            </div>
            <div className='form-group mt-3'>
                <label htmlFor="">Lastname</label>
                <input className='form-control' name="lastname" onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" />
                <small className='text-danger '>{formik.touched.lastname ?  formik.errors.lastname : ""}</small>
            </div>
            <div className='form-group mt-3'>
                <label htmlFor="">Email</label>
                <input className='form-control' name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" />
                <small className='text-danger '>{formik.touched.email? formik.errors.email : ""}</small>
            </div>
            <div className='form-group mt-3'>
                <label htmlFor="">Password</label>
                <input className='form-control' name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" />
                <small className='text-danger '>{formik.touched.password ? formik.errors.password : ""}</small>
            </div>
             <button className='btn btn-primary mt-3' type='submit'>Register</button>
             <ToastContainer/>
        </form>

    </div>
  )
}

export default Form