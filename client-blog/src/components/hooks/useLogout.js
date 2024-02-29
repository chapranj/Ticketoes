import { useAuth } from "../security/AuthContext";

export default function useLogout(){
    const {dispatch} = useAuth();
    const logout = ()=>{
        // remove user from localstorage
        localStorage.removeItem('user');
        dispatch({type: 'LOGOUT'});
    }
    
    return {logout}
}