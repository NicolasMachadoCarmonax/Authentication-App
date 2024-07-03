import React from 'react'
import { useConfirmSignUp } from './useConfirmSignUp.tsx'
import { Input } from '../../../components/Input/Input.tsx'
import { InformationCard } from '../../../components/InformationCard/InformationCard.tsx'
import { Form } from '../../../components/Form/Form.tsx'
import { confirmSignUpInformationCardTitle, confirmSignUpInformationCardText } from '../../../constants/constants.ts'
export function ConfirmSignUp(){
    const { onConfirmSignUp } = useConfirmSignUp()

    return <>
        <InformationCard title={confirmSignUpInformationCardTitle} text={confirmSignUpInformationCardText}/>
        <br/>
        <br/>
        <Form inputs={[<Input autoFocus type="text" name="code" icon="Info" placeholder="Code"/>]} onSubmit={onConfirmSignUp} />
    </>
}