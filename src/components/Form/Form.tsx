import React from 'react'
import { useForm } from './useForm'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { signUpFormSubmitButton } from '../../constants/constants'
import { type FormProps } from './types'

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        gap: '2vh'
    },
    button: {
        
    }
}

export function Form(props: FormProps) {
    const { onSubmit, inputs } = props
    const { handleSubmit } = useForm({
        onSubmit
    })
    return <form style={{
        ...styles.form
    }} onSubmit={handleSubmit}>
        {inputs.map((input: React.ReactNode )=>input)}
        <Button style={{
            ...styles.button
        }} type="submit" text={signUpFormSubmitButton}/>
    </form>
}