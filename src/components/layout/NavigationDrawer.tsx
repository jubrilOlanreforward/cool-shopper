'use client';

import React from 'react';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationDrawer({ isOpen, onClose }: NavigationDrawerProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-[59] transition-opacity"
          onClick={onClose}
        />
      )}
      <aside
        id="drawer"
        className={`fixed inset-y-0 left-0 z-[60] flex flex-col p-md bg-surface h-full w-80 rounded-r-xl shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-lg">
          <span className="font-h2 text-h2 text-primary">Collections</span>
          <button className="material-symbols-outlined" onClick={onClose}>
            close
          </button>
        </div>

        <nav className="space-y-sm">
          <div className="flex items-center gap-md p-md bg-primary-container text-on-primary-container font-semibold rounded-lg cursor-pointer">
            <span className="material-symbols-outlined">auto_awesome</span>
            <span>New Arrivals</span>
          </div>
          <div className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-variant/30 rounded-lg cursor-pointer transition-colors">
            <span className="material-symbols-outlined">trending_up</span>
            <span>Best Sellers</span>
          </div>
          <div className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-variant/30 rounded-lg cursor-pointer transition-colors">
            <span className="material-symbols-outlined">eco</span>
            <span>Eco-Friendly</span>
          </div>
          <div className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-variant/30 rounded-lg cursor-pointer transition-colors">
            <span className="material-symbols-outlined">redeem</span>
            <span>Gift Cards</span>
          </div>
          <div className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-variant/30 rounded-lg cursor-pointer transition-colors">
            <span className="material-symbols-outlined">support_agent</span>
            <span>Support</span>
          </div>
        </nav>
      </aside>
    </>
  );
}
