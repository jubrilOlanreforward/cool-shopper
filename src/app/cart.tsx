'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import CartPage from '@/components/cart/CartPage';

export default function CartPageComponent() {
  const [cartItems, setCartItems] = React.useState([
    {
      id: '1',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgsZtzNliIhdH_6ew_7gDy_mQMYBuTUTB5CfepslwIU3AMttkFkCzF1k-TlnjUrLIXERgPMbCf6vSNiyToG5rhlw2Hk4r6Rj_WWFBJR-FPmZfaCrrHibn_iCSeatwqfERb4gQoax5yWlBFpysMfJvDhv09UEVHGLYklvT8Gt4RVq9SF3fwZgZFXlNwh22G6MGBgzzeXoU3803gIMuM4Dp7IyAa36jDNm7JSoexqc8hIAgBm6HhiGH7Dkou0jkYyId6LUyJ9fsk4aBI',
      title: 'Handcrafted Ceramic Vessel',
      description: 'Sandstone Matte / Medium',
      price: '$124.00',
      quantity: 1,
    },
    {
      id: '2',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAkhDVpODzGd33I7kUvyrClpZuDPiDUHxa1vs143H9QdoUHNVSyc4Z_8rnlLeOWGlLz4R3J1F1Os5eTRQ3gxfg5QY9HyzY3z-rjk8Hu89aoo15Hp9bEU43Zyz6Uj9Qrf6CSXWOHa3wwme8191MMO3ajVf09UazjMOhsH7VUDuzsoPwZ4FJ2lusiqyVEvuA_GcXS9jQTTaNe6W_kZ5ThQYFrsZMk-GRzy5lMuW9iHF3CBaqmPS0jKCNvnVib5Ug8B4nCCelfpbE4s3B',
      title: 'Organic Linen Cushion',
      description: 'Turquoise / 20"x20"',
      price: '$68.00',
      quantity: 2,
    },
  ]);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
  };

  return (
    <MainLayout>
      <CartPage
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
    </MainLayout>
  );
}
