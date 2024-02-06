'use client';
import { MdOutlineAccountCircle } from "react-icons/md";
import {signIn} from 'next-auth/react';

const SignInButton = () => {
  return (
    <button 
    onClick={()=>signIn("google")}
    className="flex flex-row gap-1 items-center border-[1px] border-slate-700 rounded-full overflow-hidden px-3 py-1.5 text-blue-400 cursor-pointer">
        <MdOutlineAccountCircle/>
        Sign In
    </button>
  )
}

export default SignInButton;