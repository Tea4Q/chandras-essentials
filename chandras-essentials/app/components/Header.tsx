import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#12385C]/10 bg-[#F7F3E8]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#12385C]/15 bg-white shadow-sm">
            <Image src="/CE_Logo.png" alt="" width={36} height={36} className="h-9 w-9 rounded-xl object-cover" />
          </div>
          <div>
            <p className="font-serif text-xl tracking-wide text-[#12385C] group-hover:text-[#5FA8A8] transition">
              Chandra&apos;s Essentials
            </p>
            <p className="text-xs uppercase tracking-[0.24em] text-[#12385C]/60">SaaS studio &amp; consulting</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link href="/#products" className="text-[#12385C] transition hover:text-[#5FA8A8]">Products</Link>
          <Link href="/#services" className="text-[#12385C] transition hover:text-[#5FA8A8]">Services</Link>
          <Link href="/#about" className="text-[#12385C] transition hover:text-[#5FA8A8]">About</Link>
          <Link
            href="/#contact"
            className="rounded-full bg-[#12385C] px-4 py-2 text-white transition hover:opacity-90"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
