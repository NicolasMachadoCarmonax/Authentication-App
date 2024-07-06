import React from 'react'
import { useConfirmSignUp } from './useConfirmSignUp.tsx'
import { Input } from '../../../components/Input/Input.tsx'
import { InformationCard } from '../../../components/InformationCard/InformationCard.tsx'
import { Form } from '../../../components/Form/Form.tsx'
import { confirmSignUpInformationCardTitle, confirmSignUpInformationCardText, confirmSignUpButtonText } from '../../../constants/constants.ts'
export function ConfirmSignUp(){
    const { onConfirmSignUp, emailInput } = useConfirmSignUp()

    const confirmSignUpInputs = emailInput ?
        [
        <Input autoFocus type="text" name="code" icon="Info" placeholder="Code"/>,
        <Input autoFocus type="email" name="email" icon="Info" placeholder="Email"/>
    ] : [
        <Input autoFocus type="text" name="code" icon="Info" placeholder="Code"/>
    ]

    return <>
        <InformationCard title={confirmSignUpInformationCardTitle} text={confirmSignUpInformationCardText}/>
        <br/>
        <br/>
        <Form inputs={confirmSignUpInputs} onSubmit={onConfirmSignUp} submitButtonText={confirmSignUpButtonText}/>
    </>
}