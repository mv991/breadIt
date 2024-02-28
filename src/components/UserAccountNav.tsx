"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../components/ui/Dropdown";
import { User } from "next-auth";
import UserAvatar from "./UserAvatar";
import { DropdownMenuItem, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface Prop {
    user: Pick<User, 'name' | 'image' | 'email'>
}
export default function UserAccountNav({user}:Prop) {

    return (
       <DropdownMenu>
       <DropdownMenuTrigger>
         <UserAvatar user={{name:user.name || null,image:user.image || null}} className="h-8 w-8" />
       </DropdownMenuTrigger>
       <DropdownMenuContent className="bg-white align-end">
        <div className="flex  items-center justify-start gap-2 p-2">
            <div className="flex flex-col space-y-1 loading-none">
                {user.name && <p className="font-medium ">{user.name}</p>}
                {user.email && <p className="w-[200px] truncate text-sm text-zinc-700 ">{user.email}</p>}
            </div>
        </div>
        <DropdownMenuSeparator/>
        <DropdownMenuItem asChild>
            <Link href={"/"}>Feed</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
            <Link href={"/r/create"}>Create Community</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
            <Link href={"/settings"}>Settingd</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator/>
        <DropdownMenuItem className="cursor-pointer" onClick={(e) => {e.preventDefault(); signOut({callbackUrl: `${window.location.origin}/sign-in`}) }}>
            Sign out
        </DropdownMenuItem>
       </DropdownMenuContent>
       </DropdownMenu>
    )
}