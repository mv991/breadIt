import Link from "next/link";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/Button";
import { UserAuthForm } from "./UserAuthForm";

export const SignUp = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center w-full space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="h-6 w-6 mx-auto" />
        <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
        <p className="text-sm max-w-xs "></p>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-zinc-700 ">
          Already a Bredittor?{" "}
          <Link
            href={"/sign-in"}
            className="hover:text-zinc-800 text-sm underline underline-offset-4"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};
