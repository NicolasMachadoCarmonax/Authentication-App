import React from 'react'
import { type InformationCardProps } from './types'

const styles = {
    container: {
        height: '6rem',
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'space-around',
        padding: '2vh 2vw',
        backgroundColor: 'var(--accent-color)',
        borderRadius: 'var(--border-radius-lg)',
        color: 'var(--light-font-color)'
    }
}

export function InformationCard(props: InformationCardProps) {
    const { title, text, style } = props
    return <div style={{
        ...styles.container,
        ...style
    }}>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
}