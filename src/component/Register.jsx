import { useFormik } from 'formik'
import React from 'react'
import axios from 'axios';

export default function Register() {
    const formik=useFormik({
        initialValues:{
            userName:"",
            email:"",
            password:"",
        },onSubmit:RegisterUser
    });
   async function RegisterUser(){
        //console.log(formik.values);
       const {data}= await axios.post('https://ecommerce-node4.onrender.com/auth/signup',formik.values);
        console.log(data);
    }
    console.log(formik.values);
  return (
      <div>
          <h1>Register</h1>
          <form onSubmit={formik.handleSubmit}>
              <div className="form-floating mb-3">
                  <input type="text" className="form-control"onChange={formik.handleChange}  name="userName" value={formik.userName} id="name" placeholder=" " />
                  <label htmlFor="name">User Name</label>
              </div>
              <div className="form-floating mb-3">
                  <input type="email" className="form-control"onChange={formik.handleChange}  name="email" value={formik.email} id="email" placeholder=" " />
                  <label htmlFor="email">User Email</label>
              </div>
              <div className="form-floating mb-3">
                  <input type="password" className="form-control" onChange={formik.handleChange}  name="password" value={formik.password} id="password" placeholder=" " />
                  <label htmlFor="password">User Password</label>
              </div>
              <button type='submit' className='btn btn-outline-info'>Register</button>
          </form>
      </div>


  )
}
