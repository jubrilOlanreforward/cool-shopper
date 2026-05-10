import React from 'react';
import { styleVars } from '../common/styleVars';
import ProductListCard from './ProductListCard';

const products = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeDben2pL2gZkgt3HVotbGd-WKWgLEJDm4emXQHRdCZpZgl5FdLS2xPzwroC89qcHfMbob57lolFuJcjRFqAHaTf2GuYynVQN-wNbBrkCU5PvzMbYx8g9VKabO3hX6HaU_6AmAhE4d21N4DxgPmWrbpGnLVGvydFy0-SSzYF2n7FR6Jol7EpCi4SCu2e4xR5hXAH4PliRqvWNF1DhW9JWftAyfwaMLOLVrLHdkb8-WVqlyLy5CKH8llKUUTS-i2SWaPXU90T_txq_O',
    title: 'Botanical Hand Wash',
    description: 'Cedarwood and sage infused natural cleanser for gentle daily restoration.',
    price: '$28.00',
    rating: 5,
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC19BRYtUVCwuhUdaju3UFUFeVJ__LiGmO0qmlmfgOzA5iI3htqtMVrDUNC4bTEDl-97nsVM8_duW5BReCc0zlokn5mYgmhpf2Rwv1ozn0MuIzDdnK3ymrHyaCPXSms96cOB8dk4yqFW5xcHRsfh2HT1HktWsNtYOHNEyZ3FEHocRc6DYvgWAZPeHb7iu2tY0QyrFbItA673kcZjHVSwcpis9ebdtkG74m-J1wkhm1V419l6lKvXH98-L_VN-gmia0G59uU8vuIu-m8',
    title: 'Morning Mist Candle',
    description: 'Hand-poured soy wax with notes of eucalyptus and fresh linen for morning clarity.',
    price: '$42.00',
    rating: 4,
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-0rE3AQAbn3V3W-_pSH1N4MB4uTOrdPgbgNpZQhi_1LedjL2tjUccQ-64dOpi5PJ6kEhbL2K8Rx00lbrgKKcfPKIPHaKypdYS_ExU-WqW012TkCzqojFt6mJWDta79xgUekUxZL-m5UCX4j7k1ZT6DI5f7a5QPoZ6IWiVSnu1Ih6YYWZfJ8HZjS4GfJ9vImyaRErCoYP6WRnSfSq7g0yIvy2Yr0_egdfqdfAHvlFiEo1i_0zLpHz361cq0L8jzTdv1QexXpBcXzfR',
    title: 'Glow Serum',
    description: 'Vitamin C and hyaluronic acid concentrate for luminous, hydrated skin.',
    price: '$58.00',
    rating: 5,
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx0uiEeZnJogSp-jx82kKA9cClaW6hpL-KK9JdQl3HDaT85PXucXiju8EDx67SXnibf3L1i-VA5oN_31WuEXMHFQpL_o_uJ6yZ3cIe7X0NabzLfXlYazkY8toEHPlzgjTM-hUFmga2rg5KZFLDWV22ZFdOKZ-hinApADgYeF9aUinqgQPnkYwC5qghxd_0ZZbt8ZESJcS7v7-q2Q_JIwHo3Mi2y0H-TTX98li-pFJr8CgekqDg7gS5pAET3Vfv4JXw0CAS6wbvAvqS',
    title: 'Pure Linen Towel Set',
    description: 'Waffle-weave organic linen towels for superior absorption and rapid drying.',
    price: '$85.00',
    rating: 4.5,
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjJsktr-nu1udHmC4k3LlaP47iY4MRHRU1aPjvhrzJTIFq39Tli6QPVr0mJubvP23yQevmpbTsk6Gn-nbUUHNHhRa_-WuXJUse_hjzCwoLAgOjiiGxt9aRsxQhFfzNtxWidEbOUYkXwlvyO9tFrXPfw_1FJoDAyJECwZGbOO9EisIGGpqCmWzhDNJGW0c6shqoPD0TQp121GslPnDui5tcobMNJmMcTgR3A8LgnmLsFRsijQFc6Jx5a9hVmwftAyVj3Lnm5LqCZMuB',
    title: 'Ceramic Diffuser',
    description: 'Ultrasonic ceramic diffuser with 8-hour runtime and soft ambient glow.',
    price: '$120.00',
    rating: 5,
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpy203_zy1FVQs5mDWV7OUoWvNuCtLJ49YFm_bX21Y7yr1WAuGe8xWGDiAWTIC7urnr4nUI3bEIYXy4DJfPyOj54i44YVpQN8lDX1N1_XgJhO11YD7P1byVM3w7TOGrEQLIffzewzvU9jwrF3YvH7Rac1njoDrSSZAug6uPWYKseq5cDBnGFG810IlDECrHaAfJaVc8RY0TLoxYAG2N_H358ynSlTFEAjPgrzihBr3uoY8XNA00OzmWEN8IcJRuAh3NiypJdY5Fl35',
    title: 'Cloud Wool Slippers',
    description: 'Recycled merino wool slippers for ultimate breathable warmth and comfort.',
    price: '$65.00',
    rating: 4,
  },
];

export default function ProductListGrid() {
  return (
    <section className="flex-1">
      <div className="flex justify-between items-end mb-lg">
        <div>
          <p className="text-on-surface-variant font-body-md mb-xs">Showing 1–12 of 48 results</p>
          <h2 className={`${styleVars.fontH2} text-on-background`}>The Essentials</h2>
        </div>
        <div className="flex items-center gap-sm">
          <span className="font-label-sm text-label-sm text-outline">Sort by</span>
          <select className="bg-transparent border-none font-semibold text-primary focus:ring-0 cursor-pointer">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Top Rated</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
        {products.map((product) => (
          <ProductListCard key={product.title} {...product} />
        ))}
      </div>
    </section>
  );
}
