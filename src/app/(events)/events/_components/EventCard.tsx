
import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

interface Event {
  _id: string;
  title: string;
  description: string;
  type: string;
  date: string;
  location: string;
  thumbnailUrl?: string;
}

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Card className="group overflow-hidden rounded-2xl border border-green-100 bg-white py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Thumbnail */}
      <div className="relative h-52 w-full overflow-hidden bg-green-50">
        {event.thumbnailUrl ? (
          <Image
            src={event.thumbnailUrl}
            alt={event.title}
            fill
            unoptimized
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            No Image Available
          </div>
        )}

        <Badge className="absolute left-4 top-4 border-0 bg-green-100 text-green-800 hover:bg-green-100">
          {event.type}
        </Badge>
      </div>

      {/* Event Information */}
      <CardHeader className="px-5 pt-5">
        <CardTitle className="text-xl font-bold text-[#293241] group-hover:text-green-700">
          {event.title}
        </CardTitle>

        <CardDescription className="line-clamp-2 leading-6">
          {event.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3 px-5 pb-5">

        <div className="flex items-center gap-3 text-sm text-gray-600">
          <CalendarDays className="size-4 text-green-700" />
          {new Date(event.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-600">
          <MapPin className="size-4 text-green-700" />
          <span className="line-clamp-1">{event.location}</span>
        </div>

      </CardContent>
    </Card>
  );
}
