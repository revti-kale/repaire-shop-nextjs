import Header from "@/components/Header";

export default function RSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-7xl animate-appear">
        <Header />
      <div className="px-4 py-2">{children}</div>
    </div>
  );
}