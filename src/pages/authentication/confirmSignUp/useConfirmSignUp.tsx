import { useRecoilValue } from "recoil"
import { authenticationEmailAtom } from "../../../global/authentication"
import { confirmSignUp } from "../../../api/auth"
import { routeAuthenticationSignIn } from "../../../constants/constants"
import { useNavigate } from "react-router-dom"
export const useConfirmSignUp = () => {
    const username = useRecoilValue(authenticationEmailAtom)
    const navigate = useNavigate()

    async function onConfirmSignUp(event: FormData){
        const confirmationCode = event.get("code") as string
        if(!confirmationCode){
            alert("Please include the code to verify your email.")
            return
        }
        if(!username){
            alert("Server error: The application does not know your email.")
            return
        }
        const confirmSignUpResponse = await confirmSignUp({username, confirmationCode})
        if(confirmSignUpResponse === "DONE"){
            alert("Successfull email validation, you may sign in.")
            navigate(routeAuthenticationSignIn)
        } else {
            alert("Server error")
        }
    }
    return { onConfirmSignUp, username }
}