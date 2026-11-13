import React from 'react';
import { Product, PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { ArrowRight } from 'lucide-react';

interface FeaturedSectionProps {
  onSelectProduct: (product: Product) => void;
  onQuickAddQuote: (product: Product) => void;
  onViewAll: () => void;
  quoteItemIds: string[];
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  onSelectProduct,
  onQuickAddQuote,
  onViewAll,
  quoteItemIds,
}) => {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="py-24 bg-[#F5F4F0] border-b border-[#E8E6E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest font-semibold text-[#005EA8] block mb-2">
              CATALOGUE HIGHLIGHTS · 精选系列
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#191919]">
              Featured Collection
            </h2>
          </div>
          <button
            onClick={onViewAll}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-900 hover:text-[#005EA8] transition-colors cursor-pointer group whitespace-nowrap shrink-0"
          >
            <span>View All ({PRODUCTS.length}) Products</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 3-Column Responsive Grid (Section 2.A) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onQuickAddQuote={onQuickAddQuote}
              isInQuote={quoteItemIds.includes(product.id)}
            />
          ))}
        </div>

        {/* Editorial Quote Banner */}
        <div className="mt-16 p-8 bg-white border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#005EA8] font-semibold">
              OFFICIAL MANUFACTURING PARTNERSHIP
            </span>
            <h3 className="font-editorial text-2xl font-bold text-stone-900">
              Custom Architectural Dimensions &amp; Contract Orders Available
            </h3>
            <p className="text-xs text-stone-600">
              Direct factory manufacturing for residential villas, hotels, executive offices, and luxury commercial projects.
            </p>
          </div>
          <button
            onClick={onViewAll}
            className="px-6 py-3 bg-[#191919] hover:bg-[#005EA8] text-white text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Browse Complete Catalogue
          </button>
        </div>
      </div>
    </section>
  );
};
