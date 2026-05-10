import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BottomNavBar from './BottomNavBar';
import NavigationDrawer from './NavigationDrawer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <NavigationDrawer />
      <main className="flex-1 pt-[100px] pb-[100px] md:pb-0 max-w-container-max mx-auto w-full px-gutter">
        {children}
      </main>
      <Footer />
      <BottomNavBar />
    </div>
  );
}
