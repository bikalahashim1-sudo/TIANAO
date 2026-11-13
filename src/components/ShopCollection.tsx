import React, { useState, useMemo } from 'react';
import { Product, PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { Search, Filter, SlidersHorizontal, RotateCcw } from 'lucide-react';

interface ShopCollectionProps {
  initialCategory?: 'all' | 'sofas' | 'recliners' | 'beds' | 'chairs-tables';
  onSelectProduct: (product: Product) => void;
  onQuickAddQuote: (product: Product) => void;
  quoteItemIds: string[];
}

export const ShopCollection: React.FC<ShopCollectionProps> = ({
  initialCategory = 'all',
  onSelectProduct,
  onQuickAddQuote,
  quoteItemIds,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'sofas' | 'recliners' | 'beds' | 'chairs-tables'>(initialCategory);
  const [selectedSeries, setSelectedSeries] = useState<string>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'model' | 'page' | 'name'>('model');

  // Filter products strictly based on PDF catalogue data
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Series filter
      if (selectedSeries !== 'all' && item.series !== selectedSeries) {
        return false;
      }
      // Material filter
      if (selectedMaterial !== 'all') {
        const hasMat = item.materials.some((m) =>
          m.toLowerCase().includes(selectedMaterial.toLowerCase())
        );
        if (!hasMat) return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchModel = item.model.toLowerCase().includes(query);
        const matchName = item.name.toLowerCase().includes(query);
        const matchCn = item.nameCn?.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        const matchDims = item.dimensions.length.toLowerCase().includes(query);
        return matchModel || matchName || matchCn || matchDesc || matchDims;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'page') return a.pageNumber - b.pageNumber;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return a.model.localeCompare(b.model);
    });
  }, [selectedCategory, selectedSeries, selectedMaterial, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedSeries('all');
    setSelectedMaterial('all');
    setSearchQuery('');
  };

  return (
    <div className="py-12 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Page Title */}
        <div className="mb-10 text-center sm:text-left">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">
            <span className="text-[#005EA8] font-semibold">5GOOD 天奥家具</span>
            <span>·</span>
            <span>36-PAGE OFFICIAL CATALOGUE</span>
            <span>·</span>
            <span className="tabular-nums">{PRODUCTS.length} VERIFIED MODELS</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-[#191919]">
            TIANAO Furniture Collection · 天奥家具产品系列
          </h1>
          <p className="text-sm text-stone-600 max-w-2xl mt-2 font-sans leading-relaxed">
            "坚持简约时尚，清新自然的设计风格，紧跟世界时尚潮流，呈现出与众不同的文化气质。"
            Explore technical specifications, architectural dimensions, materials, and modular designs across Modern Luxury Series (现代豪华系列), High-End Minimalist Series (高端极简系列), and High-End Simple Luxury Series (高端简奢系列).
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white border border-[#E8E6E1] p-4 sm:p-6 mb-8 shadow-2xs space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by Model (e.g. TA-M04#, TA-EX01#, TA9106#), name, or material..."
                className="w-full pl-10 pr-4 py-2.5 text-xs border border-stone-200 focus:border-black focus:outline-hidden bg-stone-50/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-black"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sorting */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-stone-500 whitespace-nowrap">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 text-xs border border-stone-200 bg-white font-mono text-stone-700 focus:border-black focus:outline-hidden"
              >
                <option value="model">Model Number (TA9000-Series)</option>
                <option value="page">PDF Catalogue Page Order (1-36)</option>
                <option value="name">Product Name (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Interactive Category Buttons (Allowed by Zero-Pill Section 1.A) */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-100">
            <span className="text-xs font-mono text-stone-400 mr-2">Category:</span>
            {[
              { id: 'all', label: `All Products (${PRODUCTS.length})` },
              { id: 'sofas', label: `Sofas (${PRODUCTS.filter(p => p.category === 'sofas').length})` },
              { id: 'recliners', label: `Power Motion (${PRODUCTS.filter(p => p.category === 'recliners').length})` },
              { id: 'beds', label: `Luxury Beds (${PRODUCTS.filter(p => p.category === 'beds').length})` },
              { id: 'chairs-tables', label: `Dining & Chairs (${PRODUCTS.filter(p => p.category === 'chairs-tables').length})` },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#191919] text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Secondary Filters: Series & Material */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-stone-100 text-xs">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-stone-400 font-mono">Series:</span>
              <select
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
                className="px-2.5 py-1 text-xs border border-stone-200 bg-white text-stone-700"
              >
                <option value="all">All 3 Series</option>
                <option value="Modern Luxury Series">Modern Luxury Series (现代豪华系列)</option>
                <option value="High-End Minimalist Series">High-End Minimalist Series (高端极简系列)</option>
                <option value="High-End Simple Luxury Series">High-End Simple Luxury Series (高端简奢系列)</option>
              </select>

              <span className="text-stone-400 font-mono ml-2">Material:</span>
              <select
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
                className="px-2.5 py-1 text-xs border border-stone-200 bg-white text-stone-700"
              >
                <option value="all">All Materials</option>
                <option value="Leather">Top-Grain Leather</option>
                <option value="Bouclé">Textured Bouclé & Fabric</option>
                <option value="Motorized">Motorized Power Motion</option>
                <option value="Stone">Sintered Stone Top</option>
                <option value="Walnut">Natural Walnut Wood</option>
              </select>
            </div>

            {(selectedCategory !== 'all' || selectedSeries !== 'all' || selectedMaterial !== 'all' || searchQuery) && (
              <button
                onClick={handleResetFilters}
                className="flex items-center gap-1.5 text-stone-500 hover:text-black text-xs font-mono underline cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-stone-500 mb-6 px-1">
          <span>Showing {filteredProducts.length} verified catalogue items</span>
          <span>Click any model to inspect dimensions and add to quotation</span>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-white border border-[#E8E6E1] p-8 space-y-4">
            <p className="text-stone-500 text-sm">No models match your current filter criteria.</p>
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 bg-[#191919] text-white text-xs font-semibold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onQuickAddQuote={onQuickAddQuote}
                isInQuote={quoteItemIds.includes(product.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
