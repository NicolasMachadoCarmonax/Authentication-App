import { useRecoilValue } from "recoil"
import { authenticationEmailAtom } from "../../../global/authentication"
import { confirmSignUp } from "../../../api/auth"
import { routeAuthenticationSignIn } from "../../../constants/constants"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
export const useConfirmSignUp = () => {
    const [emailInput, setEmailInput] = useState(false)
    const username = useRecoilValue(authenticationEmailAtom)
    const navigate = useNavigate()

    async function onConfirmSignUp(event: FormData){
        const confirmationCode = event.get("code") as string
        const email = event.get("email") as string

        if(!confirmationCode){
            alert("Please include the code to verify your email.")
            return
        }
        if(!username && !emailInput){
            alert("Please include your email.")
            setEmailInput(true)
            return
        }
        let confirmSignUpResponse
        if(username){
            confirmSignUpResponse = await confirmSignUp({username, confirmationCode})
        } else if (!username && email) {
            confirmSignUpResponse = await confirmSignUp({username: email, confirmationCode})
        }

        if(confirmSignUpResponse === "DONE"){
            alert("Successfull email validation, you may sign in.")
            navigate(routeAuthenticationSignIn)
        } else {
            alert("Server error")
            navigate(routeAuthenticationSignIn)
        }
    }

    return { onConfirmSignUp, emailInput }
}