import { createSlice, configureStore } from '@reduxjs/toolkit'
import { validate } from 'uuid';




const nameReg = /^[A-Za-z]{3,}$/
const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const genderArr = ["m", "f", "o","not"];


const userSlice = createSlice({
    name: 'user',
    initialState: {
        fNameVal: "",
        lNameVal: "",
        genderVal: "m",
        emailVal: "",
        passVal: "",
        validate: [],
        error: "",
        loggedUser: null,
        userDetail: null,
    },
    reducers: {
        fNameHandler: (state, action) => {
            state.fNameVal = action.payload
        },
        lNameHandler: (state, action) => {
            state.lNameVal = action.payload
        },
        passHandler: (state, action) => {
            state.passVal = action.payload
        },
        emailHandler: (state, action) => {
            state.emailVal = action.payload
        },
        genderHandler: (state, action) => {
            
            state.genderVal = action.payload
        },
        validation: (state, action) => {

            console.log(!nameReg.test(state.fNameVal),!nameReg.test(state.lNameVal));
            
            const err = []
            if (action.payload === "signin") {
                if (!nameReg.test(state.fNameVal)) err.push("Name Should be at least 3 Alphabetic Characters");
                if (!nameReg.test(state.lNameVal)) err.push("last name Should be at least 3 Alphabetic Characters");
                if (!emailRegex.test(state.emailVal)) err.push("Please Check Your Email")
                if (!genderArr.includes[state.genderVal]) err.push("gender not allowed")
                        if (!passwordReg.test(state.passVal)) err.push("Password will be at least 6 characters and contain alphaNumeric")
                else {
                    state.validate = [];
                }
                if (err.length > 0) {
                    state.validate = err;
                }
            }
            else {
                if (!passwordReg.test(state.passVal)) err.push("Password will be at least 6 characters and contain alphaNumeric")
                if (!emailRegex.test(state.emailVal)) err.push("Please Check Your Email")
                else {
                    state.validate = [];
                }
                if (err.length > 0) {
                    state.validate = err;
                }
            }
        },
        clearDetails: function (state, action) {
            state.fNameVal = "",
                state.lNameVal = "",
                state.passVal = "",
                state.emailVal = "",
                state.genderVal = "m"
        },
        setCredentials: function (state, action) {
            state.error = action.payload
        },
        setLoggedUser: function (state, action) {
            state.loggedUser = action.payload;
        },
        setUserdetail: function (state, action) {
            state.userDetail = action.payload
        }
    },


})



export const { fNameHandler, lNameHandler, emailHandler, genderHandler, passHandler, validation, clearDetails, setCredentials, setLoggedUser, setUserdetail } = userSlice.actions
export default userSlice.reducer

