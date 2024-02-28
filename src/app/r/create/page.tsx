"use client"
import { Button, buttonVariants } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {useMutation} from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import { useState } from "react";
import { CreateSubredditPayload } from "@/lib/validators/subreddit";
import { toast } from "@/hooks/use-toast";
import { useCustomToast } from "@/hooks/use-custom-toast";


export default function Page() {
    const [input,setInput] = useState("");
    const router = useRouter();
    const {loginToast} = useCustomToast()
    const {mutate:createCommunity,isLoading} = useMutation({
        mutationFn: async () => {
          const payload : CreateSubredditPayload = {
               name:input
          }
           const {data} = await axios.post(`/api/subreddit`,payload);
           return data as string;
        },
        onError: (err) => {
           if(err instanceof AxiosError) {
            if(err.response?.status ===409) {
               return toast({
                  title:"Subreddit already exists",
                  description:"Please choose a diffrent subreddit name",
                  variant:"destructive",
               })
            }
            if(err.response?.status === 422) {
               return toast({
                  title:"Invalid Subreddit Name",
                  description:"Please choose a  subreddit name between 3 and 22 charcters",
                  variant:"destructive",
               })
            }
            if(err.response?.status === 401) {
               return loginToast()
            }
           }
        }  
      })
  return( 
     <div className="container flex items-center h-full max-w-3xl mx-auto">
        <div className="relative bg-white w-full h-fit p-4 rounded-lg space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="font-semibold text-xl">Create A Community</h1>
            </div>
             <hr className="bg-zinc-500 h-px"/>
             <div>
                <p className="text-lg font-medium">Name</p>
                <p>Community names including capitalization cannot be changed</p>
                <div className="relative">
                    <p className="absolute left-0 width-8 inset-y-0 grid items-center text-sm text-zinc-400">r/</p>
                       <Input value={input} onChange={(e) => setInput(e.target.value)} className="pl-6"/> 
                   
                </div>
             </div>
             <div className="flex justify-end gap-4">
                <Button variant="subtle" onClick={() => router.back()}>Cancel</Button>
                <Button isLoading={isLoading} disabled={input.length==0} onClick={() => createCommunity()}>Create Community</Button>
             </div>
        </div>

     </div>
   
   )
}
