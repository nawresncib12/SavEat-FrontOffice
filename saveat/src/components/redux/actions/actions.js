import  {UPDATE_PROFILE_CARD} from "../actions/actionTypes"
import  {UPDATE_EMAIL} from "../actions/actionTypes"
export function update_Profile_Card(data){ 
    return {
        type : UPDATE_PROFILE_CARD,         
        data
    }
}
export function update_email(data){ 
    return {
        type : UPDATE_EMAIL,         
        data
    }
}