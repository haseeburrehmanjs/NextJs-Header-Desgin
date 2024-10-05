import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import profileImg from '@/public/profileimg.png'

const About = () => {
    return (
        <>
            <nav className="main-header">
                <div className='mx-[150px] text-white'>
                    <div className='flex justify-center'>
                        <ul className='flex gap-5 mt-6 text-1xl'>
                            <li className='hover:border-b'><Link href={'/'}>Home</Link></li>
                            <li className='hover:border-b'><Link href={'about'}>About</Link></li>
                        </ul>
                    </div>

                    <div className='flex flex-col justify-center items-center mt-[180px]'>
                        <h1 className='text-6xl font-bold'>
                            Let's Work Together
                        </h1>
                        <ul className='flex gap-5 mt-5 text-3xl font-bold'>
                            <li>Linkedin</li>
                            <li>Github</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default About
