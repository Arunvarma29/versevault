import Link from 'next/link'
import React from 'react'
import { Button } from '../../ui/button'
import SearchInput from './searchInput'
import ToggleMode from './toggleMode'

const navbar = () => {
    return (
        <div className='sticky top-0 w-full border border-b bg-background/95 backdrop-blur support-[backdrop-filter]:bg-background/60'>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    <div className="flex items-center gap-8">
                        <Link href='/' className=' flex items-center space-x-2'>
                            <span className="font-bold text-2xl"> 
                                <span className=' bg-gradient-to-b from-orange-500 to bg-slate-500  dark:from-orange-500 dark:to-slate-500 bg-clip-text text-transparent'> Verse</span>
                                <span className='text-foreground'>Vault</span>
                            </span>
                        </Link>

                    </div>
                    {/* desktop menu */}
                    <div className="hiddden md:flex items-center gap-4">
                        <Link href={"/Articles"} className='text-sm font-medium text-foreground transition-colors hover:text-foreground'>Articles </Link>

                        <Link href={"/tutorial"} className='text-sm font-medium text-foreground transition-colors hover:text-foreground'>Tutorial </Link>

                        <Link href={"/about"} className='text-sm font-medium text-foreground transition-colors hover:text-foreground'>About </Link>

                        <Link href={"/dashboard"} className='text-sm font-medium text-foreground transition-colors hover:text-foreground'>Dashboard </Link>
                    </div>

                    

                    {/* right section */}
                    <div className=" flex items-center gap-4">
                        <SearchInput/>

                        <ToggleMode/>
                    <div className='hidden md:flex items-center gap-2'>
                    <Button>LOGIN</Button>
                    <Button>SIGNUP</Button>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default navbar
