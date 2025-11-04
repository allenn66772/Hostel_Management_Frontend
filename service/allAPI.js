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
 //get data of user
 export const getUSerAPI =async()=>{
    return await commonAPI("GET",`${BASEURL}/userdata`)
  }
//get login data from user
export const getUserByEmailAPI=async(email)=>{
    return await commonAPI("get",`${BASEURL}/userdata?email=${email}`,{})
}
//add data from staff register
export const registerStaffAPI =async(reqbody)=>{
    return await commonAPI("POST",`${BASEURL}/staffdata`,(reqbody))
}
// get login data from staff
export const getStaffByEmailAPI =async(email)=>{
    return await commonAPI("get",`${BASEURL}/staffdata?email=${email}`,{})
}
// add fees status 
export const getFeesDataAPI = async (reqBody) => {
  return await commonAPI("POST", `${BASEURL}/feesData`, reqBody);
};
//get fees status
export const getFeesAPI =async()=>{
    return await commonAPI ("GET",`${BASEURL}/feesData`)
}