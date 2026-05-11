'use client';

import React from 'react';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import ProductOptions from './ProductOptions';
import ProductActions from './ProductActions';
import RelatedProducts from './RelatedProducts';

export default function ProductDetails() {
  const galleryImages = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDZZEiwc8ufeZK-KAT0dADwv1uqTOhZZZ41vhIm7tvOLRJTGW-x04E7fGRE9ayhfxoK3cpZzVFyUaRQwi3U4unHf-IfEEEFIcYzcdd4sSA8lAWsvPjMIVBCcHjxAsXtKAYhRl5G0h0pzxunsAODgHXsJA0BgAvrtds2LmCcoG5w2RoxKJbbVTQyF3KU91gCoDFfiCaPzLIUPlSbg0HcnunXpD_q0rxuWswdMSxcvWROtg3R4f9kD8fRE5fPqqpdmCUcAt1JzBYnTOdz',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDDHxt4FUYfW8q7KybLTd5aj4GEEu2XO9o01cu5Yps9OXOuJSYmXV4T0qDMNMkmMObJjRxxzZC4eaVXTa3wR8yUIQtfc55eJp7qZXHT3_euPtXeSj__9Bv0ae7XH-_NcfYHRVgXNss1Xm6qzzZzX3z--l5oVh3P0Ioj5XJVNNzwFARHm3FmxUS3TThEv-MYU0t00ZovduC5G2cQtfco6GIt1c5jO_3sQoIjQnQgSFmpD0UG9lQ0Tbk9zEFvgmDPD-N5ApfeyOo1iBl2',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAGRqKKcNdb5LPPF5qSnBZpxZSN_Y-XB1XKBQaYmQXCT1PjeTTIGOYJnQn0cQGL60zG8VPFT6Y8NETfMTNVdH95pQiOmu7OpBmxIJevEkPMkVSUsxP6VxLQ7vsmDJpWU3JQOrMmO-KU1s_IIHOJjIc_jeghqSSqpJCTmoFAYkPfsK_FBaDnN6fd789Tj0rccVjP19jMHgyuCiLoz_2hArvZcItuOmmjjU388tj1gsZ0oVd3B4H48SG7X2kvmlkEdvbC8ZfIAmNcgpSX',
  ];

  const colors = [
    { name: 'Turquoise Matte', bgClass: 'bg-primary', selected: true },
    { name: 'Cream', bgClass: 'bg-secondary-fixed', selected: false },
    { name: 'Charcoal', bgClass: 'bg-inverse-surface', selected: false },
  ];

  const sizes = [
    { label: 'Small', selected: true },
    { label: 'Large', selected: false },
  ];

  const relatedProducts = [
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzECa3UBKCTyrxs2tTUh7bRgsdBBQcRSFjYtZnKgjHb8Ln48apumf2IPuBY-amPnCKqHvgh9bJVCL10VMz-VJk3WRbscwdbLJ4d9WDkfDPzLu3-MJwCu3K_4JX3nQ_B28eJcwj6Lvghgy6zFQDGkB1BTqfQ2EUP3QkdItxcWE80K6NpGMA5J3kxDZavjcIUWP99CytyuLarVq0axYxLPJeIZfzvyiV1E39CypExbSI8v2HTyslZW0p3BipVOFL169ev81-fYxDxUfv',
      title: 'Organic Fiber Tray',
      price: '$45.00',
    },
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAE21jNUfOlywyRwv4e6CJoVDKUaLfwJaEQa2JCkqSjvTM3RaV2jIWnyd52U1NF-pzhnCHvNgLOwW6s3XQxvezRmh492_vYib08Q3p3THj-UUSN2kvduyGdfsAsGbBVPz9jY_lF1pLZxyhHD-EnVLczic_iB_cellK_Wq7I-LgmVfYyPlALOfxGbT2kSbkXfunOHhFSnSKevpiJLTKb-aXrVxCGujCHBGO1c3gndVLW6lEFndNxBIE11dGB9z3NmzS57nFSCJnmsnfB',
      title: 'Marble Taper Holder',
      price: '$32.00',
    },
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNOiIeuSTJtIM1d43edRgpfnoQavcHFFdvaG-7cWrlIwL8pVWiHL01F4E19ufObv3jpDYjn2TIt8lPmUbQoyRrkGiYuhRoUopTzfrHZjUL7qYW9cYNGE0hzfB5UzxaQUE1kltIcLhG5sU8RWXS-0BLTPpFquVyAALnDy_-ld_5Gk5n_L8Xw3E69hU0taoTX8Vj-I3t2OZ-gdsjrfkiuDv5jxWS6NKoUN6GHIzS2VJV_P96D2b6cO0NYImbpKaKjKO4wMtR290P6-Iz',
      title: 'Pure Linen Runner',
      price: '$58.00',
    },
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDBr5NUxB4d1rpFJuxk6leJ5_Teu_Eh3rzh-pY6oXeOPvJsxxOypfEEow35MuoufZN-o0ItB1tlaWHpoya2rMxXaLysGCyuM4O3y0Eq_Ac96WXG8Rg-nU009hLXBYDoVWTU1uc8Hmc-OSmQlonKyqftAzB4jB4cqgsp3_SuMNS4WSA_QBA-8PrI0g8NsJ5HsG_Xzy2wUUvbe3cD6YI1m0nD4uZx7OpuzIVCwnzGEJ4OPPwRtyuWph58N7z0nURdvriJgFOd02a-TUD',
      title: 'Artisan Pampas Stems',
      price: '$28.00',
    },
  ];

  return (
    <>
      {/* Product Details Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-xl items-start">
        {/* Left: Product Image */}
        <ProductGallery images={galleryImages} alt="Minimalist Ceramic Vase" />

        {/* Right: Product Info */}
        <div className="md:col-span-5 flex flex-col gap-md">
          <ProductInfo
            category="Handcrafted Essentials"
            title="Azure Serenity Vase"
            price="$89.00"
            rating={4}
            reviewCount={24}
            description="Elevate your living space with the Azure Serenity Vase. Each piece is hand-thrown by master artisans using premium clay, finished with a signature matte turquoise glaze that mimics the tranquil depths of the ocean."
          />

          <ProductOptions
            colors={colors}
            sizes={sizes}
            selectedColorName="Turquoise Matte"
          />

          <ProductActions />
        </div>
      </section>

      {/* Complete the Look / Related Products */}
      <RelatedProducts products={relatedProducts} />
    </>
  );
}
