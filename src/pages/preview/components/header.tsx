import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
const title="რესტორანი მრავალჟამიერი"
const PreviewHeader = () => {
  return (
    <section className="flex items-center justify-between z-10 relative  inset-0 bg-linear-to-b from-black to-transparent p-4 gap-2">
   
  
        <h1 className="truncate text-white text-sm font-medium">{title.toUpperCase()}</h1>

    <LangDropdown />

    </section>
  );
};

export default PreviewHeader;

const LangDropdown=()=>{
    return( <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline" className="bg-white/30 text-white">KA</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem>
           Georgian
          </DropdownMenuItem>
          <DropdownMenuItem>
            English
           
          </DropdownMenuItem>
          <DropdownMenuItem>
            Russian

          </DropdownMenuItem>
          </DropdownMenuGroup>
    </DropdownMenuContent>


    </DropdownMenu>
    )
}