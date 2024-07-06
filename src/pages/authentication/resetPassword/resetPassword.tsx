import React from 'react'
import { Input } from '../../../components/Input/Input.tsx'
import { InformationCard } from '../../../components/InformationCard/InformationCard.tsx'
import { Form } from '../../../components/Form/Form.tsx'
import { resetPasswordEmailSubmitButtonText, resetPasswordInformationCardText, resetPasswordInformationCardTitle, resetPasswordPasswordsSubmitButtonText } from '../../../constants/constants.ts'
import { useResetPassword } from './useResetPassword.tsx'

export default function ResetPassword() {
    const { resetPasswordStage, onResetPassword } = useResetPassword()
    const resetPasswordInputs = resetPasswordStage === null ? [
        <Input autoFocus type="email" name="email" icon="Info" placeholder="Email"/>
    ] : [
        <Input autoFocus type="email" name="email" icon="Info" placeholder="Email"/>,
        <Input autoFocus type="text" name="code" icon="Info" placeholder="Code"/>,
        <Input type="password" name="password" icon="Info" placeholder="New Password"/>,
        <Input type="password" name="confirm-password" icon="Info" placeholder="Confirm new password"/>,
    ]
    const resetPasswordSubmitButtonText = resetPasswordStage === null ? resetPasswordEmailSubmitButtonText : resetPasswordPasswordsSubmitButtonText

    return <>
            <InformationCard title={resetPasswordInformationCardTitle} text={resetPasswordInformationCardText}/>
            <br/>
            <br/>
            <Form inputs={resetPasswordInputs} onSubmit={onResetPassword} submitButtonText={resetPasswordSubmitButtonText}/>
    </>
}