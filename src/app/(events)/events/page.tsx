import EventCard from "./_components/EventCard";





export default async function UpcomingEventsPage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/events`,
    {
      cache: "no-store",
    },
  );

  const events = await response.json();
  console.log(events);


  return (
    <div>
      
       <main className="mx-auto max-w-7xl px-5 py-12">
       <div className="mb-10">
         <h1 className="text-4xl font-bold text-[#293241]">
          Upcoming Events
         </h1>

         <p className="mt-3 text-gray-500">
           Join our community and make a difference in the lives of stray
          animals.
         </p>
       </div>

       {events.length === 0 ? (
         <div className="py-20 text-center">
           <h2 className="text-2xl font-semibold">
             No upcoming events yet!
           </h2>
           <p className="mt-2 text-gray-500">
             Check back later for new animal welfare events.
           </p>
         </div>
       ) : (
         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
           {events.map((event) => (
             <EventCard key={event._id} event={event} />
           ))}
         </div>
       )}
     </main>
    </div>
  
  );
}


