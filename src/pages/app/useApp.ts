import { useNavigate } from "react-router-dom"
import { signOut } from "../../api/auth"
import { routeAuthenticationSignIn } from "../../constants/constants"
export const useApp = () => {
    const navigate = useNavigate()
    async function signOutUser(){
        await signOut()
        navigate(routeAuthenticationSignIn)
    }
    return { signOutUser }
}