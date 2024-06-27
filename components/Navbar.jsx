import Link from 'next/link'
import React from 'react'

const links = [
    {
        id: 1,
        title: 'Getting Started',
        link: '/getting_started'
    },
    {
        id: 2,
        title: 'Community',
        link: '/community'
    }
]

const Navbar = () => {
    return (
        <div className='bg-[#191d24] text-white'>
            <div className='max-w-[1000px]'>
                <nav>
                    {links.map(item => (
                        <Link key={item.id} href={item.link}>{item.title}</Link>
                    ))}
                </nav>
            </div>
        </div>
    )
}

export default Navbar