import React from 'react'
import { InformationCard } from '../../../components/InformationCard/InformationCard'
import { Form } from '../../../components/Form/Form'
import { Input } from '../../../components/Input/Input'
import { confirmSignInInformationCardTitle, confirmSignInInformationCardText } from '../../../constants/constants'
import { useConfirmSignIn } from './useConfirmSignIn'
export function ConfirmSignIn(){
    const { onConfirmSignIn } = useConfirmSignIn()
    return <>
        <InformationCard title={confirmSignInInformationCardTitle} text={confirmSignInInformationCardText}/>
        <br/>
        <br/>
        <Form inputs={[<Input autoFocus type="text" name="code" icon="Info" placeholder="Code"/>]} onSubmit={onConfirmSignIn} />
    </>
}