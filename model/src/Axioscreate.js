import axios from "axios"
import { json } from "react-router-dom"

const basicurl="http://localhost:7000"
const token=JSON.parse(json.parse(localStorage.getItem('persist:rishirajProject')).loginData)&&JSON.parse(json.parse(localStorage.getItem('persist:rishirajProject')).loginData).jswtoken
console.log('where is token ',token);

export const   Publicrequest= axios.create({
    baseURL:basicurl
})

export const securerequest=axios.create({
    baseURL:basicurl,
    headers:{token:token}
})