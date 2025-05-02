"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 flex items-center justify-around py-3 bg-white border-b border-gray-200">
      <div>
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={200} height={200} />
        </Link>
      </div>
      <div>
        <nav className="flex gap-4 font-semibold">
          <Link href="/">MEN</Link>
          <Link href="/">WOMEN</Link>
          <Link href="/">MOBILE COVERS</Link>
        </nav>
      </div>
      {/* Search, Account, Wishlist, Cart */}
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex relative">
          <input
            type="text"
            placeholder="Search by products"
            className="pl-10 pr-4 py-2 bg-gray-100 rounded-md text-sm"
          />
          <Search className="absolute top-2.5 left-3 h-4 w-4 text-gray-500" />
        </div>
        <Link href="/login" className="text-xs font-medium hidden md:block">
          LOGIN
        </Link>
        <Link href="/wishlist" className="relative inline-flex">
          <Heart className="h-5 w-5 text-gray-700" />
        </Link>
        <Link href="/cart" className="relative inline-flex">
          <ShoppingBag className="h-5 w-5 text-gray-700" />
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white p-4 border-t border-gray-200">
          <div className="flex items-center mb-4">
            <Search className="h-4 w-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search by products"
              className="w-full px-4 py-2 bg-gray-100 rounded-md text-sm"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <Link
              href="/men-clothing"
              className="text-sm font-medium text-gray-700 hover:text-bewakoof-dark py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              MEN
            </Link>
            <Link
              href="/women-clothing"
              className="text-sm font-medium text-gray-700 hover:text-bewakoof-dark py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              WOMEN
            </Link>
            <Link
              href="/mobile-covers"
              className="text-sm font-medium text-gray-700 hover:text-bewakoof-dark py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              MOBILE COVERS
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium text-gray-700 hover:text-bewakoof-dark py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              LOGIN
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
