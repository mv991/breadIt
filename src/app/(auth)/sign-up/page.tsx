import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { SignUp } from "@/components/SignUp";
import { ChevronLeft } from "lucide-react";

const page: FC = () => {
  return (
    <div className="absolute inset-0">
      <div className="h-full max-w2xl mx-auto flex flex-col items-center justify-center gap-20">
        <Link
          href={"/"}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "self-start mt-20"
          )}
        >
          <ChevronLeft className="" />
        </Link>
        <SignUp />
      </div>
    </div>
  );
};
export default page;
