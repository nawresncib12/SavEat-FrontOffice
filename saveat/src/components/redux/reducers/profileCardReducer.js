import  {UPDATE_PROFILE_CARD} from "../actions/actionTypes"
import  {UPDATE_EMAIL} from "../actions/actionTypes"
const myState = {
    firstName : "starnger",
    lastName : "",
    birthday:"",
    address:"sousse",
    email:"test",
    phone : +216999999999
}
export  function profileCardReducer(state = myState,action){
switch (action.type){
    case UPDATE_PROFILE_CARD:{
        return {
            firstName : action.data.firstName,
            lastName : action.data.lastName,
            birthday:action.data.birthday,
            address:action.data.address,
            email:action.data.email,
            phone:action.data.phone
        }
    }      
    case UPDATE_EMAIL:{
        console.log(action)
        return {
        ...state,
        email : action.data
        }
    }      
    default : {
     return state;
     }     
    }
}