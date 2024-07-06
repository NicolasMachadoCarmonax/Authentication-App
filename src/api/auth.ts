import { signUp as amplifySignUp, confirmSignUp as amplifyConfirmSignUp, SignInInput, SignUpInput, ConfirmSignUpInput, signIn as amplifySignIn, ConfirmSignInInput, confirmSignIn as amplifyConfirmSignIn, getCurrentUser as amplifyGetCurrentUser, signOut as amplifySignOut, resetPassword as amplifyResetPassword, ResetPasswordInput, ConfirmResetPasswordInput, confirmResetPassword as amplifyConfirmResetPassword} from "aws-amplify/auth"

export async function signUp(props: SignUpInput){
    const { username, password, options } = props
    if (!username || !password) {
        alert('Please fill in all fields.');
        return;
    }

    let phone_number = ""
    if(options?.userAttributes.phone_number !== undefined){
        phone_number = options?.userAttributes.phone_number!
        if(!/^\+/.test(phone_number)){
            alert('Phone must include a lada code.')
            return
        }
    }


    const passwordRegex: RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    if(!passwordRegex.test(password)){
        alert('Password must be 8 characters long, contain one uppercase letter, one number and a symbol.')
        return
    }


    try {
        const response = await amplifySignUp({
        username: username,
        password,
        options: {
            userAttributes: {
                email: username,
                phone_number: phone_number
            },
            }
        })
        if(response?.nextStep?.signUpStep === 
            "CONFIRM_SIGN_UP"){
                return "CONFIRM_SIGN_UP"
            }
    } catch(error){
        // @ts-ignore: Suppress error checking for this line
        if(error?.message === "User already exists"){alert("Email is already in use.")}
    }
}

export async function confirmSignUp(props: ConfirmSignUpInput){
    const { username, confirmationCode} = props
    try {
        const confirmSignUpResponse = await amplifyConfirmSignUp({username, confirmationCode})

        if(confirmSignUpResponse.isSignUpComplete){
            return "DONE"
        } else {
            return "FAILED"
        }
    } catch(error){

    }
}

export async function signIn(props: SignInInput){
    try {
        const signInResponse = await amplifySignIn(props)
        return signInResponse.nextStep.signInStep
    } catch(error){
        // @ts-ignore: Suppress error checking for this line
        if(error?.message === "There is already a signed in user."){
            throw "There is already a signed in user."
        }
        // @ts-ignore: Suppress error checking for this line
        if(error?.message === "Incorrect username or password."){
            throw "Incorrect username or password."
        }
    }
}

export async function confirmSignIn(props: ConfirmSignInInput){
    await amplifyConfirmSignIn(props)
}

export async function getCurrentUser(){ 
    const getCurrentUserResponse = await amplifyGetCurrentUser()
    return getCurrentUserResponse.userId ? true : false
}

export async function signOut(){
    return await amplifySignOut()
}

export async function resetPassword(props: ResetPasswordInput){
    const resetPasswordResponse = await amplifyResetPassword(props)
    return resetPasswordResponse
}

export async function confirmResetPassword(props: ConfirmResetPasswordInput){
    try {
        await amplifyConfirmResetPassword(props);
    }
    catch(error){
        // @ts-ignore
        if(error?.message === "Invalid verification code provided"){
            throw "Invalid verification code provided"
        }
    }
}