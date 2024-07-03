import React from 'react'
import { Outlet } from 'react-router-dom'
import { PageBackground } from '../../components/PageBackground/pageBackground'
import { Logo } from '../../assets/assets'

const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: '40% 60%'
    },
    formContainer: {
        padding: '2vw'
    }
}

export function Authentication(){
    return <div style={{
        ...styles.container
    }}>
        <PageBackground logo={Logo}/>
        <div style={{
            ...styles.formContainer
        }}>
            <Outlet/>
        </div>
    </div>
}