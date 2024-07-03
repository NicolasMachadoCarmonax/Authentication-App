import React from 'react'
import {type PageBackgroundProps} from './types'

const styles = {
    container: {
        display: 'flex',
        backgroundColor: 'var(--primary-color)',
        height: '100vh',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: '10vw',
    }
}
export function PageBackground(props: PageBackgroundProps) {
    const { style, logo } = props
    return <div style={{
        ...styles.container,
        ...style}}>
            <img style={{
                ...styles.logo
            }} src={logo}>
            </img>
        </div>
}