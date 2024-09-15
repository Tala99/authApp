import { useFormik } from 'formik'
import React from 'react'
import axios from 'axios';

export default function login() {
    const formik=useFormik({
        initialValues:{
            email:"",
            password:"",
        },onSubmit:LoginUser,
        validate:values=>{
            let errors={};
            if(values.email.length<=10){
                errors.email="email is required!!!!!!!!";
            }
            if(values.password.length<=3){
                errors.password="password is required!!!!!!!!";
            }

            return errors;
        }
    });
   async function LoginUser(){
        //console.log(formik.values);
       const {data}= await axios.post('https://ecommerce-node4.onrender.com/auth/signin',formik.values);
        console.log(data);
    }
    console.log(formik.values);
  return (
      <div>
          <h1>Log in</h1>
          <form onSubmit={formik.handleSubmit}>
              <div className="form-floating mb-3">
                  <input type="email" className="form-control"onChange={formik.handleChange}  name="email" value={formik.email} onBlur={formik.handleBlur} id="email" placeholder=" " />
                  <label htmlFor="email">User Email</label>
                  {formik.touched.email && formik.errors.email? <div className='alert alert-danger'>{formik.errors.email}</div>:null}
              </div>
              <div className="form-floating mb-3">
                  <input type="password" className="form-control" onChange={formik.handleChange}  name="password" value={formik.password} onBlur={formik.handleBlur} id="password" placeholder=" " />
                  <label htmlFor="password">User Password</label>
                  {formik.touched.password && formik.errors.password? <div className='alert alert-danger'>{formik.errors.password}</div>:null}
              </div>
              <button type='submit' className='btn btn-outline-info'>Log in</button>
          </form>
      </div>


  )
}