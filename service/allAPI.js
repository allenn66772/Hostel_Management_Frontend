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
//add data from staff register
export const registerStaffAPI =async(reqbody)=>{
    return await commonAPI("POST",`${BASEURL}/staffdata`,(reqbody))
}
// get login data from staff
export const getStaffByEmailAPI =async(email)=>{
    return await commonAPI("get",`${BASEURL}/staffdata?email=${email}`,{})
}



// Room section API's

// add room
export const addRoomAPI = async(roomDetails)=>{
    return await commonAPI("POST", `${BASEURL}/roomData`, roomDetails)
}

//get room
export const getRoomAPI = async ()=>{
    return await commonAPI("GET", `${BASEURL}/roomData`,{})
}

// edit room
export const editRoomAPI = async (id, roomDetails)=>{
    return await commonAPI("PUT", `${BASEURL}/roomData/${id}`, roomDetails)
}