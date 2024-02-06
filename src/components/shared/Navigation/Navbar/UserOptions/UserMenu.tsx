'use client';

import { signOut } from "next-auth/react";
import MenuTtem from "./MenuTtem";

import { PiUserSquareFill,PiYoutubeLogo,PiSignOut } from "react-icons/pi";



interface UserMenuProps {
    onClose: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({onClose}) => {
  return (
    <>
    < div className="" onClick={onClose}>
        <div className="absolute rounded-md shadow-md w-72 bg-zinc-800 right-2 top-16 text-sm flex flex-col overflow-hidden z-40">
            <MenuTtem logo={<PiUserSquareFill className="h-7 w-7 mr-4  "/>} label="Your channel"/>
            <MenuTtem logo={<PiYoutubeLogo className="h-7 w-7 mr-4  "/>} label="Youtube Studio "/>
            <MenuTtem logo={<PiSignOut className="h-7 w-7 mr-4 "/>} label="Sign out" onClick={()=>{
                signOut();
                onClose();
            }}/>
            
        </div>
    </div>
    </>
  )
}

export default UserMenu