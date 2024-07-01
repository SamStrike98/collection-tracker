import Link from 'next/link'
import { auth, signIn, signOut } from '@/auth'
import Image from 'next/image'


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
    },
    {
        id: 3,
        title: 'Create Collection',
        link: '/collections/create'
    }
]

const Navbar = async () => {
    const session = await auth()
    return (
        <div className='bg-[#191d24] text-white'>
            <div className='max-w-[1000px]'>
                <nav>
                    {links.map(item => (
                        <Link key={item.id} href={item.link}>{item.title}</Link>
                    ))}
                </nav>

                <div className='flex flex-row gap-4'>
                    {session?.user ?
                        <div>
                            <form action={async () => {
                                'use server'
                                await signOut({ redirectTo: "/" })
                            }}>
                                <button type='submit'>Logout</button>
                            </form>

                            <Link href={'/dashboard'}>{'Dashboard'}</Link>
                        </div>
                        :
                        <form action={async () => {
                            'use server'
                            await signIn('google', { redirectTo: "/dashboard" })
                        }}>
                            <button type='submit'>Sign In</button>
                        </form>
                    }

                    <Link href={`/profile/${session?.user.id}`}>Profile</Link>
                    <p>{session?.user.name}</p>

                </div>
            </div>

        </div>


    )
}

export default Navbar