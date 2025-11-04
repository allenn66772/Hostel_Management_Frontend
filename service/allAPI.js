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

// add fees status 
export const getFeesDataAPI =async(reqbody)=>{
    return await commonAPI("POST",`${BASEURL}/feesData`,(reqbody))
}
// POST - Add complaint
export const complaint = async (reqBody) => {
  return await commonAPI("POST", `${BASEURL}/complaint`, reqBody);
};

// GET - Fetch all complaints
export const getcomplaint = async () => {
  return await commonAPI("GET", `${BASEURL}/complaint`);
};