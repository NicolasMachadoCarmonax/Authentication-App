import React from 'react'
import { InputProps } from './types'
import { Input as InputAssets } from '../../assets/assets'
const styles = {
    container: {
        height: '2.3rem',
        display: 'flex',
        alignItems: 'center',
        border: 'var(--border-width) solid var(--primary-color)',
        borderRadius: 'var(--border-radius-lg)',
        overflow: 'hidden'
    },
    iconContainer: {
        width: '3rem',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'auto .5rem',
        backgroundColor: 'var(--secondary-color)'
    },
    icon: {

    },
    input: {
        height: '100%',
        width: '100%',
        paddingLeft: '1rem',
        outline: 'none',
        border: 'none',
        fontSize: 'var(--font-size-md)'
    }
}

export function Input(props: InputProps){
    const { placeholder, icon, size, name, ...rest } = props
    return <div style={{
            ...styles.container,
            width: size === 'lg' ? '400px' : size === 'md' ? '200px' : size === 'sm' ? '100px' : '100%',
        }}>
        <div style={{
            ...styles.iconContainer,
        }}>
            <img style={{
                ...styles.icon
            }} src={InputAssets[icon]}/>
        </div>
        <input name={name} placeholder={placeholder} style={{...styles.input}} {...rest}></input>
    </div>
}