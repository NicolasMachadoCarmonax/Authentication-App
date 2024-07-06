import { useState } from "react"
import { confirmResetPassword, resetPassword } from '../../../api/auth'
import { useNavigate } from "react-router-dom"
import { routeAuthenticationSignIn } from "../../../constants/constants"

export const useResetPassword = () => {
    const [resetPasswordStage, setResetPasswordStage] = useState<null | string>(null)
    const navigate = useNavigate()

    async function onResetPassword(props: FormData) {
        const email = props.get('email') as string
        const confirmationCode = props.get('code') as string
        const password = props.get('password') as string
        const confirmPassword = props.get('confirm-password') as string
        if(!resetPasswordStage){ 
            const resetPasswordResponse = await resetPassword({username: email})
            if (resetPasswordResponse.nextStep.resetPasswordStep === "CONFIRM_RESET_PASSWORD_WITH_CODE"){
                setResetPasswordStage("CONFIRM_RESET_PASSWORD_WITH_CODE")
            }
            return
        }

        
        if(resetPasswordStage === "CONFIRM_RESET_PASSWORD_WITH_CODE"){
            if(password !== confirmPassword){
                alert("Passwords must match.")
                return
            }
            try {
                await confirmResetPassword({
                    username: email,
                    confirmationCode,
                    newPassword: password
                })
            } catch(error){
                if(error === "Invalid verification code provided"){
                    alert("Code is incorrect")
                }
            }
            alert("Successful password reset!")
            navigate(routeAuthenticationSignIn)
        }
    }
    

    return { resetPasswordStage, onResetPassword }
}