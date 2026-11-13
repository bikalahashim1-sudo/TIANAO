import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '../data/products';
import { IMAGES } from '../assets/images';

interface LookbookSectionProps {
  onSelectProductById: (id: string) => void;
}

export const LookbookSection: React.FC<LookbookSectionProps> = ({ onSelectProductById }) => {
  return (
    <section className="py-24 bg-[#141312] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest font-semibold text-amber-400 block mb-2">
              SPATIAL PHILOSOPHY · 空间意境 · 5GOOD
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Let Home Become a Warm Harbor, Decorate Every Corner with Love.
            </h2>
            <p className="font-editorial text-base sm:text-lg text-amber-200/90 font-medium mt-2">
              让家成为温馨的港湾，用爱装点每一个角落。
            </p>
          </div>
          <div className="max-w-md text-xs sm:text-sm text-stone-300 font-sans leading-relaxed space-y-1">
            <p>
              "无论是客厅的一抹暖阳，还是卧房的一夜好梦，我们致力于让您的家充满舒适与个性化的气息。"
            </p>
            <p className="text-stone-400 text-xs italic">
              Whether a ray of warm sunshine in the living room or a night of sweet dreams in the bedroom, we are committed to making your home full of comfort and personality.
            </p>
          </div>
        </div>

        {/* Asymmetrical Editorial Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: TAQ078 Big Black Bull Lounge Sofa (Large 7 Cols) */}
          <div
            onClick={() => onSelectProductById('taq078-big-black-bull-sofa')}
            className="lg:col-span-7 group relative bg-[#1D1C1A] border border-stone-800 overflow-hidden cursor-pointer flex flex-col justify-between"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={IMAGES.taq078}
                alt="TAQ078 Big Black Bull Deep Lounge Sofa"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D1C1A] via-transparent to-transparent opacity-80" />
            </div>

            <div className="p-8 relative z-10 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#F7D117] mb-2">
                  <span>MODEL TA9078#</span>
                  <span>·</span>
                  <span>BIG BLACK BULL DEEP LOUNGE SOFA</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white mb-2">
                  Grand Executive Comfort
                </h3>
                <p className="text-xs text-stone-300 font-serif italic max-w-xl leading-relaxed">
                  "Into our home world, you will find that every piece of furniture, every decoration has been given life and story. They are not just cold goods, but works of art that resonate with you."
                </p>
              </div>

              <div className="pt-6 border-t border-stone-800 flex items-center justify-between text-xs font-mono text-stone-400">
                <span>388 cm × 122 cm · Obsidian Full-Grain Cowhide</span>
                <span className="flex items-center gap-1 text-white group-hover:text-[#F7D117] transition-colors">
                  Inspect Model <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 & 3: Stacked Right Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Bed Card: TAA2188 Tufted Wingback Bed */}
            <div
              onClick={() => onSelectProductById('taa2188-tufted-wingback-bed')}
              className="group relative bg-[#1D1C1A] border border-stone-800 overflow-hidden cursor-pointer flex-1 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={IMAGES.taa2188}
                  alt="TAA2188 Tufted Wingback Leather Bed"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1C1A] via-transparent to-transparent opacity-70" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#F7D117] mb-1">
                  <span>MODEL TAA2188#</span>
                  <span>·</span>
                  <span>MASTER BEDROOM SUITE</span>
                </div>
                <h4 className="font-editorial text-xl font-bold text-white mb-1">
                  Tufted Wingback Bed
                </h4>
                <p className="text-xs text-stone-400 font-serif italic mb-4">
                  "Grand wingback presence paired with matrix grid quilting and reinforced ribbed slats..."
                </p>
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 border-t border-stone-800 pt-3">
                  <span>230 × 238 cm · Top-Grain Leather</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-white" />
                </div>
              </div>
            </div>

            {/* Cinema Recliner Card: TA9810 Dual Recliner Console Sofa */}
            <div
              onClick={() => onSelectProductById('taq810-dual-recliner-console-sofa')}
              className="group relative bg-[#1D1C1A] border border-stone-800 overflow-hidden cursor-pointer flex-1 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={IMAGES.taq810}
                  alt="TA9810 Dual Power Recliner Console Sofa"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1C1A] via-transparent to-transparent opacity-70" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#F7D117] mb-1">
                  <span>MODEL TA9810#</span>
                  <span>·</span>
                  <span>SMART POWER MOTION</span>
                </div>
                <h4 className="font-editorial text-xl font-bold text-white mb-1">
                  Cinema Console Recliner
                </h4>
                <p className="text-xs text-stone-400 font-serif italic mb-4">
                  "Silent motorized power recline with center storage console and cup holders."
                </p>
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 border-t border-stone-800 pt-3">
                  <span>222 × 95 cm · Slate Semi-Aniline Leather</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

