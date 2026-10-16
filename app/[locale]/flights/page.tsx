import { Metadata } from 'next';
import HeroSearch from '@/components/home/HeroSearch';
import { Plane, MapPin, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'Search Cheap Flights | FlightChap',
  description: 'Find and compare the cheapest flight deals across top destinations worldwide.',
};

const popularDestinations = [
  { key: 'new-york', name: 'New York', code: 'NYC', country: 'United States', color: 'from-blue-600 to-slate-900', desc: 'The city that never sleeps' },
  { key: 'london', name: 'London', code: 'LON', country: 'United Kingdom', color: 'from-red-700 to-slate-900', desc: 'Historic capital with world-class sights' },
  { key: 'dubai', name: 'Dubai', code: 'DXB', country: 'United Arab Emirates', color: 'from-amber-500 to-slate-900', desc: 'Futuristic luxury and desert adventures' },
  { key: 'tokyo', name: 'Tokyo', code: 'TYO', country: 'Japan', color: 'from-rose-600 to-slate-900', desc: 'Ultra-modern culture meets ancient traditions' },
  { key: 'paris', name: 'Paris', code: 'PAR', country: 'France', color: 'from-purple-600 to-slate-900', desc: 'Iconic art, romance, and culinary delights' },
];

export default function FlightsIndexPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Search Header */}
      <div className="relative bg-gradient-to-br from-[#1a0b2e] to-[#673AB7] pt-24 pb-44 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 text-white backdrop-blur-md text-sm font-semibold tracking-wide mb-6 uppercase">
            Global Flight Search
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
            Compare & Book Cheap Flights
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light">
            Search hundreds of airlines and travel sites in seconds to find the best fares.
          </p>
        </div>
      </div>

      {/* HeroSearch Widget Container */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32">
        <div className="bg-white rounded-2xl shadow-2xl p-2 md:p-4">
          <HeroSearch />
        </div>
      </div>

      {/* Featured Destinations */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Popular Destinations</h2>
            <p className="text-slate-500 text-sm mt-1">Explore top-rated travel hotspots with the best flight rates</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularDestinations.map(dest => (
            <Link
              key={dest.key}
              href={`/flights/${dest.key}`}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#673AB7]" />
                    <span className="font-semibold text-slate-800">{dest.country}</span>
                  </div>
                  <span className="text-xs font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">
                    {dest.code}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#673AB7] transition-colors mb-2">
                  {dest.name}
                </h3>
                <p className="text-slate-500 text-sm">{dest.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-[#673AB7]">
                <span>View Deals</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
