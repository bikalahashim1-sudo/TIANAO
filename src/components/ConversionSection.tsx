import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, Sparkles } from 'lucide-react';

interface ConversionSectionProps {
  onRequestQuote: () => void;
  onExplore: () => void;
}

export const ConversionSection: React.FC<ConversionSectionProps> = ({
  onRequestQuote,
  onExplore,
}) => {
  return (
    <section className="py-24 bg-[#F2EFE9] border-b border-[#E8E6E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest uppercase text-[#005EA8] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>5GOOD 天奥家具 · 创新 · 卓越 · 共赢</span>
          </div>

          <div className="space-y-3">
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#191919] leading-tight text-balance">
              The Fashionable Soft Sofa &amp; Bed Collection — Embrace A Beautiful Day.
            </h2>
            <p className="font-editorial text-lg sm:text-xl text-stone-700 font-medium">
              家，是心灵的港湾 · 锐意探索 行业巅峰 · 用经营自己的家，就是对生活最好的致敬
            </p>
          </div>

          <div className="space-y-2 max-w-xl mx-auto text-sm text-stone-600 font-sans leading-relaxed">
            <p>
              "坚持简约时尚，清新自然的设计风格，紧跟世界时尚潮流，呈现出与众不同的文化气质。"
            </p>
            <p className="text-xs text-stone-500 italic">
              Modern Luxury Series, High-End Minimalist Series, and High-End Simple Luxury Series — crafted at Sino-Uganda Mbale Industrial Park and loved by consumers globally.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onRequestQuote}
              className="px-8 py-4 bg-[#005EA8] hover:bg-[#00457C] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer flex items-center gap-2 active:scale-95 whitespace-nowrap shrink-0"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExplore}
              className="px-8 py-4 bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Browse All Catalog Models
            </button>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-stone-700" />
              Sino-Uganda Industrial Park
            </span>
            <span>·</span>
            <a href="tel:+256744477777" className="flex items-center gap-1.5 hover:text-stone-900">
              <PhoneCall className="w-3.5 h-3.5 text-stone-700" />
              +256 744 477 777
            </a>
            <span>·</span>
            <span>Worldwide Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};
