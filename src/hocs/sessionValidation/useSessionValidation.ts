import { getCurrentUser } from "../../api/auth"
import { useState } from "react"
import { routeAuthenticationSignIn } from "../../constants/constants"
import { useNavigate } from "react-router-dom"

export const useSessionValidation = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(false)
    const validateUser = async ()=>{
        try {
            setUser(await getCurrentUser())
        }
        catch(error){
        // @ts-ignore: Suppress error checking for this line
            if(error?.message === "User needs to be authenticated to call this API."){
                navigate(routeAuthenticationSignIn)
            }
        }
    }
    validateUser()
    return { user }
}