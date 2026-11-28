"use client";

import { FormEvent, useState } from "react";
import { CalendarDays, CheckCircle2, MapPin, PawPrint } from "lucide-react";
import { toast } from "@/components/ui/toast";

const eventTypes = [
  "Pet meetup",
  "Adoption drive",
  "Volunteer activity",
  "Workshop",
  "Fundraiser",
];

export default function CreateEventPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitted(true);

    const form = e.currentTarget;

    const formData = new FormData(form);

    const createEvents = Object.fromEntries(formData.entries());

    const result = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/events`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(createEvents),
      },
    );
    const data = await result.json();
    console.log(data);
    console.log(result);

    if (data.acknowledged) {
      toast.add({
        title: " added successfully",
        description: "Your facility has been added to the platform.",
        type: "success",
       
      });;
    }
  }

  return (
    <main className="flex-1 px-5 py-10 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-[#fff0e9] text-[#f27d52]">
            <PawPrint size={28} strokeWidth={2.2} aria-hidden="true" />
          </div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#e46238]">
            Event dashboard
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-[#293241] sm:text-4xl">
            Create an event
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-[#6b7280]">
            Bring pet lovers together and create a memorable experience for your
            community.
          </p>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-xl shadow-stone-200/40 sm:p-9">
          {isSubmitted ? (
            <div className="flex flex-col items-center py-12 text-center">
              <CheckCircle2
                className="mb-4 size-14 text-emerald-500"
                aria-hidden="true"
              />
              <h2 className="text-2xl font-bold text-[#293241]">
                Event created successfully!
              </h2>
              <p className="mt-2 max-w-md text-[#6b7280]">
                Your event details have been saved and are ready to share with
                the StayCare community.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="mt-7 rounded-xl bg-[#f27d52] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#e46238] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f27d52]"
              >
                Create another event
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="event-title"
                    className="mb-2 block text-sm font-semibold text-[#293241]"
                  >
                    Event title <span className="text-[#e46238]">*</span>
                  </label>
                  <input
                    id="event-title"
                    name="title"
                    type="text"
                    placeholder="e.g. Weekend Dog Walk"
                    required
                    className="h-11 w-full rounded-xl border border-stone-200 bg-[#fffdf9] px-3.5 text-sm text-[#293241] outline-none transition placeholder:text-stone-400 focus:border-[#f27d52] focus:ring-3 focus:ring-orange-100"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="event-description"
                    className="mb-2 block text-sm font-semibold text-[#293241]"
                  >
                    Description <span className="text-[#e46238]">*</span>
                  </label>
                  <textarea
                    id="event-description"
                    name="description"
                    placeholder="Tell people what to expect at your event..."
                    required
                    rows={5}
                    className="w-full resize-y rounded-xl border border-stone-200 bg-[#fffdf9] px-3.5 py-3 text-sm text-[#293241] outline-none transition placeholder:text-stone-400 focus:border-[#f27d52] focus:ring-3 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="event-type"
                    className="mb-2 block text-sm font-semibold text-[#293241]"
                  >
                    Event type <span className="text-[#e46238]">*</span>
                  </label>
                  <select
                    id="event-type"
                    name="type"
                    defaultValue=""
                    required
                    className="h-11 w-full rounded-xl border border-stone-200 bg-[#fffdf9] px-3.5 text-sm text-[#293241] outline-none transition focus:border-[#f27d52] focus:ring-3 focus:ring-orange-100"
                  >
                    <option value="" disabled>
                      Select event type
                    </option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="event-date"
                    className="mb-2 block text-sm font-semibold text-[#293241]"
                  >
                    Event date <span className="text-[#e46238]">*</span>
                  </label>
                  <div className="relative">
                    <CalendarDays
                      className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-stone-400"
                      aria-hidden="true"
                    />
                    <input
                      id="event-date"
                      name="date"
                      type="date"
                      required
                      className="h-11 w-full rounded-xl border border-stone-200 bg-[#fffdf9] pl-10 pr-3.5 text-sm text-[#293241] outline-none transition focus:border-[#f27d52] focus:ring-3 focus:ring-orange-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="event-location"
                    className="mb-2 block text-sm font-semibold text-[#293241]"
                  >
                    Location <span className="text-[#e46238]">*</span>
                  </label>
                  <div className="relative">
                    <MapPin
                      className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-stone-400"
                      aria-hidden="true"
                    />
                    <input
                      id="event-location"
                      name="location"
                      type="text"
                      placeholder="e.g. Central Park, Dhaka"
                      required
                      className="h-11 w-full rounded-xl border border-stone-200 bg-[#fffdf9] pl-10 pr-3.5 text-sm text-[#293241] outline-none transition placeholder:text-stone-400 focus:border-[#f27d52] focus:ring-3 focus:ring-orange-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="thumbnail-url"
                    className="mb-2 block text-sm font-semibold text-[#293241]"
                  >
                    Thumbnail image URL
                  </label>
                  <input
                    id="thumbnail-url"
                    name="thumbnailUrl"
                    type="url"
                    placeholder="https://example.com/event.jpg"
                    className="h-11 w-full rounded-xl border border-stone-200 bg-[#fffdf9] px-3.5 text-sm text-[#293241] outline-none transition placeholder:text-stone-400 focus:border-[#f27d52] focus:ring-3 focus:ring-orange-100"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col-reverse gap-3 border-t border-stone-100 pt-6 sm:flex-row sm:justify-end">
                <button
                  type="reset"
                  className="rounded-xl px-5 py-2.5 text-sm font-semibold text-[#6b7280] transition hover:bg-stone-50 hover:text-[#293241]"
                >
                  Clear form
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-[#f27d52] px-6 py-2.5 text-sm font-semibold text-white shadow-sm shadow-orange-200 transition hover:bg-[#e46238] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f27d52]"
                >
                  Create event
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
