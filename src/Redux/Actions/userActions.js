import axios from 'axios';
import { BACKEND_URL } from '../../constants/url';

axios.defaults.withCredentials=true;

const URL=BACKEND_URL+"api/v1/user";


export const loginUser=(email,password)=>async(dispatch)=>{
    try {
        dispatch({
            type:"USER_LOGIN_REQUEST"
        })

        const {data}=await axios.post(`${URL}/login`,{email,password},{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true  //security purpose
        });
        dispatch({
            type:"USER_LOGIN_SUCCESS",
            payload:{
                message:data.message,
                id:data.data
            }
        })
    } catch (error) {
        dispatch({
            type:"USER_LOGIN_FAILURE",
            payload:error.response?.data?.message
        })
    }
}

export const verifyLoginOtp=(id,otp)=>async(dispatch)=>{
    try {
        dispatch({
            type:"LOGIN_OTP_REQUEST"
        })
        const {data}= await axios.post(`${URL}/login/verify/${id}`,{otp},{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true 
        });

        dispatch({
            type:"LOGIN_OTP_SUCCESS",
            payload:data.message,
        })

        
    } catch (error) {
        dispatch({
            type:"LOGIN_OTP_FAILURE",
            payload:error?.response?.data?.message
        })
    }
} 

export const registerUser=(details)=>async(dispatch)=>{
    try {
        dispatch({
            type:"USER_REGISTER_REQUEST"
        })
        const{data} =await axios.post(`${URL}/register`,details,{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true  //security purpose
        })
        dispatch({
            type:"USER_REGISTER_SUCCESS",
            payload:{
                message:data.message,
                id:data.data
            }
        })
        
    } catch (error) {
        dispatch({
            type:"USER_REGISTER_FAILURE",
            payload:error?.response?.data?.message
        })
    }
}
export const verifyRegisterOtp=(id,otp)=>async(dispatch)=>{
    try {
        dispatch({
            type:"REGISTER_OTP_REQUEST"
        })
        const {data}= await axios.post(`${URL}/verify/${id}`,{otp},{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true 
        });

        dispatch({
            type:"REGISTER_OTP_SUCCESS",
            payload:data.message,
        })

        
    } catch (error) {
        dispatch({
            type:"REGISTER_OTP_FAILURE",
            payload:error?.response?.data?.message
        })
    }
} 

export const resendLoginOtp=(id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"RESEND_LOGIN_OTP_REQUEST"
        })
        const {data}= await axios.get(`${URL}/login/resend/${id}`)
            dispatch({
                type:"RESEND_LOGIN_OTP_SUCCESS",
                payload:data.message,
            })
        

    } catch (error) {
        dispatch({
            type:"RESEND_LOGIN_OTP_Failure",
            payload:error?.response?.data?.message
        })
    }
}

export const resendRegisterOtp=(id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"RESEND_REGISTER_OTP_REQUEST"
        })
        const {data}= await axios.get(`${URL}/resend/${id}`)
            dispatch({
                type:"RESEND_REGISTER_OTP_SUCCESS",
                payload:data.message,
            })
        

    } catch (error) {
        dispatch({
            type:"RESEND_REGISTER_OTP_FAILURE",
            payload:error?.response?.data?.message
        })
    }
}

export const loadUser=()=>async(dispatch)=>{
    try {
        dispatch({
            type:"LOAD_USER_REQUEST"
        })
        const {data} =await axios.get(`${URL}/me`)
        dispatch({
            type:"LOAD_USER_SUCCESS",
            payload:data.message,
        })
        
    } catch (error) {
        dispatch({
            type:"LOAD_USER_FAILURE",
            payload:error.response?.data?.message
        })
    }
}