import { LOGIN_FAILURE, LOGIN_PENDING, LOGIN_SUCCESSFULL } from "./actionType";

//User Login 
export const User_Login=(obj)=>(dispatch)=>{
    console.log(obj);
    dispatch({type:LOGIN_PENDING})
      return  fetch("https://difficult-buckle-ray.cyclic.app/users/login",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(obj)
        }).then((res)=>res.json())
        .then((res)=>{
            // console.log(res);
            if(res.token){
                let data={"token":res.token,"userID":res.userID}
                // console.log(data);
                dispatch({type:LOGIN_SUCCESSFULL,payload:data});
                return true;
            }else{
                return false
            }

        })
        .catch((er)=>{console.log(er);
            dispatch({type:LOGIN_FAILURE})
        return false})
}
//User Sign Up
export const User_Signup=(obj)=>(dispatch)=>{
    // console.log(obj);
   return  fetch("https://difficult-buckle-ray.cyclic.app/users/signup",{
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

   return  fetch("https://difficult-buckle-ray.cyclic.app/cars/add",{
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
   return  fetch("https://difficult-buckle-ray.cyclic.app/cars").then((res)=>res.json())
    .then((res)=>{
        console.log(res);
        return res
    }).catch(err=>console.log(err))
}