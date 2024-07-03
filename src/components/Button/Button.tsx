import React from 'react'
import { type ButtonProps } from './types'

const styles = {
    button: {
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        padding: '.6rem 1.2rem',
        fontSize: 'var(--font-size-md)',
        border: 'none',
        borderRadius: 'var(--border-radius-sm)',
        backgroundColor: 'var(--primary-color)',
        color: 'white',
    },
    hoveredButton: {
        backgroundColor: 'var(--accent-color)',

    }
}

export function Button(props: ButtonProps) {
    const { type, text, onClick, children, style } = props
    return <button onClick={onClick} type={type} style={{
        ...styles.button,
        ...style
    }}>{text || children}</button>
}