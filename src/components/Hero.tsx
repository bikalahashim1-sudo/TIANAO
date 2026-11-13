import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  FileText,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { IMAGES } from '../assets/images';

interface HeroProps {
  onExplore: () => void;
  onRequestQuote: () => void;
  onOpenCatalogue: () => void;
  onSelectCategory?: (category: 'all' | 'sofas' | 'recliners' | 'beds' | 'chairs-tables') => void;
  onSelectProductById?: (id: string) => void;
}

interface HeroSlide {
  id: string;
  image: string;
  imageAlt: string;
  kicker: string;
  title: string;
  subtitleCn: string;
  description: string;
  badgeModel: string;
  badgeLabel: string;
  productId?: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1-executive',
    image: IMAGES.executiveSuite1,
    imageAlt: 'TIANAO Espresso Leather 1+1+3 Executive and Lounge Sofa Suite (Image 1)',
    kicker: 'MODERN LUXURY SERIES · 现代豪华系列 · HOME & EXECUTIVE SUITES',
    title: 'Enterprising & Exploring the Peak of Modern Upholstered Craft.',
    subtitleCn: '锐意探索行业巅峰 · 尊享家居客厅与现代商务会客空间',
    description:
      'Complete 1+1+3 top-grain leather suites crafted to your choice of colours and fabrics for grand residential living rooms and executive leadership spaces.',
    badgeModel: 'TA-EX01#',
    badgeLabel: 'Espresso 1+1+3 Executive Lounge Suite',
    productId: 'ta-executive-reception-suite',
  },
  {
    id: 'slide-2-boucle-chair-angle',
    image: IMAGES.boucleChairAngle,
    imageAlt: 'TIANAO Sculpted Walnut and Ivory Boucle Lounge Armchair Angle View (Image 2)',
    kicker: 'HIGH-END MINIMALIST SERIES · 高端极简系列 · BESPOKE UPHOLSTERY',
    title: 'Home is the Harbor of the Soul — Soft Comfort in Every Corner.',
    subtitleCn: '让家成为温馨的港湾，用爱装点每一个角落 · 享受与家人相处的惬意时光',
    description:
      'Sculpted solid walnut corner supports and breathable textured bouclé with high-density rebound sponge crafted to dissipate the exhaustion of your day.',
    badgeModel: 'TA-M02#',
    badgeLabel: 'Sculpted Walnut & Bouclé Armchair (Angle)',
    productId: 'ta-minimalist-walnut-boucle-chair',
  },
  {
    id: 'slide-3-boucle-chair-front',
    image: IMAGES.boucleChairFront,
    imageAlt: 'TIANAO Sculpted Walnut and Ivory Boucle Lounge Armchair Front View (Image 3)',
    kicker: 'FIVE EXCELLENCE STRATEGY · 好健康 · 好舒适 · 好设计 · 好品质 · 好服务',
    title: 'Design It Your Way — Custom Colours, Fabrics & Architectural Precision.',
    subtitleCn: '坚持简约时尚，清新自然的设计风格 · 紧跟世界时尚潮流',
    description:
      'Tailored proportions and customizable finishes built at our 20,000 m² Sino-Uganda Mbale Industrial Park facility under the 5GOOD Quality Standard.',
    badgeModel: 'TA-M02#',
    badgeLabel: 'Sculpted Walnut & Bouclé Armchair (Front)',
    productId: 'ta-minimalist-walnut-boucle-chair',
  },
  {
    id: 'slide-4-boucle-sofa',
    image: IMAGES.boucleSofaRoom,
    imageAlt: 'TIANAO Sculpted Walnut and Ivory Boucle 3-Seater Sofa in living room (Image 4)',
    kicker: '5GOOD 天奥家具 · HIGH-END MINIMALIST SERIES · 高端极简系列',
    title: 'Creating an Ideal Home Environment is the Best Homage to Life.',
    subtitleCn: '打造这样一个理想的家居环境，并不意味需要奢华繁复。用经营自己的家，就是对生活最好的致敬。',
    description:
      'Adhering to a simple, fashionable, fresh, and natural design philosophy that follows global fashion trends while showcasing a unique cultural charm.',
    badgeModel: 'TA-M04#',
    badgeLabel: 'Sculpted Walnut & Ivory Bouclé Sofa',
    productId: 'ta-minimalist-walnut-boucle-sofa',
  },
];

export const Hero: React.FC<HeroProps> = ({
  onExplore,
  onRequestQuote,
  onOpenCatalogue,
  onSelectProductById,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const current = HERO_SLIDES[activeSlide];

  return (
    <section
      className="w-full bg-[#141312] text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full-Bleed Edge-to-Edge Showcase Carousel */}
      <div className="relative w-full min-h-[540px] sm:min-h-[620px] lg:min-h-[calc(100vh-11.5rem)] max-h-[780px] bg-[#1D1C1A] overflow-hidden flex flex-col justify-between">
        {/* Active Slide Photography */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              idx === activeSlide ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.imageAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {/* Measured Dual Contrast Scrim for WCAG AA Legibility across light and dark frames */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
          </div>
        ))}

        {/* Top Carousel Controls Bar (Aligned to content grid inside edge-to-edge stage) */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 sm:pt-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-[#F7D117] bg-black/65 backdrop-blur-xs px-3 py-1.5 border border-white/15">
              <span className="font-bold">5GOOD</span>
              <span aria-hidden="true">·</span>
              <span className="text-white/90 truncate max-w-[200px] sm:max-w-none">{current.badgeModel}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                className="w-10 h-10 bg-black/65 hover:bg-[#005EA8] text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous showcase slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                className="w-10 h-10 bg-black/65 hover:bg-[#005EA8] text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next showcase slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Headline & Actions (Aligned to content grid inside edge-to-edge stage) */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-8 sm:pb-12 pt-12">
            <div className="space-y-5 max-w-3xl">
              <p className="text-[11px] sm:text-xs font-mono tracking-widest uppercase text-[#F7D117]">
                {current.kicker}
              </p>

              <div className="space-y-2">
                <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] text-balance">
                  {current.title}
                </h1>
                <p className="font-editorial text-base sm:text-xl text-amber-100/95 font-medium">
                  {current.subtitleCn}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-stone-200 font-light leading-relaxed max-w-2xl">
                {current.description}
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onExplore}
                  className="px-6 py-3 bg-[#005EA8] hover:bg-[#004B87] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer shadow-lg whitespace-nowrap shrink-0"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={onRequestQuote}
                  className="px-6 py-3 bg-[#F7D117] hover:bg-amber-300 text-[#141312] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  Request a Quote
                </button>

                {current.productId && onSelectProductById && (
                  <button
                    type="button"
                    onClick={() => onSelectProductById(current.productId!)}
                    className="px-4 py-3 bg-black/60 hover:bg-black text-white border border-white/25 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Inspect {current.badgeModel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#F7D117]" />
                  </button>
                )}

                <button
                  type="button"
                  onClick={onOpenCatalogue}
                  className="px-4 py-3 text-stone-200 hover:text-[#F7D117] text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <FileText className="w-3.5 h-3.5 text-[#F7D117]" />
                  <span>Browse 36-Page Catalogue</span>
                </button>
              </div>

              {/* Slide Progress Tabs */}
              <div className="pt-4 flex items-center gap-2">
                {HERO_SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`View slide ${idx + 1}: ${s.badgeLabel}`}
                    className={`h-1.5 transition-all cursor-pointer ${
                      idx === activeSlide ? 'w-10 bg-[#F7D117]' : 'w-4 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
                <span className="ml-2 text-[11px] font-mono text-stone-300 truncate">
                  {String(activeSlide + 1).padStart(2, '0')} / {String(HERO_SLIDES.length).padStart(2, '0')} · {current.badgeLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width 4-Column Proof Metrics Ribbon Below Hero */}
      <div className="w-full bg-[#141312] border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-7 grid grid-cols-2 sm:grid-cols-4 gap-6 text-stone-300">
          <div>
            <span className="font-mono tabular-nums text-xl sm:text-2xl font-bold text-white block">20,000 m²</span>
            <span className="text-xs text-stone-400 font-sans">Manufacturing Facility · 厂房面积</span>
          </div>
          <div>
            <span className="font-mono tabular-nums text-xl sm:text-2xl font-bold text-white block">1,000 m²</span>
            <span className="text-xs text-stone-400 font-sans">Flagship Showroom · 展厅面积</span>
          </div>
          <div>
            <span className="font-mono tabular-nums text-xl sm:text-2xl font-bold text-white block">100+</span>
            <span className="text-xs text-stone-400 font-sans">Skilled Staff & Engineers · 员工人数</span>
          </div>
          <div>
            <span className="font-mono tabular-nums text-xl sm:text-2xl font-bold text-[#F7D117] block">5GOOD</span>
            <span className="text-xs text-stone-400 font-sans">Health · Comfort · Design · Quality · Service</span>
          </div>
        </div>
      </div>

      {/* Words Running Dynamically Right-to-Left Below the Hero Section */}
      <div
        className="marquee-wrapper bg-[#005EA8] text-white border-y border-[#F7D117]/40 py-3.5 overflow-hidden select-none"
        aria-label="Design It Your Way! Choose your colours and fabrics. We customize and deliver your dream in the best quality."
      >
        <div className="animate-tianao-marquee flex items-center">
          {[0, 1].map((dupIndex) => (
            <div key={dupIndex} className="flex items-center shrink-0">
              {COMPANY_INFO.marqueeStatements.map((phrase, idx) => (
                <div key={`${dupIndex}-${idx}`} className="flex items-center shrink-0">
                  <span className="text-xs sm:text-sm font-mono font-semibold tracking-wider px-6 whitespace-nowrap">
                    {phrase}
                  </span>
                  <span
                    className="w-2 h-2 bg-[#F7D117] rotate-45 inline-block shrink-0"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
