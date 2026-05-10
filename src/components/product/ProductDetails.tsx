import React from 'react';
import { styleVars } from '../common/styleVars';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import ProductOptions from './ProductOptions';
import ProductActions from './ProductActions';
import ProductTabs from './ProductTabs';
import RelatedProducts from './RelatedProducts';

interface ProductDetailsProps {
  productData: any;
}

export default function ProductDetails({ productData }: ProductDetailsProps) {
  const tabs = [
    {
      label: 'Specifications',
      content:
        'Case Diameter: 40mm | Water Resistance: 5 ATM | Warranty: 2 Years Limited',
    },
    {
      label: 'Shipping & Returns',
      content:
        'Free worldwide shipping on orders over $150. Returns accepted within 30 days of delivery.',
    },
  ];

  const relatedProducts = [
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvu97Mz14WNSQ2ctePVkxSNczOKKkqrjq545tWWqlP6e_TW98LKXgDnj6Sj2mNXtB-uwByivstvPlz-rhNHSkIph1Oav_ErpWjZsh2uOSG9CxE1x6glwn2QeGp0R1VcpKHliA_zI5cvvb2kVlrmngd66W5e1kBeQo9SRiAbAGsTMgacnMSQsGuhFyL-_mbPhthSKi_ka0uyYP4V4u5eHhsb_QbXbF4doevAWFrPPW9LiJzyakh6M2FGffQSewAJ4QZbBB6HK6S_q9s',
      category: 'Apparel',
      title: 'Essential Tee',
      price: '$45.00',
      rating: 4.8,
    },
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGjANlbcGBwGA2OYL5y0SVZfdFd2WfavVmXoRpprmdFWpw1rFr4lkJs_JOkvghrqKE_tJjXOQaoPV20LlAHIQuCqAl9fCYKsN9EP0qJv1MJa2iekjTjcWEhdAF3vrxwuJKD4Zjb81GOc_PkYpPs0DzTRAACPmqnWd620o9mpJ3pCQFYa-Y3VsQ3tIf7zptdrYcXnJ4YVFzK1KjuyiueXzcQNbdgPbMRsaDyLc_CZGwfHTacE_s_fd1Ui4soddYPh2q3JVocxshQL_0',
      category: 'Accessories',
      title: 'Minimal Wallet',
      price: '$68.00',
      rating: 4.9,
    },
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAete49O0cWY6T9NYnG1RnCJ5-eO2y_eQGq9TT6LBJeGk9U7uMlu_0LkXIDWleYda9ULXa6Qr6PhtC1KMvncB7m-JvmRTbvlsFNXXlb1e_0gR4i2dNFvElfIcj3ZmyZx_hbtRI7qaEDzcOGrG1LaZywrHGQU572g_pAn-WQr_q8fVYbYC-enFnaYdg6DEd4IasFWmq7oLXsq_BURw6UfgdAEb3es8qazhMtftMn9gR-iDuRrAbiRjl1THRp1kYhx7N90tUD5P_86Dkn',
      category: 'Footwear',
      title: 'Daily Sneaker 01',
      price: '$120.00',
      rating: 4.7,
    },
  ];

  return (
    <div className="flex flex-col md:grid md:grid-cols-12 md:gap-lg">
      <ProductGallery
        images={[
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCiBN137eciHnXFiHN7BpYR-nDnMcffLKRQa8Cz0pNorSW_pATp7U8qvFOMPKhc6L-Ow-Cb67HVy0wSyZ0TZdq7xe8aBnw2vgKliSt86bfkjUaLPrxnpB2N6wFDh3bV8mrYkZbmHGnSYtVW4BA5HI52V8bVnfHBeChavzue9hXspIcT_pvdPFR2WMUbMFTXAXYhvJVHHacD5Sx2TieQ9hy6i5zQOaxADVJmVImMrB5-Pc_u9ufo3uBJvHW0A66BUaSYusZHy6zKJSv1',
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAH8DJNVDP5NGvUmOhzSQKzSPcxEsvfHWjDJtSEjHMeTZbdo972CZPlj_J0JXAEOt2FOLOry9VsFNXdF7fmIYFWcXTIAebg3guf2odj772XkEZ7Z2QtxKvBVYjg8Uz0N3xLEUaZFLZ4apVkgp2XUNMchmRDTAZkRLR9yTW1bWPvgWZHTiXh9T81owRawPEq_UHHryyuEDjZ1SShm17K8Z54cIDNTAgzFUOXX64tBgTaLYuYJhp7Coqd7bFfBVlxXpG1fZpAzQHjLZoZ',
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDJkiYOz5xcpd5kaETEl_I3Lg7WD5XtqrnjoUI4B5vjpEhnRaBdYl9Q_l6P269cN4g48ctxDGGy4YFd1KE-xHcdptqhC9SXqOWm5FMg9ZWahppUy_7F-QHycgv7uSSgcyMDOj2T82q8us5I1O-DEQgwRXFU42zdTkxBL16awWtgVUY9QvPZantYOnvwg2LncYGjgqbMsoO5vAcR1Vm8SQXKfqvxG-W3FnOO3683QKVAeH7Jtuv_wMaCIA88VUgmr3gUWIb1feeHftEB',
        ]}
        alt="Minimalist Chrono Series 01"
      />

      <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-md">
        <ProductInfo
          category="Premium Collection"
          title="Minimalist Chrono Series 01"
          price="$189.00"
          rating={4.8}
          reviewCount={124}
          description="Crafted for the modern essentialist, the Series 01 features a surgical-grade stainless steel casing and a sapphire crystal glass. Its quiet elegance is matched by a high-precision Japanese quartz movement, ensuring reliability without the noise."
        />

        <ProductOptions
          options={[
            {
              name: 'Strap',
              values: ['Brushed Steel', 'Cognac Leather'],
            },
          ]}
        />

        <ProductActions inStock />

        <ProductTabs tabs={tabs} />
      </div>

      <div className="md:col-span-12 mt-xl">
        <RelatedProducts products={relatedProducts} />
      </div>
    </div>
  );
}
