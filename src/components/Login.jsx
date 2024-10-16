import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  emailHandler,
  passHandler,
  setUserdetail,
  validation,
} from "../slices/userSlice";

import { Link, useLocation, useNavigate } from "react-router-dom";


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.state;


  const {emailVal,passVal,validate} = useSelector((state)=> state.user)



  async function handleLogin(e) {
    e.preventDefault();
    dispatch(validation({ type: "login" }));


      const userData = {email:emailVal,password:passVal,role:"user"}
      try {
        const response = await axios.post("https://ecommerce-api-8ga2.onrender.com/api/user/login",userData,{ withCredentials: true })
        const {firstname,lastname,email}=response.data.user;
        dispatch(setUserdetail({name:firstname+" "+lastname,email}))
        if(path){
          navigate("/cart")
        }else{
          navigate("/")
        }
        
      } catch (error) {
        
      }

      
      



  }

  return (
    <>
      <form
        onSubmit={handleLogin}
        className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
         
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                onChange={(e) => dispatch(emailHandler(e.target.value))}
                value={emailVal}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                onChange={(e) => dispatch(passHandler(e.target.value))}
                value={passVal}
                className="block w-full rounded-md border-0 py-1.5 mb-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-slate-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
            >
              Sign in
            </button>
          </div>

          <p className="mt-10 text-center text-md text-gray-500 mr-4">
            Access to user
            <Link
              to="/signUp"
              className="font-semibold leading-6 text-slate-600 hover:text-cyan-500 ml-2"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}

export default Login;
