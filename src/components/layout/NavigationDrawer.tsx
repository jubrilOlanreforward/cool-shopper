import React from 'react';
import { styleVars } from '../common/styleVars';
import IconButton from '../common/IconButton';

export default function NavigationDrawer() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <aside
          className={`fixed inset-y-0 left-0 w-80 max-w-[85vw] ${styleVars.surface} rounded-r-2xl shadow-2xl p-md flex flex-col z-[61] transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-lg">
            <h2 className={`${styleVars.fontH2} text-primary`}>Collections</h2>
            <IconButton
              icon={<span className="material-symbols-outlined">close</span>}
              ariaLabel="Close"
              onClick={() => setIsOpen(false)}
            />
          </div>

          <nav className="space-y-sm overflow-y-auto flex-grow">
            <a href="/new" className="flex items-center gap-md p-md bg-primary-container text-on-primary-container font-semibold rounded-lg transition-all">
              <span className="material-symbols-outlined">auto_awesome</span>
              <span>New Arrivals</span>
            </a>
            <a href="/bestsellers" className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-variant/30 rounded-lg transition-colors">
              <span className="material-symbols-outlined">trending_up</span>
              <span>Best Sellers</span>
            </a>
            <a href="/eco" className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-variant/30 rounded-lg transition-colors">
              <span className="material-symbols-outlined">eco</span>
              <span>Eco-Friendly</span>
            </a>
            <a href="/gifts" className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-variant/30 rounded-lg transition-colors">
              <span className="material-symbols-outlined">redeem</span>
              <span>Gift Cards</span>
            </a>
            <hr className="border-outline-variant/30 my-md" />
            <a href="/support" className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-variant/30 rounded-lg transition-colors">
              <span className="material-symbols-outlined">support_agent</span>
              <span>Support</span>
            </a>
          </nav>
        </aside>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed z-50 top-4 left-4 md:hidden ${styleVars.rounded} ${styleVars.transition} hover:bg-surface-variant/50 p-2`}
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined text-primary">menu</span>
      </button>
    </>
  );
}
