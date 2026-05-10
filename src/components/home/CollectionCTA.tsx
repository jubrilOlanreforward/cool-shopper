'use client';

export default function CollectionCTA() {
  return (
    <section className="bg-primary py-xl rounded-2xl relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-fixed rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full -ml-20 -mb-20 blur-3xl"></div>
      </div>
      <div className="relative z-10 text-center px-gutter max-w-2xl mx-auto space-y-md">
        <h2 className="font-h2 text-h2 text-white">Join the Serene Community</h2>
        <p className="text-on-primary/80 font-body-lg">
          Get exclusive access to new arrivals, sustainable living tips, and community-only offers.
        </p>
        <div className="flex flex-col sm:flex-row gap-sm justify-center">
          <input
            className="bg-white/10 border border-white/20 rounded-lg px-md py-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary-container min-w-[300px]"
            placeholder="Enter your email"
            type="email"
          />
          <button className="bg-white text-primary font-bold px-lg py-sm rounded-lg hover:bg-primary-container hover:text-on-primary-container transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
