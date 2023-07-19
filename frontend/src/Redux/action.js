import { LOGIN_FAILURE, LOGIN_PENDING, LOGIN_SUCCESSFULL } from "./actionType";

//User Login 
export const User_Login=(obj)=>(dispatch)=>{
    console.log(obj);
    dispatch({type:LOGIN_PENDING})
      return  fetch("http://localhost:8080/users/login",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(obj)
        }).then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            dispatch({type:LOGIN_SUCCESSFULL,payload:res.token});
            return true;
        })
        .catch((er)=>{console.log(er);
            dispatch({type:LOGIN_FAILURE})
        return false})
}
//User Sign Up
export const User_Signup=(obj)=>(dispatch)=>{
    // console.log(obj);
   return  fetch("http://localhost:8080/users/signup",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(obj)
        }).then((res)=>res.json())
        .then((res)=>{console.log(res);
        return true;
        })
        .catch((er)=>{
        console.log(er)
        return false
        })

}

//Car added
export const Add_Car=(obj)=>(dispatch)=>{

   return  fetch("http://localhost:8080/cars/add",{
        method:"POST",
        headers:{
            "Content-type":"application/json",
        },
        body:JSON.stringify(obj)
    }).then((res)=>res.json())
    .then((res)=>{console.log(res); return true})
    .catch(err=>{console.log(err); return false})
}

export const Get_Car=()=>{
   return  fetch("http://localhost:8080/cars").then((res)=>res.json())
    .then((res)=>{
        return res
    }).catch(err=>console.log(err))
}