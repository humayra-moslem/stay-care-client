"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CalendarDays,
  ChevronDown,
  Dog,
  LogIn,
  LogOut,
  Menu,
  PawPrint,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";

const protectedLinks = [
  { label: "Create Event", href: "/events/create" },
  { label: "Manage Events", href: "/events/manage" },
  { label: "Joined Events", href: "/events/joined" },
];

export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#fffdf9]/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={closeMenu}
        >
          <span className="flex size-10 items-center justify-center rounded-2xl bg-[#f27d52] text-white shadow-sm shadow-orange-200">
            <PawPrint size={21} strokeWidth={2.5} aria-hidden="true" />
          </span>
          <span className="text-xl font-bold tracking-tight text-[#293241]">
            Stay<span className="text-[#f27d52]">Care</span>
          </span>
        </Link>
        <button
          type="button"
          className="rounded-xl p-2 text-[#293241] transition hover:bg-orange-50 lg:hidden"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div
          className={`${isMenuOpen ? "flex" : "hidden"} absolute inset-x-0 top-[68px] flex-col gap-2 border-b border-stone-200 bg-[#fffdf9] p-5 lg:static lg:flex lg:flex-row lg:items-center lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0`}
        >
          <Link
            href="/events"
            onClick={closeMenu}
            className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-[#56616f] transition hover:bg-orange-50 hover:text-[#e46238]"
          >
            <CalendarDays size={17} aria-hidden="true" />
            Upcoming Events
          </Link>
          {/* <div className="mt-2 border-t border-stone-200 pt-3 lg:mt-0 lg:ml-2 lg:border-0 lg:pt-0">
            {!isLoggedIn ? (
              <button
                type="button"
                onClick={() => setIsLoggedIn(true)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#293241] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3d4b5e] lg:w-auto"
              >
                <LogIn size={16} aria-hidden="true" />
                Login
              </button>
            ) : (
              <details className="relative">
                <summary className="flex cursor-pointer list-none items-center gap-2 rounded-xl px-1 py-1 text-sm font-semibold text-[#293241] outline-none transition hover:bg-orange-50 [&::-webkit-details-marker]:hidden">
                  <span className="flex size-9 items-center justify-center rounded-full bg-[#f9c784] text-[#74472d] ring-2 ring-white">
                    <Dog size={19} aria-hidden="true" />
                  </span>
                  <span className="hidden sm:inline">My account</span>
                  <ChevronDown size={16} aria-hidden="true" />
                </summary>
                <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-stone-200 bg-white p-1.5 shadow-xl shadow-stone-200/50">
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-[#56616f] hover:bg-orange-50 hover:text-[#e46238]"
                  >
                    <UserRound size={16} aria-hidden="true" />
                    Profile
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsLoggedIn(false)}
                    className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm text-[#56616f] hover:bg-red-50 hover:text-red-600"
                  >
                    <LogOut size={16} aria-hidden="true" />
                    Logout
                  </button>
                </div>
              </details>
            )}
          </div> */}
          <div className="mt-2 border-t border-stone-200 pt-3 lg:mt-0 lg:ml-2 lg:border-0 lg:pt-0">
            {!isLoggedIn ? (
              <button
                type="button"
                onClick={() => setIsLoggedIn(true)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#293241] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3d4b5e] lg:w-auto"
              >
                <LogIn size={16} aria-hidden="true" />
                Login
              </button>
            ) : (
              <details className="relative">
                <summary className="flex cursor-pointer list-none items-center gap-2 rounded-xl px-1 py-1 text-sm font-semibold text-[#293241] outline-none transition hover:bg-orange-50 [&::-webkit-details-marker]:hidden">
                  <span className="flex size-9 items-center justify-center rounded-full bg-[#f9c784] text-[#74472d] ring-2 ring-white">
                    <Dog size={19} aria-hidden="true" />
                  </span>
                  <span className="hidden sm:inline">My account</span>
                  <ChevronDown size={16} aria-hidden="true" />
                </summary>
                <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-stone-200 bg-white p-1.5 shadow-xl shadow-stone-200/50">
                  <div className="px-3 pb-1.5 pt-2 text-xs font-semibold uppercase tracking-wider text-stone-400">
                    Event dashboard
                  </div>
                  {protectedLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-[#56616f] hover:bg-orange-50 hover:text-[#e46238]"
                    >
                      <ShieldCheck
                        size={16}
                        className="text-[#f27d52]"
                        aria-hidden="true"
                      />
                      {link.label}
                    </Link>
                  ))}
                  <div className="my-1 border-t border-stone-100" />
                  {/* <Link
                    href="/profile"
                    onClick={closeMenu}
                    className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-[#56616f] hover:bg-orange-50 hover:text-[#e46238]"
                  >
                    <UserRound size={16} aria-hidden="true" />
                    Profile
                  </Link> */}
                  <button
                    type="button"
                    onClick={() => setIsLoggedIn(false)}
                    className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm text-[#56616f] hover:bg-red-50 hover:text-red-600"
                  >
                    <LogOut size={16} aria-hidden="true" />
                    Logout
                  </button>
                </div>
              </details>
            )}
          </div>
        </div>
      </nav>
    </header>
    
  );
}
