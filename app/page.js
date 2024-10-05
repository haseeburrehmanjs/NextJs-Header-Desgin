import React from 'react'
import profileImg from '@/public/profileImg.png'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
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

          <div className='flex justify-between items-center mt-[100px]'>
            <div>
              <h1 className='text-5xl font-bold'>Haseeb Ur Rehman</h1>
              <p className='text-4xl mt-2'>Frontend Developer</p>
              <p className='mt-1 text-xl'>hello , I'm Alex Smith , frontend developer ,<br />  UI/UX designer and freelancer. I love making <br /> web designs and building them with code. I <br />have 10 years of experience. I'm a <br /> professional and makes high-quality <br /> products.</p>
            </div>
            <div className='w-[400px] h-[400px] overflow-hidden bg-white rounded-full'>
              <Image src={profileImg} width='700'/>
            </div>
          </div>
      </div>
    </nav>
    </>
  )
}

export default page
