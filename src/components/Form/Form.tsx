import React from 'react'
import { useForm } from './useForm'
import { Button } from '../Button/Button'
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
    const { onSubmit, inputs, submitButtonText, buttonSubLink } = props
    const { handleSubmit } = useForm({
        onSubmit
    })
    return <form style={{
        ...styles.form
    }} onSubmit={handleSubmit}>
        {inputs.map((input: React.ReactNode )=>input)}
        <Button style={{
            ...styles.button
        }} type="submit" text={submitButtonText}/>
        {buttonSubLink}
    </form>
}