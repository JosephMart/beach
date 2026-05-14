"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, Clock, Car, Star, MapPin } from "lucide-react"

const destinations = [
  {
    rank: 1,
    destination: "San Diego",
    area: "Coronado / La Jolla",
    ausFlightTime: "~3h 00m nonstop",
    dallasFlightTime: "~3h 00m-3h 30m",
    airportCode: "SAN",
    transferTime: "15-30 min",
    bestFit: "Best July weather, baby-friendly, easy USA",
    highlight: "top-pick",
    image: "/images/san-diego.jpg",
  },
  {
    rank: 2,
    destination: "Fort Lauderdale",
    area: "Hollywood Beach",
    ausFlightTime: "~2h 35m-3h 05m",
    dallasFlightTime: "~2h 35m-3h 00m",
    airportCode: "FLL",
    transferTime: "15-25 min",
    bestFit: "Easiest true beach/resort feel",
    highlight: "beach",
    image: "/images/fort-lauderdale.jpg",
  },
  {
    rank: 3,
    destination: "Miami Beach",
    area: "Surfside / Bal Harbour",
    ausFlightTime: "~2h 40m-3h 00m",
    dallasFlightTime: "~2h 45m-3h 10m",
    airportCode: "MIA",
    transferTime: "25-45 min",
    bestFit: "Fun couples trip, restaurants, beach",
    highlight: "couples",
    image: "/images/miami-beach.jpg",
  },
  {
    rank: 4,
    destination: "St. Pete Beach",
    area: "Clearwater, FL",
    ausFlightTime: "~2h 30m-2h 40m",
    dallasFlightTime: "~2h 15m-2h 35m",
    airportCode: "TPA",
    transferTime: "30-45 min",
    bestFit: "Relaxed Gulf Coast beach trip",
    highlight: "relaxed",
    image: "/images/st-pete-beach.jpg",
  },
  {
    rank: 5,
    destination: "Charleston",
    area: "Isle of Palms, SC",
    ausFlightTime: "~2h 30m-2h 40m",
    dallasFlightTime: "~2h 30m-2h 55m",
    airportCode: "CHS",
    transferTime: "25-40 min",
    bestFit: "Beach + charming city + great food",
    highlight: "food",
    image: "/images/charleston.jpg",
  },
  {
    rank: 6,
    destination: "Hilton Head",
    area: "Savannah Area",
    ausFlightTime: "~2h 15m-3h 00m*",
    dallasFlightTime: "~2h 15m-2h 45m*",
    airportCode: "SAV",
    transferTime: "45-60 min",
    bestFit: "Calm family beach, condos, low stress",
    highlight: "family",
    image: "/images/hilton-head.jpg",
  },
  {
    rank: 7,
    destination: "Oahu / Waikiki",
    area: "Hawaii",
    ausFlightTime: "~8h 25m+ / 1-stop",
    dallasFlightTime: "~8h 20m nonstop",
    airportCode: "HNL",
    transferTime: "20-30 min",
    bestFit: 'Best "wow" beach, but long for 5 days',
    highlight: "wow",
    image: "/images/waikiki.jpg",
  },
  {
    rank: 8,
    destination: "Destin",
    area: "Miramar Beach, FL",
    ausFlightTime: "~1h 50m nonstop*",
    dallasFlightTime: "~1h 50m nonstop",
    airportCode: "VPS",
    transferTime: "25-40 min",
    bestFit: "Pretty Gulf beach, condos, family-friendly",
    highlight: "family",
    image: "/images/destin.jpg",
  },
  {
    rank: 9,
    destination: "30A",
    area: "Rosemary / Seaside / WaterColor",
    ausFlightTime: "~1h 50m to VPS*",
    dallasFlightTime: "~1h 50m-2h 00m",
    airportCode: "ECP/VPS",
    transferTime: "30-60 min",
    bestFit: "Nicer beach towns, group rentals, upscale",
    highlight: "upscale",
    image: "/images/30a.jpg",
  },
]

function getRankBadge(rank: number) {
  if (rank === 1) return "bg-amber-500 text-white"
  if (rank === 2) return "bg-slate-400 text-white"
  if (rank === 3) return "bg-amber-700 text-white"
  return "bg-slate-200 text-slate-700"
}

function getHighlightColor(highlight: string) {
  const colors: Record<string, string> = {
    "top-pick": "border-l-amber-500",
    beach: "border-l-cyan-500",
    couples: "border-l-pink-500",
    relaxed: "border-l-teal-500",
    food: "border-l-orange-500",
    family: "border-l-green-500",
    wow: "border-l-purple-500",
    upscale: "border-l-indigo-500",
  }
  return colors[highlight] || "border-l-slate-300"
}

export default function DestinationsTable() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50 p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            🏖️ Beach Trip Destinations
          </h1>
          <p className="text-slate-600">Ranked by overall fit for your July getaway</p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg lg:block">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-sky-600 to-cyan-600 text-white">
                <th className="px-4 py-4 text-left text-sm font-semibold">Rank</th>
                <th className="px-4 py-4 text-left text-sm font-semibold">Beach</th>
                <th className="px-4 py-4 text-left text-sm font-semibold">Destination</th>
                <th className="px-4 py-4 text-left text-sm font-semibold">
                  <div className="flex items-center gap-1.5">
                    <Plane className="h-4 w-4" />
                    From AUS
                  </div>
                </th>
                <th className="px-4 py-4 text-left text-sm font-semibold">
                  <div className="flex items-center gap-1.5">
                    <Plane className="h-4 w-4" />
                    From Dallas
                  </div>
                </th>
                <th className="px-4 py-4 text-left text-sm font-semibold">
                  <div className="flex items-center gap-1.5">
                    <Car className="h-4 w-4" />
                    To Beach
                  </div>
                </th>
                <th className="px-4 py-4 text-left text-sm font-semibold">
                  <div className="flex items-center gap-1.5">
                    <Star className="h-4 w-4" />
                    Best Fit
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {destinations.map((dest, index) => (
                <tr
                  key={dest.rank}
                  className={`border-l-4 transition-colors hover:bg-sky-50 ${getHighlightColor(dest.highlight)} ${
                    index % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                  }`}
                >
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${getRankBadge(dest.rank)}`}
                    >
                      {dest.rank}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="relative h-16 w-24 overflow-hidden rounded-lg shadow-md">
                      <Image
                        src={dest.image}
                        alt={`${dest.destination} beach`}
                        fill
                        className="object-cover transition-transform hover:scale-110"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div>
                      <div className="font-semibold text-slate-900">{dest.destination}</div>
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <MapPin className="h-3 w-3" />
                        {dest.area}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1.5 text-sm text-slate-700">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      {dest.ausFlightTime}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1.5 text-sm text-slate-700">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      {dest.dallasFlightTime}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <Badge variant="secondary" className="font-mono text-xs">
                      {dest.airportCode} → {dest.transferTime}
                    </Badge>
                  </td>
                  <td className="max-w-xs px-4 py-4 text-sm text-slate-600">{dest.bestFit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="flex flex-col gap-4 lg:hidden">
          {destinations.map((dest) => (
            <Card
              key={dest.rank}
              className={`overflow-hidden border-l-4 transition-shadow hover:shadow-md ${getHighlightColor(dest.highlight)}`}
            >
              <div className="relative h-40 w-full">
                <Image
                  src={dest.image}
                  alt={`${dest.destination} beach`}
                  fill
                  className="object-cover"
                />
                <div className="absolute left-3 top-3">
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold shadow-lg ${getRankBadge(dest.rank)}`}
                  >
                    {dest.rank}
                  </span>
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{dest.destination}</CardTitle>
                    <p className="flex items-center gap-1 text-sm text-slate-500">
                      <MapPin className="h-3 w-3" />
                      {dest.area}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg bg-slate-50 p-2">
                    <div className="mb-1 flex items-center gap-1 text-xs font-medium text-slate-500">
                      <Plane className="h-3 w-3" /> From AUS
                    </div>
                    <div className="font-medium text-slate-700">{dest.ausFlightTime}</div>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-2">
                    <div className="mb-1 flex items-center gap-1 text-xs font-medium text-slate-500">
                      <Plane className="h-3 w-3" /> From Dallas
                    </div>
                    <div className="font-medium text-slate-700">{dest.dallasFlightTime}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="h-4 w-4 text-slate-400" />
                  <Badge variant="secondary" className="font-mono text-xs">
                    {dest.airportCode} → {dest.transferTime}
                  </Badge>
                </div>
                <div className="rounded-lg bg-sky-50 p-2 text-sm text-sky-800">
                  <Star className="mb-0.5 mr-1 inline h-3.5 w-3.5" />
                  {dest.bestFit}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          * Flight times may vary. Transfer times are approximate.
        </p>
      </div>
    </div>
  )
}
