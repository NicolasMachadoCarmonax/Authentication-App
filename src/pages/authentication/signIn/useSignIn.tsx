import { signIn } from "../../../api/auth"
import { useNavigate } from "react-router-dom"
import { routeAuthenticationConfirmSignIn, routeAuthenticationConfirmSignUp, routeApp } from "../../../constants/constants"
export const useSignIn = () => {
    const navigate = useNavigate()

    async function onSignIn(event: FormData) {
        const email = event.get('email') as string
        const password = event.get('password') as string
        if(!email || !password){
            alert("Please include your credentials to sign in.")
            return
        }
        try {
            const signInResponse = await signIn({
                password, username: email
            })
            if(signInResponse === "CONFIRM_SIGN_IN_WITH_SMS_CODE"){
                navigate(routeAuthenticationConfirmSignIn)
                return
            } else if( signInResponse === "CONFIRM_SIGN_UP"){
                alert("Email verification required before sign in")
                navigate(routeAuthenticationConfirmSignUp)
                return
            }
            navigate(routeApp)
            return
        } catch(error) {
            if(error === "There is already a signed in user."){
                navigate(routeApp)
                return
            }
            if(error === "Incorrect username or password."){
                alert("Incorrect username or password.")
                return
            }

        }

    }
    return { onSignIn }
}