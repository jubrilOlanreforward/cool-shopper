'use client';

export default function CategoryGrid() {
  const categories = [
    {
      id: 1,
      title: 'Smart Phones',
      subtitle: 'Premium Mobile',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXzlOxoWIQ3svvbStmR2AZqxTKTep45og2xXHDqb78mpqrVgh1VJUabj5tm1cAnE3bs-XGmgRl314Q_9OP4GjBTxvTF9nJn7aVBq44g1tV4AfFKfU8H2UCNhQF48DDCNKKSr8w1iyOC7sVSKkVZ4H8yhCh5egdmSN0HGTFWsygM4JJAQwbkV-2REJeFWnuARa8R4ZX1lw_eCHMpXKXf22XAqphWAyeCSv7AeFMdklfUjp6-76cMtPEwyN0ZdUmbAeb4PUfNOmHnJlo',
      colSpan: 8,
      rowSpan: 2,
    },
    {
      id: 2,
      title: 'Laptops',
      subtitle: '',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGt-Nc2vfgVr1Y6DT5yYE29kZGpOrHE7_8IqjIojl0CXAcUV3yssgexv9w5FMp4WNvjGKXk_m2ysIKJwLF9rp1PdIj7do7ueF7avqAGwiqx8KY5XM0lLlF8qDih1oa9b2SFxEK4mDYGcgPp44nWk-LgiekdGWxWcalZeAAbNKbwiiLrPKPrNMCJNqZ_Gcb3UCYEE6pYltqR0_8yZQEzJJwswPiRH50EHO9sjRgGmr395mXEWWaU3OOidYIGzFi39vhvxr0rrKBZ-rL',
      colSpan: 4,
      rowSpan: 1,
    },
    {
      id: 3,
      title: 'Skincare',
      subtitle: '',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVxxRTXoM_96zXEHQa6L2y-vk97-0NKW0TjvwNw2USQGQ10hTi3h0FIwxTc-fXF-5YTaROrv4uLrbu3f9eE_LFPWI_vr4r1O75ARKVvcdak-Xi1QNqH4IMNuUTVlZt08ADtHmFD3VHVZU_qYTeGEHlx9hhzgwjJHoygY4xPtgKy4ryd-EAzevW8ITb-0hImNg5wrO7ok_6aI5jIltfX9runWHeL8s8AQJLzkKh7xtJ3M3KGRgia6Suq5DSHSCvb5QRbJwPa058_ynA',
      colSpan: 4,
      rowSpan: 1,
    },
  ];

  return (
    <section className="mb-xl">
      <div className="grid grid-cols-12 grid-rows-2 gap-md h-[600px]">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`col-span-${cat.colSpan} row-span-${cat.rowSpan} relative group overflow-hidden rounded-xl bg-[#FAF9F6] soft-elevation cursor-pointer`}
          >
            <img
              alt={cat.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={cat.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-lg">
              {cat.subtitle && (
                <span className="text-white font-label-sm text-label-sm mb-xs uppercase tracking-widest">
                  {cat.subtitle}
                </span>
              )}
              <h2 className="text-white font-h2 text-h2 mb-md">{cat.title}</h2>
              <button className="w-fit bg-primary-container text-on-primary-container px-md py-sm rounded-lg font-bold hover:brightness-110 active:scale-95 transition-all">
                Explore Collection
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
