'use client'

import Link from "next/link";
import {FC} from "react";
import {usePathname} from "next/navigation";
import CartPanel from "@/components/clientComponets/CartPanel";
import {useSession, signOut} from "next-auth/react";

interface ILink {
    url:string,
    pageName:string
}

interface IProps{
    links:ILink[]
}


const Nav:FC<IProps> = ({links}) => {

    const pathname = usePathname()
    const session = useSession()

    return (
        <nav className="flex justify-around">
            {links.map((propsPage,key)=>{
                const isActive = pathname === propsPage.url
                return (
                    <Link
                        key={key}
                        href={propsPage.url}
                        className={isActive? "text-blue-700 transition-colors hover:text-pink-800":"text-blue-50 transition-colors hover:text-fuchsia-800"}>
                        {propsPage.pageName}
                    </Link>
                )
            })}
            {session?.data && <Link href='/profile'>Профиль</Link>}
            {session?.data ? (
                <Link href='#' onClick={() => signOut({callbackUrl:"/"})}> Выход </Link>
            ):(
                <Link href='/api/auth/signin'> Вход </Link>
            )}
            <CartPanel/>
        </nav>
    );
};

export default Nav;