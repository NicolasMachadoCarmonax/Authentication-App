import { signIn } from "../../../api/auth"
import { useNavigate } from "react-router-dom"
import { routeAuthenticationConfirmSignIn, routeAuthenticationConfirmSignUp } from "../../../constants/constants"
export const useSignIn = () => {
    const navigate = useNavigate()

    async function onSignIn(event: FormData) {
        const email = event.get('email') as string
        const password = event.get('password') as string
        const signInResponse = await signIn({
            password, username: email
        })
        if(signInResponse === "CONFIRM_SIGN_IN_WITH_SMS_CODE"){
            navigate(routeAuthenticationConfirmSignIn)
        } else if( signInResponse === "CONFIRM_SIGN_UP"){
            alert("Email verification required before sign in")
            navigate(routeAuthenticationConfirmSignUp)
        }
    }
    return { onSignIn }
}