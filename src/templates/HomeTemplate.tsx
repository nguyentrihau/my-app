import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderHome from '../components/HeaderHome'

type Props = {}

const HomeTemplate = (props: Props) => {
    return (
        <div>
            <header><HeaderHome/></header>
            <div style={{ minHeight: 600 }}>
                <Outlet />
            </div>
        </div>
    )
}

export default HomeTemplate