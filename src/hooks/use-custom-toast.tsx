import { buttonVariants } from "@/components/ui/Button";
import { toast } from "@/hooks/use-toast";
import Link from "next/link";


export const useCustomToast = () => {
    const loginToast = () => {
      const {dismiss} =  toast({
            title:"Please Login to create a community",
            description:"Please Login to create a community",
            variant:"destructive",
            action:(
            <Link href={"/sign-in"} onClick={() => dismiss()} className={buttonVariants()}>Log in</Link>
            ),
             
         })
    }

    return {loginToast}
}