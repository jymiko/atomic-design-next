import Link from 'next/link'
import Image from 'next/image'
import logo from 'assets/logo.svg'
import { ChevronDownIcon, ShoppingCartIcon, BellIcon } from '@heroicons/react/outline'
import SearchBox from './SearchBox'
import NavbarMenu from './NavbarMenu'

const NavbarPrimary = () => {
  return (
    <div className="fixed top-0 w-full h-36 z-30 shadow-header bg-white">
        <div className="w-full mt-5 h-16 bg-white">
            <div className="container md:mx-6 lg:mx-auto lg:px-4 xl:px-0 flex items-center">
                <div className="mr-10 last:mr-0">
                    <Link href='/'><Image src={logo} alt="Gramedia Digital" className="w-32 h-auto my-2.5 cursor-pointer" /></Link>
                </div>
                <div className="relative flex items-center h-full mr-10 last:mr-0">
                     <div className="h-full">
                        <div className="h-full flex items-center text-base text-cobalt font-bold whitespace-nowrap cursor-pointer">
                            <span>Kategori</span>
                            <ChevronDownIcon className="w-5 h-5 ml-2" fill="none" stroke="currentColor"/>
                        </div>
                    </div>
                </div>
                <SearchBox/>
                <div className="h-full relative flex items-center ml-5">
                    <div className="flex items-center relative mr-7">
                        <ShoppingCartIcon className="w-6 h-6 text-cobalt cursor-pointer" fill="none" stroke="currentColor"/>
                        <span className="py-1 px-[6px] absolute -top-2 left-2 flex items-center justify-center bg-amaranth text-white text-xs leading-none rounded-full">
                            3
                        </span>
                    </div>
                    <div className="flex items-center relative">
                        <BellIcon className="w-6 h-6 text-cobalt cursor-pointer" fill="none" stroke="currentColor"/>
                    </div>
                    <div className="w-px h-3/5 mx-7 py-5 bg-dim-gray/25"/>
                    <div className="flex items-center">
                        <button className="mr-4 px-6 py-2 border-2 border-cobalt text-cobalt flex items-center justify-center text-center sm:text-sm text-xs font-bold tracking-wide rounded-full cursor-pointer disabled:cursor-not-allowed">
                            Masuk
                        </button>
                        <button className="mr-4mr-4 px-6 py-2 bg-cobalt text-white flex items-center justify-center text-center sm:text-sm text-xs font-bold tracking-wide rounded-full cursor-pointer disabled:cursor-not-allowed">
                            Daftar
                        </button>
                    </div>
                </div>
            </div>
            <NavbarMenu/>
        </div>
    </div>
  )
}

export default NavbarPrimary
