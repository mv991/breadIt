type userId = string
import type { Session,User } from "next-auth"
declare module "next-auth/jwt" {
    interface JWT {
        id:userId,
        username?: string | null
    }
}
declare module "next-auth" {
    interface Session {
        id:userId,
        username?: string | null
    }
}