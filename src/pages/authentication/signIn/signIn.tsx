import React from 'react'
import { Input } from '../../../components/Input/Input'
import { InformationCard } from '../../../components/InformationCard/InformationCard'
import { signInInformationCardTitle, signInInformationCardText } from '../../../constants/constants'
import { useSignIn } from './useSignIn'
import { Form } from '../../../components/Form/Form'

export function SignIn() {    
    const { onSignIn } = useSignIn()

const getSignInInputs = () => [<Input autoFocus type="email" name="email" icon="Info" placeholder="Email"/>,
    <Input type="password" name="password" icon="Info" placeholder="Password"/>,]

    return <>
            <InformationCard title={signInInformationCardTitle} text={signInInformationCardText}/>
            <br/>
            <br/>
            <Form inputs={getSignInInputs()} onSubmit={onSignIn} />
    </>
}