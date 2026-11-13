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
  framing: 'room' | 'studio';
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
    framing: 'room',
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
    framing: 'studio',
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
    framing: 'studio',
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
    framing: 'room',
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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [isAutoPlaying, activeSlide]);

  const current = HERO_SLIDES[activeSlide];

  return (
    <section className="w-full bg-[#141312] text-white overflow-hidden">
      {/* Full-Bleed Edge-to-Edge Split Carousel Stage */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left Editorial Copy Panel (Bottom on Mobile, Left 5 Columns on Desktop) */}
        <div className="order-2 lg:order-1 lg:col-span-5 bg-[#141312] flex flex-col justify-between px-4 sm:px-8 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-10 py-8 sm:py-12 border-t lg:border-t-0 lg:border-r border-stone-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#F7D117] font-semibold">
                5GOOD · {current.badgeModel}
              </span>
              <span className="text-[11px] font-mono tabular-nums text-stone-400">
                {String(activeSlide + 1).padStart(2, '0')} / {String(HERO_SLIDES.length).padStart(2, '0')}
              </span>
            </div>

            <p className="text-[11px] font-mono tracking-wider uppercase text-stone-400">
              {current.kicker}
            </p>

            <div className="space-y-2">
              <h1 className="font-editorial text-3xl sm:text-4xl xl:text-[2.75rem] font-bold tracking-tight text-white leading-[1.1] text-balance">
                {current.title}
              </h1>
              <p className="font-editorial text-base sm:text-lg text-amber-100/90 font-medium">
                {current.subtitleCn}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
              {current.description}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onExplore}
                className="px-5 py-3 bg-[#005EA8] hover:bg-[#004B87] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer shadow-lg whitespace-nowrap shrink-0"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onRequestQuote}
                className="px-5 py-3 bg-[#F7D117] hover:bg-amber-300 text-[#141312] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Request a Quote
              </button>

              {current.productId && onSelectProductById && (
                <button
                  type="button"
                  onClick={() => onSelectProductById(current.productId!)}
                  className="px-4 py-3 bg-[#1D1C1A] hover:bg-stone-800 text-white border border-stone-700 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Inspect {current.badgeModel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F7D117]" />
                </button>
              )}

              <button
                type="button"
                onClick={onOpenCatalogue}
                className="px-3 py-3 text-stone-300 hover:text-[#F7D117] text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <FileText className="w-3.5 h-3.5 text-[#F7D117]" />
                <span>Browse 36-Page Catalogue</span>
              </button>
            </div>
          </div>

          {/* Slide Navigation Dots & Playback Control */}
          <div className="pt-8 mt-6 border-t border-stone-800/80 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 min-w-0">
              {HERO_SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`View slide ${idx + 1}: ${s.badgeLabel}`}
                  className={`h-1.5 transition-all duration-300 cursor-pointer shrink-0 ${
                    idx === activeSlide ? 'w-10 bg-[#F7D117]' : 'w-4 bg-stone-700 hover:bg-stone-500'
                  }`}
                />
              ))}
              <span className="ml-2 text-[11px] font-mono text-stone-400 truncate">
                {current.badgeLabel}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsAutoPlaying((prev) => !prev)}
              className="text-[11px] font-mono uppercase tracking-wider text-stone-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              {isAutoPlaying ? 'Auto · On' : 'Auto · Paused'}
            </button>
          </div>
        </div>

        {/* Right Edge-to-Edge Auto-Sliding Carousel Viewport (Top on Mobile, Right 7 Columns on Desktop) */}
        <div className="order-1 lg:order-2 lg:col-span-7 relative w-full h-[260px] sm:h-[440px] lg:h-[580px] xl:h-[620px] bg-[#1D1C1A] overflow-hidden">
          {/* Horizontal Sliding Track */}
          <div
            className="flex w-full h-full transition-transform duration-700 ease-out"
            style={{ transform: `translate3d(-${activeSlide * 100}%, 0, 0)` }}
          >
            {HERO_SLIDES.map((slide) => (
              <div
                key={slide.id}
                className={`relative w-full h-full shrink-0 overflow-hidden flex items-center justify-center ${
                  slide.framing === 'studio' ? 'bg-white' : 'bg-[#1D1C1A]'
                }`}
              >
                {/* Ambient Edge Fill for Room Photos so Zero Cropping Leaves Zero Harsh Bars */}
                {slide.framing === 'room' && (
                  <img
                    src={slide.image}
                    alt=""
                    aria-hidden="true"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-55 pointer-events-none"
                  />
                )}

                {/* Crisp Full-Fit Furniture Photography (Uncropped & 100% Visible) */}
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  referrerPolicy="no-referrer"
                  className={`relative z-10 w-full h-full object-contain object-center ${
                    slide.framing === 'studio' ? 'p-4 sm:p-8 lg:p-10' : 'p-0'
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Subtle Model Tag Overlay (Top-Left Corner of Visual Stage) */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-[#F7D117] bg-[#141312]/85 backdrop-blur-xs px-3 py-1.5 border border-white/15">
            <span className="font-bold">{current.badgeModel}</span>
            <span aria-hidden="true" className="text-stone-500">·</span>
            <span className="text-white/95 truncate max-w-[180px] sm:max-w-xs">{current.badgeLabel}</span>
          </div>

          {/* Carousel Prev / Next Controls */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
              className="w-10 h-10 bg-[#141312]/80 hover:bg-[#005EA8] text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous showcase slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
              className="w-10 h-10 bg-[#141312]/80 hover:bg-[#005EA8] text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next showcase slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
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
