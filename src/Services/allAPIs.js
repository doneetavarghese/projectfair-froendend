import {serverURL} from "./serverURL"
import {commonAPI} from "./commonAPI"

// REGISTER API CALL 
export const registerAPI = async(user)=>{
    return await commonAPI("post",`${serverURL}/register`,user,"")
}

// LOGIN API CALL
export const loginAPI = async(user)=>{
    return await commonAPI("post",`${serverURL}/login`,user,"")
}

// add project api call
export const addprojectAPI= async(reqbody,reqheader)=>{
    return await commonAPI("post",`${serverURL}/project/add-project`,reqbody,reqheader)

}

// add home project api call
   export const getHomeprojectAPI = async()=>{
    return await commonAPI("get",`${serverURL}/project/home-project`,"","")
   }

// get all project api call
   export const getUserprojectAPI = async(searchkey,reqheader)=>{
    return await commonAPI("get",`${serverURL}/project/get-all-project?search=${searchkey}`,"",reqheader)

   }

// api call for myprojects get particular project
export const getAuserproject=async(reqheader)=>{
    return await commonAPI("get",`${serverURL}/project/get-auser-project`,"",reqheader)
}