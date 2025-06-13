import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="top-0 z-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-center">
        <Link href="/" className="text-2xl font-bold hover:opacity-80">
          CyberMoon
        </Link>
      </div>
    </nav>
  );
}