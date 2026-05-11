'use client';

export default function CategoryGrid() {
  return (
    <section className="mb-xl">
      <div className="grid grid-cols-12 grid-rows-2 gap-md h-[600px]">
        {/* Smart Phones (Featured) */}
        <div className="col-span-8 row-span-2 relative group overflow-hidden rounded-xl bg-[#FAF9F6] soft-elevation cursor-pointer">
          <img
            alt="Smart Phones"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXzlOxoWIQ3svvbStmR2AZqxTKTep45og2xXHDqb78mpqrVgh1VJUabj5tm1cAnE3bs-XGmgRl314Q_9OP4GjBTxvTF9nJn7aVBq44g1tV4AfFKfU8H2UCNhQF48DDCNKKSr8w1iyOC7sVSKkVZ4H8yhCh5egdmSN0HGTFWsygM4JJAQwbkV-2REJeFWnuARa8R4ZX1lw_eCHMpXKXf22XAqphWAyeCSv7AeFMdklfUjp6-76cMtPEwyN0ZdUmbAeb4PUfNOmHnJlo"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-lg">
            <span className="text-white font-label-sm text-label-sm mb-xs uppercase tracking-widest">
              Premium Mobile
            </span>
            <h2 className="text-white font-h2 text-h2 mb-md">Smart Phones</h2>
            <button className="w-fit bg-primary-container text-on-primary-container px-md py-sm rounded-lg font-bold hover:brightness-110 active:scale-95 transition-all">
              Explore Collection
            </button>
          </div>
        </div>

        {/* Laptops */}
        <div className="col-span-4 row-span-1 relative group overflow-hidden rounded-xl bg-[#FAF9F6] soft-elevation cursor-pointer">
          <img
            alt="Laptops"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGt-Nc2vfgVr1Y6DT5yYE29kZGpOrHE7_8IqjIojl0CXAcUV3yssgexv9w5FMp4WNvjGKXk_m2ysIKJwLF9rp1PdIj7do7ueF7avqAGwiqx8KY5XM0lLlF8qDih1oa9b2SFxEK4mDYGcgPp44nWk-LgiekdGWxWcalZeAAbNKbwiiLrPKPrNMCJNqZ_Gcb3UCYEE6pYltqR0_8yZQEzJJwswPiRH50EHO9sjRgGmr395mXEWWaU3OOidYIGzFi39vhvxr0rrKBZ-rL"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <h3 className="text-white font-h3 text-h3">Laptops</h3>
          </div>
        </div>

        {/* Skincare */}
        <div className="col-span-4 row-span-1 relative group overflow-hidden rounded-xl bg-[#FAF9F6] soft-elevation cursor-pointer">
          <img
            alt="Skincare"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVxxRTXoM_96zXEHQa6L2y-vk97-0NKW0TjvwNw2USQGQ10hTi3h0FIwxTc-fXF-5YTaROrv4uLrbu3f9eE_LFPWI_vr4r1O75ARKVvcdak-Xi1QNqH4IMNuUTVlZt08ADtHmFD3VHVZU_qYTeGEHlx9hhzgwjJHoygY4xPtgKy4ryd-EAzevW8ITb-0hImNg5wrO7ok_6aI5jIltfX9runWHeL8s8AQJLzkKh7xtJ3M3KGRgia6Suq5DSHSCvb5QRbJwPa058_ynA"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <h3 className="text-white font-h3 text-h3">Skincare</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
