import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Page Not Found",
};

export default function NotFound() {

    return (
        <div className="p-6 w-full">
            <div className="mx-auto py-4 flex flex-col items-center justify-center gap-4 ">
                <h2 className="text-3xl font-bold">Page Not Found</h2>
                <p className="text-lg text-muted-foreground">
                    The page you are looking for does not exist.
                </p>
                <Link
                    href="/home"
                    className="hover:underline"
                >
                    Go back home
                </Link>
                <Image
                    className="m-0 rounded-xl"
                    src="/images/page-not-found.jpg"
                    alt="Page Not Found"
                    width={300}
                    height={300}
                    priority={true}
                    title="Page Not Found"
                />
            </div>
        </div>
    );
}