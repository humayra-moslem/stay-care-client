
import Link from "next/link";
import { ArrowRight, HeartHandshake, PawPrint } from "lucide-react";

const banner = () => {
    return (
        <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-5 py-16 lg:px-8 lg:py-24">
             
      <section className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3.5 py-1.5 text-sm font-semibold text-[#d6613a]">
            <PawPrint size={15} />A kinder community for every paw
          </p>
          <h1 className="max-w-2xl text-5xl font-bold leading-[1.08] tracking-tight text-[#293241] md:text-6xl">
            Find a little more <span className="text-[#f27d52]">care</span> for
            every stray.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#687382]">
            Connect caring people with local events that help stray cats and
            dogs find food, safety, and loving homes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 rounded-xl bg-[#f27d52] px-5 py-3 font-semibold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-[#e96f45]"
            >
              Explore events
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/events/create"
              className="inline-flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-5 py-3 font-semibold text-[#293241] transition hover:border-orange-200 hover:bg-orange-50"
            >
              Create an event
            </Link>
          </div>
        </div>
        <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-[3rem] bg-[#f9c784]/35">
          <div className="absolute -right-10 -top-10 size-44 rounded-full bg-[#f27d52]/20" />
          <div className="absolute -bottom-12 -left-8 size-52 rounded-full bg-[#8cc5ad]/30" />
          <HeartHandshake
            size={150}
            strokeWidth={1.2}
            className="relative text-[#d96f49]"
            aria-hidden="true"
          />
        </div>
      </section>
    
        </div>
    );
};

export default banner;