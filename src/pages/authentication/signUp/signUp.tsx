import React from 'react'
import { InformationCard } from '../../../components/InformationCard/InformationCard'
import { signUpInformationCardTitle, signUpInformationCardText, signUpFormSubmitButtonText, routeAuthenticationSignIn } from '../../../constants/constants' 
import { Form } from '../../../components/Form/Form'
import { useSignUp } from './useSignUp'
import { Input } from '../../../components/Input/Input'

const styles = {
    subLink: {
        fontSize: "var(--font-size-sm)",
        alignSelf: "flex-end"
    }
}

export function SignUp() {    
    const { onSignUp } = useSignUp()

    const signUpSubLink = <a style={{
        ...styles.subLink
    }} href={routeAuthenticationSignIn}>Already have an account? Sign In here!</a>


    const signUpInputs = [
        <Input autoFocus type="email" name="email" icon="Info" placeholder="Email"/>,
        <Input type="password" name="password" icon="Info" placeholder="Password"/>,
    ]

    return <>
            <InformationCard title={signUpInformationCardTitle} text={signUpInformationCardText}/>
            <br/>
            <br/>
            <Form inputs={signUpInputs} onSubmit={onSignUp} submitButtonText={signUpFormSubmitButtonText} buttonSubLink={signUpSubLink}/>
    </>
}