import Image from 'next/image';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5">
            {/* Left */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src='https://links.papareact.com/qd3' objectFit="contain" layout="fill" objectPosition="left"/>
            </div>

            {/* middle */}
            <div className="flex items-center md:border-2 rounded-full md:shadow-md py-2">
                <input className="pl-5 flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder-text-gray-400" type="text" placeholder="Start your search" />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full text-white cursor-pointer p-2 md:mx-2" />
            </div>

            {/* right */}
            <div className="flex items-center space-x-4 text-gray-500 justify-end">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex items-center border-2 p-2 rounded-full space-x-2">
                    <MenuIcon className="h-6 cursor-pointer"/>
                    <UserCircleIcon className="h-6 cursor-pointer"/>
                </div>
            </div>
        </header>
    )
}

export default Header