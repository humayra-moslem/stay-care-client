import Banner from "@/components/banner";
import {
  CalendarDays,
  Camera,
  Heart,
  HeartHandshake,
  MapPin,
  PawPrint,
  ShieldCheck,
  Users,
} from "lucide-react";
import Link from "next/link";

import { Newsletter } from "@/components/newsletter";

const features = [
  {
    icon: HeartHandshake,
    title: "Care that connects",
    text: "Bring kind people together around a shared mission to care for every stray.",
  },
  {
    icon: CalendarDays,
    title: "Events that matter",
    text: "Discover local meetups, adoption drives, and volunteer opportunities near you.",
  },
  {
    icon: ShieldCheck,
    title: "A safer tomorrow",
    text: "Every small action helps create safer streets and brighter futures for animals.",
  },
];
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=85",
    alt: "Two happy dogs outdoors",
    className: "md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=85",
    alt: "A curious cat looking at the camera",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85",
    alt: "A golden dog resting",
    className: "",
  },
];

export default function Home() {
  return (
    <div>
      <Banner />
      <section
        id="features"
        className="border-y border-stone-100 bg-white px-5 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#e46238]">
              Why StayCare
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#293241] sm:text-4xl">
              Small acts. Big tail wags.
            </h2>
            <p className="mt-4 text-[#687382]">
              A simple way for people who care to find one another and make a
              real difference.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-3xl border border-stone-100 bg-[#fffaf5] p-7 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-100/60"
              >
                <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-[#fff0e9] text-[#f27d52]">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#293241]">{title}</h3>
                <p className="mt-3 leading-7 text-[#687382]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <section id="gallery" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#e46238]">
                <Camera size={16} /> From our community
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-[#293241] sm:text-4xl">
                Moments worth sharing
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#687382]">
              Every bowl filled, hand held, and happy adoption is part of the
              StayCare story.
            </p>
          </div>
          <div className="grid auto-rows-[220px] gap-4 md:grid-cols-2">
            {galleryImages.map((image) => (
              <div
                key={image.src}
                role="img"
                aria-label={image.alt}
                className={`group relative overflow-hidden rounded-3xl bg-stone-200 bg-cover bg-center ${image.className}`}
                style={{ backgroundImage: `url(${image.src})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#293241]/55 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute bottom-5 left-5 flex items-center gap-2 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100">
                  <Heart size={16} fill="currentColor" /> Shared with love
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Newsletter />
      <footer className="border-t border-stone-200 bg-[#fffaf5] px-5 py-12 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-[#f27d52] text-white">
                <PawPrint size={19} />
              </span>
              <span className="text-lg font-bold text-[#293241]">
                Stay<span className="text-[#f27d52]">Care</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-[#687382]">
              A kinder community for every paw. Together, we can make care
              contagious.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-8 text-sm sm:grid-cols-3">
            <div>
              <p className="mb-3 font-bold text-[#293241]">Explore</p>
              <Link
                href="#features"
                className="block py-1 text-[#687382] hover:text-[#e46238]"
              >
                Our mission
              </Link>
              <Link
                href="#gallery"
                className="block py-1 text-[#687382] hover:text-[#e46238]"
              >
                Gallery
              </Link>
            </div>
            <div>
              <p className="mb-3 font-bold text-[#293241]">Get involved</p>
              <Link
                href="/events"
                className="block py-1 text-[#687382] hover:text-[#e46238]"
              >
                Find events
              </Link>
              <Link
                href="/events/create"
                className="block py-1 text-[#687382] hover:text-[#e46238]"
              >
                Create an event
              </Link>
            </div>
            <div>
              <p className="mb-3 font-bold text-[#293241]">Contact</p>
              <p className="flex items-center gap-2 py-1 text-[#687382]">
                <MapPin size={15} /> Dhaka, Bangladesh
              </p>
              <p className="flex items-center gap-2 py-1 text-[#687382]">
                <Users size={15} /> Community first
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-stone-200 pt-5 text-xs text-[#87909c]">
          © 2026 StayCare. Made with care for every paw.
        </div>
      </footer>
    </div>
  );
}
