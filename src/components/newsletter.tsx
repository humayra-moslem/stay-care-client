"use client";

import { Mail, Sparkles } from "lucide-react";

export function Newsletter() {
  return (
    <section id="newsletter" className="px-5 pb-20 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-[2rem] bg-[#293241] px-7 py-10 text-white sm:px-12 lg:flex-row lg:items-center">
        <div className="relative z-10 max-w-xl">
          <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#f9c784]">
            <Sparkles size={16} /> Stay in the loop
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Good news for good people.
          </h2>
          <p className="mt-3 leading-7 text-slate-300">
            Get upcoming events, community stories, and helpful ways to lend a
            paw in your inbox.
          </p>
        </div>
        <form
          className="relative z-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <div className="flex flex-1 items-center gap-2 rounded-xl bg-white px-4 text-[#687382]">
            <Mail size={18} />
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email address"
              className="w-full bg-transparent py-3 text-sm text-[#293241] outline-none placeholder:text-stone-400"
            />
          </div>
          <button
            type="submit"
            className="rounded-xl bg-[#f27d52] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#e46238]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
