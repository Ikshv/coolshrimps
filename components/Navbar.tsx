'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold text-teal-600">
          CoolShrimps
        </Link>

        {/* Nav Links */}
        <div className="hidden sm:flex space-x-6 text-sm font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/guide">Guide</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
