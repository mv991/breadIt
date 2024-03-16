"use client";
import { FC } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Icons } from "./Icons";
import { useToast } from "@/hooks/use-toast";

interface UserAuthForm extends React.HTMLAttributes<HTMLDivElement> {}

export const UserAuthForm: FC<UserAuthForm> = ({ className, ...props }) => {
  const [loading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "There was an error",
        description: "There was an error loggin in with google",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={cn(`flex justify-center`, className)}>
      <Button
        size="sm"
        className="w-full"
        onClick={loginWithGoogle}
        isLoading={loading}
      >
        {loading ? null : <Icons.google className="h-4 w-4 mr-2" />}Google
      </Button>
    </div>
  );
};
