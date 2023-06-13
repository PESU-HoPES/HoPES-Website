import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Navbar = () => {
    return (
        <nav className='flex justify-between py-4 px-5 border-b-primary-600 border-b-[0.3px]'>
            <div className='flex gap-x-4 items-center'>
                <p>logo</p>
            </div>
            <div className='flex gap-x-4 items-center'>
                <Button>Getstarted</Button>
                <Button>adf</Button>
            </div>
        </nav>
    )
}

export default Navbar
{/* <Image width={30} height={30} alt='logo' src="" /> */ }