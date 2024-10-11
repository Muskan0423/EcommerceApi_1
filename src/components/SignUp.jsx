import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emailHandler,fNameHandler,lNameHandler,genderHandler, passHandler, setCredentials, validation, clearDetails } from '../slices/userSlice';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"






function Signup() {


  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const {fNameVal,lNameVal,passVal,emailVal,genderVal,validate} = useSelector((state)=> state.user)


 


   async function handleSubmit(e) {
    e.preventDefault();
      dispatch(validation("signin"))

      const userData = {
        firstname:fNameVal,lastname:lNameVal,gender:genderVal, email:emailVal, password:passVal,role:"user"
      }

      console.log(userData);
      
    try {
        const response = await axios.post("https://ecommerce-api-8ga2.onrender.com/api/user/register",userData,{ withCredentials: true });

      
console.log(response);


      dispatch(clearDetails());

    } catch (error) {
      
     console.log(error.message);
     
    }

      


    
  }


  
  
  return (
    <>
     
      <div className="font-[sans-serif] bg-white max-w-4xl flex items-center mx-auto md:h-screen p-2">
      <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
        <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-slate-500 to-slate-800 lg:px-8 px-4 py-4">
          <div>
            <h4 className="text-white text-lg font-semibold">Create Your Account</h4>
            <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">Welcome to our registration page! Get started by creating your account.</p>
          </div>
         
        </div>

        <form onSubmit={handleSubmit} className="md:col-span-2 w-full py-6 px-6 sm:px-16">
          <div className="mb-6">
            <h3 className="text-gray-800 text-2xl font-bold">Create an account</h3>
            <h5 className='text-red-500'>{validate[0]}</h5>
          </div>

          <div className="space-y-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">First Name</label>
              <div className="relative flex items-center">
                <input name="fName" type="text"  value={fNameVal} onChange={(e) => dispatch(fNameHandler(e.target.value))} className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter name" />
               
              </div>
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Last Name</label>
              <div className="relative flex items-center">
                <input name="lName" type="text"  value={lNameVal} onChange={(e) => dispatch(lNameHandler(e.target.value))} className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter name" />
               
              </div>
            </div>


          





            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
              <div className="relative flex items-center">
                <input name="email" type="email"  value={emailVal} onChange={(e) => dispatch(emailHandler(e.target.value))} className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" />
              
              </div>
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
              <div className="relative flex items-center">
                <input name="email" type="email" required value={email} onChange={(e) => dispatch(emailHandler(e.target.value))} className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" />
              
              </div>
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
              <div className="relative flex items-center">
                <input name="email" type="email" required value={email} onChange={(e) => dispatch(emailHandler(e.target.value))} className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" />
              
              </div>
            </div>



            <div>
            <label className="text-gray-800 text-sm mb-2 block">Select Gender</label>
            <div className="relative flex items-center ">
              <select name="gender p-5" id="" value={genderVal} onChange={(e)=>dispatch(genderHandler(e.target.value))}>
                <option value="m">Male</option>
                <option value="f">Female</option>
                <option value="o">Other</option>
                <option value="not">Not prefer to say</option>
              </select>
            </div>

            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <div className="relative flex items-center">
                <input name="password" type="password"  value={passVal} onChange={(e) => dispatch(passHandler(e.target.value))} className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter password" />
               
              </div>
            </div>

           

           

          
          </div>

          <div className="!mt-12">
            <button type="submit" className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-slate-700 hover:bg-gray-800 focus:outline-none">
              Create an account
            </button>
          </div>
          <p className="text-gray-800 text-sm mt-6 text-center">Already have an account? <Link to="/login" className="text-slate-600 font-semibold hover:underline ml-1">Login here</Link></p>
        </form>
      </div>
    </div>
    </>
  );
}

export default Signup;
