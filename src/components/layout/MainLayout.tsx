'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BottomNavBar from './BottomNavBar';
import NavigationDrawer from './NavigationDrawer';

interface MainLayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
  activeNav?: string;
  activeBottomTab?: string;
}

export default function MainLayout({
  children,
  showFooter = true,
  activeNav = 'Shop',
  activeBottomTab = 'Shop',
}: MainLayoutProps) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <>
      <Header
        onMenuToggle={() => setDrawerOpen(true)}
        activeNav={activeNav}
      />
      <NavigationDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <main className="pt-[100px] pb-xl max-w-container-max mx-auto px-gutter">
        {children}
      </main>
      {showFooter && <Footer />}
      <BottomNavBar activeTab={activeBottomTab} />
    </>
  );
}
