import { signUp } from '../../../api/auth'
import { useRecoilState } from 'recoil'
import { useNavigate } from "react-router-dom"
import { routeAuthenticationConfirmSignUp } from '../../../constants/constants'
import { authenticationEmailAtom } from '../../../global/authentication'
export const useSignUp = () => {
    const [_, setAuthenticationEmail] = useRecoilState(authenticationEmailAtom)
    const navigate = useNavigate()
    async function onSignUp(event: FormData) {
        const email = event.get('email') as string
        const password = event.get('password') as string
        const phone_number = event.get('phone') as string
        const signUpResponse = await signUp({
            password, username: email, options: {
                userAttributes: {
                    phone_number
                }
            }
        })
        if(signUpResponse === "CONFIRM_SIGN_UP"){
            setAuthenticationEmail(email)
            navigate(routeAuthenticationConfirmSignUp)
        }
    }
    return { onSignUp }
}