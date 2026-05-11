'use client';

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  description: string;
  rating: number;
}

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Botanical Hand Wash',
    price: '$28.00',
    description: 'Cedarwood and sage infused natural cleanser for gentle daily restoration.',
    rating: 5,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeDben2pL2gZkgt3HVotbGd-WKWgLEJDm4emXQHRdCZpZgl5FdLS2xPzwroC89qcHfMbob57lolFuJcjRFqAHaTf2GuYynVQN-wNbBrkCU5PvzMbYx8g9VKabO3hX6HaU_6AmAhE4d21N4DxgPmWrbpGnLVGvydFy0-SSzYF2n7FR6Jol7EpCi4SCu2e4xR5hXAH4PliRqvWNF1DhW9JWftAyfwaMLOLVrLHdkb8-WVqlyLy5CKH8llKUUTS-i2SWaPXU90T_txq_O',
  },
  {
    id: 2,
    title: 'Morning Mist Candle',
    price: '$42.00',
    description: 'Hand-poured soy wax with notes of eucalyptus and fresh linen for morning clarity.',
    rating: 4,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC19BRYtUVCwuhUdaju3UFUFeVJ__LiGmO0qmlmfgOzA5iI3htqtMVrDUNC4bTEDl-97nsVM8_duW5BReCc0zlokn5mYgmhpf2Rwv1ozn0MuIzDdnK3ymrHyaCPXSms96cOB8dk4yqFW5xcHRsfh2HT1HktWsNtYOHNEyZ3FEHocRc6DYvgWAZPeHb7iu2tY0QyrFbItA673kcZjHVSwcpis9ebdtkG74m-J1wkhm1V419l6lKvXH98-L_VN-gmia0G59uU8vuIu-m8',
  },
  {
    id: 3,
    title: 'Glow Serum',
    price: '$58.00',
    description: 'Vitamin C and hyaluronic acid concentrate for luminous, hydrated skin.',
    rating: 5,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-0rE3AQAbn3V3W-_pSH1N4MB4uTOrdPgbgNpZQhi_1LedjL2tjUccQ-64dOpi5PJ6kEhbL2K8Rx00lbrgKKcfPKIPHaKypdYS_ExU-WqW012TkCzqojFt6mJWDta79xgUekUxZL-m5UCX4j7k1ZT6DI5f7a5QPoZ6IWiVSnu1Ih6YYWZfJ8HZjS4GfJ9vImyaRErCoYP6WRnSfSq7g0yIvy2Yr0_egdfqdfAHvlFiEo1i_0zLpHz361cq0L8jzTdv1QexXpBcXzfR',
  },
  {
    id: 4,
    title: 'Pure Linen Towel Set',
    price: '$85.00',
    description: 'Waffle-weave organic linen towels for superior absorption and rapid drying.',
    rating: 4.5,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx0uiEeZnJogSp-jx82kKA9cClaW6hpL-KK9JdQl3HDaT85PXucXiju8EDx67SXnibf3L1i-VA5oN_31WuEXMHFQpL_o_uJ6yZ3cIe7X0NabzLfXlYazkY8toEHPlzgjTM-hUFmga2rg5KZFLDWV22ZFdOKZ-hinApADgYeF9aUinqgQPnkYwC5qghxd_0ZZbt8ZESJcS7v7-q2Q_JIwHo3Mi2y0H-TTX98li-pFJr8CgekqDg7gS5pAET3Vfv4JXw0CAS6wbvAvqS',
  },
  {
    id: 5,
    title: 'Ceramic Diffuser',
    price: '$120.00',
    description: 'Ultrasonic ceramic diffuser with 8-hour runtime and soft ambient glow.',
    rating: 5,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjJsktr-nu1udHmC4k3LlaP47iY4MRHRU1aPjvhrzJTIFq39Tli6QPVr0mJubvP23yQevmpbTsk6Gn-nbUUHNHhRa_-WuXJUse_hjzCwoLAgOjiiGxt9aRsxQhFfzNtxWidEbOUYkXwlvyO9tFrXPfw_1FJoDAyJECwZGbOO9EisIGGpqCmWzhDNJGW0c6shqoPD0TQp121GslPnDui5tcobMNJmMcTgR3A8LgnmLsFRsijQFc6Jx5a9hVmwftAyVj3Lnm5LqCZMuB',
  },
  {
    id: 6,
    title: 'Cloud Wool Slippers',
    price: '$65.00',
    description: 'Recycled merino wool slippers for ultimate breathable warmth and comfort.',
    rating: 4,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpy203_zy1FVQs5mDWV7OUoWvNuCtLJ49YFm_bX21Y7yr1WAuGe8xWGDiAWTIC7urnr4nUI3bEIYXy4DJfPyOj54i44YVpQN8lDX1N1_XgJhO11YD7P1byVM3w7TOGrEQLIffzewzvU9jwrF3YvH7Rac1njoDrSSZAug6uPWYKseq5cDBnGFG810IlDECrHaAfJaVc8RY0TLoxYAG2N_H358ynSlTFEAjPgrzihBr3uoY8XNA00OzmWEN8IcJRuAh3NiypJdY5Fl35',
  },
];

export default function ProductListGridImpl() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => {
      const filled = i < Math.floor(rating);
      const isHalf = !filled && i < rating && !Number.isInteger(rating);
      return (
        <span
          key={i}
          className="material-symbols-outlined text-[20px]"
          style={{ fontVariationSettings: `'FILL' ${filled ? 1 : 0}` }}
        >
          {isHalf ? 'star_half' : 'star'}
        </span>
      );
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
      {SAMPLE_PRODUCTS.map((product) => (
        <div
          key={product.id}
          className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-lg transition-shadow group flex flex-col h-full overflow-hidden"
        >
          <div className="aspect-[4/5] relative overflow-hidden bg-surface-container-low">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt={product.title}
              src={product.image}
            />
            <button className="absolute top-md right-md bg-white/80 backdrop-blur-sm p-xs rounded-full text-on-surface-variant hover:text-error transition-colors active:scale-90">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
          <div className="p-md flex flex-col flex-1">
            <div className="flex justify-between items-start mb-xs">
              <h4 className="font-h3 text-h3 text-on-surface text-lg">{product.title}</h4>
              <span className="font-bold text-primary font-h3 text-lg leading-none">{product.price}</span>
            </div>
            <p className="text-on-surface-variant text-body-md line-clamp-2 mb-md">
              {product.description}
            </p>
            <div className="mt-auto pt-md flex items-center justify-between border-t border-outline-variant/10">
              <div className="flex text-tertiary">{renderStars(product.rating)}</div>
              <button className="bg-primary text-on-primary px-md py-sm rounded-lg font-label-sm text-label-sm active:scale-95 transition-transform hover:opacity-90">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
