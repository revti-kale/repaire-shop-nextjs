import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";


type props = {
    icon: LucideIcon;
    label: string;
    href?: string;
};

export default function NavButton({ icon: Icon, label, href }: props) {
    return (
        <Button variant="ghost" size="icon"
            aria-label={label} title={label} className="rounded-full">
            {href ? (
                <Link href={href}>
                    <Icon />
                </Link>
            ) : (
                <Icon />
            )}

        </Button>
    );
}