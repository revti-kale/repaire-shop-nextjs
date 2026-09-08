import Link from "next/link";

export default function Home() {
  return (
   <div className="bg-black bg-home bg-cover bg-center">
    <main className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto h-dvh">
      <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 text-white w-4/5 sm:max-w-96 mx-auto sm:text-2xl">
        <h1 className="text-3xl font-bold">Rev&apos;s Computer <br /> Repair Shop</h1>
        <address>
          555 Computer Lane <br />
          Tech City, TC 12345 <br />
        </address>
        <p>
          Open Daily 9am - 5pm 
        </p>
        <Link href="tel:5551234567" className="hover:underline">Call Us: (555) 123-4567</Link>
      </div>
    </main>
   </div>
  );
}
