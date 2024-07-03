import React from 'react'
import { InformationCard } from '../../../components/InformationCard/InformationCard'
import { signUpInformationCardTitle, signUpInformationCardText } from '../../../constants/constants' 
import { Form } from '../../../components/Form/Form'
import { useSignUp } from './useSignUp'
import { Input } from '../../../components/Input/Input'

export function SignUp() {    
    const { onSignUp } = useSignUp()

    return <>
            <InformationCard title={signUpInformationCardTitle} text={signUpInformationCardText}/>
            <br/>
            <br/>
            <Form inputs={[
                <Input autoFocus type="email" name="email" icon="Info" placeholder="Email"/>,
                <Input type="password" name="password" icon="Info" placeholder="Password"/>,
                <Input type="phone" name="phone" icon="Info" placeholder="Phone"/>
            ]} onSubmit={onSignUp} />
    </>
}