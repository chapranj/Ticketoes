import { useNavigate } from "react-router-dom";
import { useAuth } from "../security/AuthContext";

export default function useLogout(){

    const navigate = useNavigate()
    const {dispatch} = useAuth();
    const logout =()=>{
        // remove user from localstorage
        localStorage.removeItem('user');
        dispatch({type: 'LOGOUT'});
        navigate('/login')
    }
    
    return {logout}
}