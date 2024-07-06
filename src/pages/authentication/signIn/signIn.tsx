import React from 'react'
import { Input } from '../../../components/Input/Input'
import { InformationCard } from '../../../components/InformationCard/InformationCard'
import { signInInformationCardTitle, signInInformationCardText, routeAuthenticationSignUp, routeAuthenticationResetPassword } from '../../../constants/constants'
import { useSignIn } from './useSignIn'
import { Form } from '../../../components/Form/Form'
import { signInFormSubmitButtonText } from '../../../constants/constants'

const styles = {
    subLink: {
        fontSize: "var(--font-size-sm)",
        alignSelf: "flex-end"
    }
}

export function SignIn() {    
    const { onSignIn } = useSignIn()

    const signUpSubLink = <a style={{
        ...styles.subLink
    }} href={routeAuthenticationSignUp}>Don't have an account yet? Sign up here!</a>

    const resetPasswordSubLink = <a style={{
        ...styles.subLink
    }} href={routeAuthenticationResetPassword}>Forgot Password? Recover it here.</a>

    const signInInputs = [
        <Input autoFocus type="email" name="email" icon="Info" placeholder="Email"/>,
        <Input type="password" name="password" icon="Info" placeholder="Password" subLink={resetPasswordSubLink}/>
    ]

    return <>
            <InformationCard title={signInInformationCardTitle} text={signInInformationCardText}/>
            <br/>
            <br/>
            <Form inputs={signInInputs} onSubmit={onSignIn} submitButtonText={signInFormSubmitButtonText} buttonSubLink={signUpSubLink}/>
    </>
}