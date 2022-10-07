import React from 'react'
import Logo from "../../../assets/Logo.svg"
import Logo2 from "../../../assets/Logo_2.svg"
import SearchBar from '../../commons/SearchBar/SearchBar'
import { Logolayout, NavLayout, Logo2Layout } from '../NotLoginNav/styles'

function LoginNav() {
  return (
    <NavLayout>
        <Logolayout>
            <img src={Logo} alt="logo"/>
            <Logo2Layout>
            <img src={Logo2} alt="iTerview"/>
            </Logo2Layout>
            <SearchBar />
        </Logolayout>

    </NavLayout>
  )
}

export default LoginNav;