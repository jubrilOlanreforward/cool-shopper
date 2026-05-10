import React from 'react';
import { styleVars } from '../common/styleVars';
import SectionTitle from '../common/SectionTitle';
import ProductCard from './ProductCard';

const newArrivals = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf2ud7jNBM-eGbyiwcMq10e7rIOxrM4-igEOh3fuQepfQQa8828dw8RPaa4bvHGmypBRKTpqX_RhiH2oXD01_X7N1d-oePyGm1WKuMj3cagUie4Z3np_ricI1XRxDhIIq8XTkY5GTa5EAMKHXqsTHR96wHvcsCPuuqlD7bx92lXR_TW-cJN9m1WObdg4eMhgTzPTz3IllarE4RSOnhaiAMaB2XHcHrhc3xRFA6pRYVr6w1hfcBi9M25jHlHpUchPQs9H1oEL9cSqcp',
    category: 'Electronics',
    title: 'Serenity Tablet Pro',
    price: '$899.00',
    rating: 4.8,
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlsJR808xwTJEWQrByAbkXWF1NePnp6UHHwqZB9Lhp1DmcV2bkCebnhDVtT07Bx83W4_fLkuJzTs9EfXaxyKXHayIexxuuygV0oZaPMIXaoQWMvcdevdvl_4SAsFJgvg7_vch9s60Ahm-yJkle-9wW1vwReD6pLd7o_UGoi3oEb7X9ldzwSxXetgx1aPpnpkZqH5bsVYERl0SEtNBpt6y_mA3k0uvvP2-VDdfgclJE-08ec7prtY5nBmK1dqGKB370losJRWiYz_j3',
    category: 'Wellness',
    title: 'Dewy Glow Serum',
    price: '$54.00',
    rating: 4.7,
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc1qfSt_FFZoduh9S2pZ-GZfC2eD0XIBiuYmk3pjwuTw2enFYM6Us5iQfGc2RZ1ew3W-tKgyvEqB5AQPStpTY_rGHedHxxEUmF3PPyWjh5JzA1jDaKhyA_Nu8sIQ6o8uXvI1oa0TvFAuygDcpwr2FTVAbmcxxQsJfYBb3cqn1cO-xA_ZLXeOBGM73qeygoGFVWwo6K3mDrw5AbuCNfiUCsdC0icrnQPGQPvWfgGSv1sNx16yPEWYPG3wL_Qi2MhSn-GEYdmo7GfUM2',
    category: 'Laptops',
    title: 'AirBook Zen 14"',
    price: '$1,299.00',
    rating: 4.9,
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzdRzU7epdcCUk2L-2HicTUlBnW2f2pZaqRom-RqDUy8pF7fk__F7v5MQYGOA1bCJ3Ia73tMtZAwEXOsV1lolFyWt3xRFA6pRYVr6w1hfcBi9M25jHlHpUchPQs9H1oEL9cSqcp',
    category: 'Accessories',
    title: 'Horizon Blue Frames',
    price: '$120.00',
    rating: 4.6,
  },
];

export default function NewArrivalsSection() {
  return (
    <section className="mb-xl">
      <div className="flex justify-between items-end mb-md">
        <div>
          <SectionTitle
            title="New Arrivals"
            subtitle="The latest additions to our serene collection."
          />
        </div>
        <a className="text-primary font-bold font-label-sm border-b-2 border-primary pb-1 hover:text-primary-container hover:border-primary-container ${styleVars.transition}">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-md">
        {newArrivals.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </section>
  );
}
