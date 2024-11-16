import axios from "axios";
import { addtoLogindata, removedata } from "./assets/redux/Loginslice";

 
 export const SignupData=async(data)=>{
    console.log('second check',data);
    
    try {
  const signupinfo=await axios.post('http://localhost:7000/moon/postData',data)
            console.log('final answer',signupinfo);
            
        } catch (error) {
        console.log(error);
        
        
    }
 }
 export const LogData=async(data,dispatch)=>{
    console.log('second check',data);
    
    try {
        const loginfo=await axios.post('http://localhost:7000/logindata/login',data)
        console.log(loginfo.data);
        dispatch(addtoLogindata(loginfo.data))
        
    } catch (error) {
        console.log(error);
        
    }
 }
 export const UpdateData=async(id,data)=>{
    try {
        const updateinfo=await axios.put(`http://localhost:7000/moon/update/${id}`,data)
        console.log('updte data',updateinfo);
        
    } catch (error) {
        console.log(error);
        
        
    }
 }
 export const DeleteDatas=async(id,dispatch)=>{
    try {
        const clear=await axios.delete(`http://localhost:7000/moon/delete/${id}`)
        console.log(clear.data.message);
        clear.data? dispatch(removedata()):null
        
    } catch (error) {
        console.log(error);
        
        
    }
 }
 export const ProfileData=async(id)=>{
    try{
const responsesingleData=await axios.get(`http://localhost:7000/moon/getData/${id}`)
console.log("final answer get in single data",responsesingleData.data);
return responsesingleData.data

    }catch(err){

    }
}