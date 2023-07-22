import { LOGIN_FAILURE, LOGIN_PENDING, LOGIN_SUCCESSFULL, LOGOUT_SUCCESSFULL } from "./actionType";

const Inital = {
    isAuth:false,
    isloading: false,
    isError: false,
    carsData:[],
    token:"",
    userID:""
}
export const reducer = (state = Inital, { type, payload }) => {
    switch (type) {
        case LOGIN_PENDING:
        return {...state,isloading:true}
        case LOGIN_SUCCESSFULL:
            return {...state,isloading:false,token:payload.token,userID:payload.userID,isAuth:true}
        case LOGIN_FAILURE:
            return {...state,isloading:false,isError:true}
        case LOGOUT_SUCCESSFULL:
            return {...state,isAuth:false,token:"",userID:""}
        default:
            return state;
    }
}