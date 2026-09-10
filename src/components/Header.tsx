import { File, HomeIcon, LogOut, UsersRound } from "lucide-react";
import NavButton from "./NavButton";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "./ui/button";

export default function Header() {
    return (
        <header className="animate-slide bg-background h-12 p-2 sticky border-b top-0 z-20">
            <div className="flex h-8 items-center justify-between w-full" >
                <div className="flex items-center gap-2">
                    <NavButton href="/home" icon={HomeIcon} label="Home" />
                    <Link href="/home" className="flex justify-center items-center gap-2 ml-0" title="Home">
                        <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
                            Repair Shop
                        </h1>
                    </Link>
                </div>

                <div className="flex items-center ">
                    <NavButton href="/tickets" icon={File} label="Tickets" />
                    <NavButton href="/customers" icon={UsersRound} label="Customers" />
                    <ModeToggle />
                    <Button variant="ghost" size="icon" aria-label="logout" title="Logout" className="rounded-full">
                        <LogoutLink><LogOut /></LogoutLink>
                    </Button>                    
                </div>
            </div>

        </header>
    )
}