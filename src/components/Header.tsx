import React, { useState } from 'react';
import { Menu, X, FileText, PhoneCall, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { IMAGES } from '../assets/images';

interface HeaderProps {
  activeView: 'home' | 'collection' | 'categories' | 'about' | 'contact';
  onNavigate: (view: 'home' | 'collection' | 'categories' | 'about' | 'contact') => void;
  quoteItemsCount: number;
  onOpenQuoteDrawer: () => void;
  onOpenCatalogueModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  onNavigate,
  quoteItemsCount,
  onOpenQuoteDrawer,
  onOpenCatalogueModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: 'home' | 'collection' | 'categories' | 'about' | 'contact'; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'collection', label: 'Shop Collection' },
    { id: 'categories', label: 'Categories' },
    { id: 'about', label: 'About & Factory' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (view: 'home' | 'collection' | 'categories' | 'about' | 'contact') => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBFBFA]/95 backdrop-blur-md border-b border-[#E8E6E1] transition-all duration-200">
      {/* Top Bar Announcement / Location Bar (Desktop/Tablet) */}
      <div className="hidden sm:block bg-[#005EA8] text-white text-xs py-1.5 px-4 sm:px-8 border-b border-[#00457C]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#F7D117] font-mono tracking-wider">5GOOD 天奥家具</span>
            <span className="text-white/40">·</span>
            <span className="text-white/95">中乌姆巴莱工业园 · Sino-Uganda Mbale Industrial Park</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-white/90 font-mono">
            <a href="tel:+256744477777" className="hover:text-[#F7D117] transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <PhoneCall className="w-3 h-3 text-[#F7D117]" />
              <span>+256 744 477 777</span>
            </a>
            <span className="hidden md:inline text-white/35">|</span>
            <button
              onClick={onOpenCatalogueModal}
              className="hidden md:flex items-center gap-1.5 hover:text-[#F7D117] transition-colors cursor-pointer whitespace-nowrap"
            >
              <FileText className="w-3 h-3 text-[#F7D117]" />
              <span>Official 36-Page Catalogue</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main 3-Zone Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Single Brand Element Wordmark & Emblem */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group shrink-0"
          role="button"
          tabIndex={0}
        >
          <div className="h-10 sm:h-12 w-auto flex-shrink-0 flex items-center justify-center rounded-xs border border-stone-200/90 bg-white px-1.5 py-1 shadow-xs transition-transform duration-200 group-hover:scale-105">
            <img
              src={IMAGES.brandLogo}
              alt="TIANAO Furniture Logo"
              className="h-full w-auto max-h-8 sm:max-h-10 object-contain"
            />
          </div>

          <div className="flex flex-col whitespace-nowrap">
            <span className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-[#191919] uppercase leading-none group-hover:text-[#005EA8] transition-colors">
              TIANAO
            </span>
            <span className="text-[10px] tracking-[0.22em] text-stone-500 font-sans uppercase font-medium mt-0.5">
              5GOOD · 天奥家具
            </span>
          </div>
        </div>

        {/* Zone 2: Clean Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-stone-600">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative py-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer hover:text-[#005EA8] ${
                activeView === link.id ? 'text-[#005EA8] font-semibold' : 'text-stone-600'
              }`}
            >
              {link.label}
              {activeView === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#005EA8]" />
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenQuoteDrawer}
            className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-[#191919] hover:bg-[#005EA8] transition-colors rounded-none whitespace-nowrap shrink-0 cursor-pointer shadow-xs active:scale-[0.98]"
          >
            <span>Request a Quote</span>
            {quoteItemsCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#F7D117] text-[#141312] text-[11px] font-mono font-bold flex items-center justify-center">
                {quoteItemsCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-black lg:hidden cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8E6E1] bg-[#FBFBFA] px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full flex items-center justify-between py-3 text-base text-left transition-colors border-b border-stone-200/60 ${
                  activeView === link.id ? 'text-black font-bold' : 'text-stone-600 font-medium'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>
            ))}
          </div>

          <div className="pt-4 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteDrawer();
              }}
              className="w-full py-3 text-center text-xs font-semibold tracking-wider uppercase text-white bg-[#191919] hover:bg-black transition-colors rounded-none"
            >
              Request a Quotation {quoteItemsCount > 0 ? `(${quoteItemsCount} selected)` : ''}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCatalogueModal();
              }}
              className="w-full py-3 text-center text-xs font-semibold tracking-wider uppercase text-stone-800 bg-[#EFECE6] hover:bg-[#E5E1D8] transition-colors rounded-none flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Browse PDF Catalogue (36 Pages)</span>
            </button>
          </div>

          <div className="pt-4 text-xs text-stone-500 font-mono space-y-1 border-t border-stone-200">
            <p>TIANAO FURNITURE MANUFACTURING CO., LTD</p>
            <p>Sino-Uganda Mbale Industrial Park, Uganda</p>
            <p className="text-stone-700 font-medium">+256 744 477 777 · +256 744 377 777</p>
          </div>
        </div>
      )}
    </header>
  );
};
