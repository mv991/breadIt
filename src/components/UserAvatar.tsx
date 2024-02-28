import { User } from "next-auth"
import { Avatar,AvatarFallback } from "./ui/Avatar"
import Image from "next/image"
import { Icons } from "./Icons"
import { AvatarProps } from "@radix-ui/react-avatar"
interface Prop extends AvatarProps {
    user: Pick<User, 'name' | 'image' >
}
export default function UserAvatar({user,...props}:Prop) {

    return (
   <Avatar {...props}>
     {user.image? 
     (
     <div className="relative aspect-square h-ful w-full"  >
        <Image fill src={user.image} alt="profile-picture" referrerPolicy="no-referrer"/>
     </div>
     ) 
     :(
     <AvatarFallback><span className="sr-only">{user?.name}</span>
     <Icons.user></Icons.user>
     </AvatarFallback>
     
      )}
   </Avatar>
      
    )
}