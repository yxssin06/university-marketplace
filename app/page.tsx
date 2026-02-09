import ItemList from '../components/ItemList';
import { mockItems } from '../data/mockData';

export default function Home() {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 py-20 px-4 text-center sm:text-left relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Buy & Sell on <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-200">Campus</span>
            </h1>
            <p className="text-lg sm:text-xl text-indigo-100 mb-8 max-w-lg">
              The safest and easiest way for students to trade textbooks, furniture, and electronics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <button className="bg-white text-indigo-900 px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform hover:-translate-y-0.5">
                Browse Items
              </button>
              <button className="bg-indigo-600/30 backdrop-blur-sm border border-white/20 text-white px-8 py-3.5 rounded-full font-bold hover:bg-indigo-600/40 transition-all">
                Sell an Item
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Fresh Listings</h2>
            <button className="text-indigo-600 font-medium hover:text-indigo-800 text-sm">
              View All &rarr;
            </button>
          </div>
          
          <ItemList items={mockItems} />
          
          <div className="mt-12 text-center">
            <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
              Load More Listings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
