'use client';
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";


type props={
    className?: string;
    variant?: any;
    title?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function BackButton({ className, variant, title, ...props }: props) {
    const router = useRouter();
    return (
        <Button 
            className={className}
            variant={variant}
            title={title}
            onClick={() => router.back()}
            {...props}
        >
            {title}
        </Button>
    )
}