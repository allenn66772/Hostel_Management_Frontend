import commonAPI from "./commonAPI";
import BASEURL from "./serviceURL";




//add data from Admin 
export const registerAdminAPI = async(reqbody)=>{
    return await commonAPI("POST",`${BASEURL}/admindata`,(reqbody))
}
// get login data of admin
export const getAdminByEmailAPI =async(email)=>{
    return await commonAPI("get",`${BASEURL}/admindata?email=${email}`,{})
}
//add data from user register
 export const registerUserAPI =async(reqbody)=>{
    return await commonAPI("POST",`${BASEURL}/userdata`,(reqbody))
 }
//get login data from user
export const getUserByEmailAPI=async(email)=>{
    return await commonAPI("get",`${BASEURL}/userdata?email=${email}`,{})
}