import React from 'react'
import Navbar from '../components/Navbar'

const NavLayout = ({children}) => {
  return (
    <>
    <Navbar />
    {children}
    </>
  )
}

export default NavLayout