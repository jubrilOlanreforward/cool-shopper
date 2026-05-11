'use client';

export default function HeroSection() {
  return (
    <section className="mb-xl">
      <div className="max-w-3xl mx-auto text-center space-y-md">
        <h1 className="font-h1 text-h1 text-on-background">Find your zen.</h1>
        <div className="relative group">
          <input
            className="w-full bg-[#FAF9F6] border border-outline-variant/30 rounded-xl py-md px-lg pl-14 text-body-lg focus:outline-none focus:ring-2 focus:ring-primary-container transition-all soft-elevation"
            placeholder="Search for products, brands, or categories..."
            type="text"
          />
          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-outline">
            search
          </span>
        </div>
      </div>
    </section>
  );
}
