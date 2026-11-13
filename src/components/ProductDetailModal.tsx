import React, { useState } from 'react';
import { Product, PRODUCTS } from '../data/products';
import { X, Check, Compass, Sparkles, ShieldCheck, ArrowRight, Plus, Minus, Layers } from 'lucide-react';
import { ProductVisual } from './ProductVisual';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToQuote: (product: Product, quantity: number, notes?: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToQuote,
  onSelectProduct,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [notes, setNotes] = useState('');
  const [addedNotice, setAddedNotice] = useState(false);

  if (!product) return null;

  // Active color or fallback
  const currentColor = selectedColor || product.colors[0] || 'Standard Finish';

  // Related products from same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, 3);

  const handleAdd = () => {
    onAddToQuote(
      product,
      quantity,
      `Color: ${currentColor}${notes ? ` · Note: ${notes}` : ''}`
    );
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#FBFBFA] border border-[#E8E6E1] shadow-2xl my-auto overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 text-stone-600 hover:text-black bg-white/90 hover:bg-white rounded-full shadow-xs transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Visual & Blueprint View */}
          <div className="lg:col-span-7 bg-[#F5F4F0] p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E8E6E1]">
            <div>
              {/* Breadcrumb / Model Header */}
              <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-4">
                <span>{product.series.toUpperCase()}</span>
                <span>/</span>
                <span className="text-stone-900 font-semibold">{product.model}</span>
                <span>/</span>
                <span>CATALOGUE P.{product.pageNumber}</span>
              </div>

              {/* Main Visual with Blueprint Switcher */}
              <ProductVisual
                product={product}
                showBlueprintToggle={true}
                aspect="4:3"
                className="w-full shadow-sm rounded-none border border-stone-200"
              />
            </div>

            {/* Spec callout box under visual */}
            <div className="mt-6 pt-6 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="bg-white/80 p-3 border border-stone-200/60">
                <span className="text-stone-400 block text-[10px] uppercase">Dimensions</span>
                <span className="text-stone-800 font-semibold">{product.dimensions.length}</span>
                {product.dimensions.depth && (
                  <span className="text-stone-600 block text-[11px]">× {product.dimensions.depth}</span>
                )}
                {product.dimensions.width && (
                  <span className="text-stone-600 block text-[11px]">× {product.dimensions.width}</span>
                )}
              </div>

              <div className="bg-white/80 p-3 border border-stone-200/60">
                <span className="text-stone-400 block text-[10px] uppercase">Frame Structure</span>
                <span className="text-stone-800 font-medium truncate block">
                  {product.frameSpec ? 'Reinforced Platform' : 'Solid Hardwood & Steel'}
                </span>
              </div>

              <div className="bg-white/80 p-3 border border-stone-200/60 col-span-2 sm:col-span-1">
                <span className="text-stone-400 block text-[10px] uppercase">Catalogue Page</span>
                <span className="text-stone-800 font-semibold">Page {product.pageNumber}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Information, Options & Quotation CTA */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-[#FBFBFA]">
            <div>
              {/* Category & Series */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase tracking-widest font-semibold text-stone-500 font-mono">
                  {product.categoryLabel}
                </span>
                {product.nameCn && (
                  <>
                    <span className="text-stone-400">·</span>
                    <span className="text-xs font-medium text-stone-600">{product.nameCn}</span>
                  </>
                )}
              </div>

              {/* Title */}
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#191919] leading-tight mb-2">
                {product.name}
              </h2>

              <p className="text-xs font-mono font-medium text-stone-500 mb-4">
                Model: <span className="text-stone-900 font-bold">{product.model}</span>
              </p>

              {/* Tagline / Catalogue Quote */}
              {product.tagline && (
                <div className="mb-5 p-3.5 bg-[#F5F4F0] border border-[#E8E6E1] text-xs italic text-stone-700 leading-relaxed">
                  "{product.tagline}"
                  {product.taglineCn && (
                    <p className="not-italic text-[11px] text-stone-500 mt-1 font-sans">{product.taglineCn}</p>
                  )}
                </div>
              )}

              {/* Description */}
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Color Selection */}
              {product.colors.length > 0 && (
                <div className="mb-5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                    Finishes / Colors Shown in Catalogue:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        className={`text-xs px-3 py-1.5 border transition-all cursor-pointer ${
                          currentColor === color
                            ? 'bg-[#191919] text-white border-[#191919]'
                            : 'bg-white text-stone-700 border-stone-300 hover:border-stone-500'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Features List */}
              <div className="mb-5">
                <span className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                  Specifications & Highlights:
                </span>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-stone-800 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                  {product.matchingItems && (
                    <li className="flex items-start gap-2 font-medium text-stone-900 bg-amber-50/80 p-2 border border-amber-200/80">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>{product.matchingItems}</span>
                    </li>
                  )}
                </ul>
              </div>

              {/* Materials */}
              <div className="mb-6">
                <span className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Materials:
                </span>
                <div className="flex flex-wrap gap-1.5 text-[11px] text-stone-600">
                  {product.materials.map((mat, idx) => (
                    <span key={idx} className="bg-stone-100 px-2 py-0.5 border border-stone-200">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Purchase / Quotation Module */}
            <div className="pt-6 border-t border-[#E8E6E1]">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center border border-stone-300 bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-2 hover:bg-stone-100 text-stone-600 transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 py-1.5 text-xs font-mono font-semibold text-stone-900 min-w-[2.5rem] text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-2 hover:bg-stone-100 text-stone-600 transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAdd}
                  className={`flex-1 py-3 px-4 text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                    addedNotice
                      ? 'bg-emerald-800 text-white'
                      : 'bg-[#191919] hover:bg-black text-white active:scale-[0.98]'
                  }`}
                >
                  {addedNotice ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Quotation List</span>
                    </>
                  ) : (
                    <>
                      <span>Add to Quotation Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-stone-500 font-mono">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-stone-600" />
                  Direct Factory Manufacturer Quote
                </span>
                <span>Sino-Uganda Industrial Park</span>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like / Related Items Footer */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-[#E8E6E1] bg-[#F5F4F0] p-6">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-stone-600 font-mono mb-4">
              Related from this category
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectProduct(rel)}
                  className="bg-white p-3 border border-stone-200 hover:border-stone-400 transition-all cursor-pointer group flex items-center gap-3"
                >
                  <div className="w-16 h-12 flex-shrink-0 bg-stone-100 overflow-hidden">
                    <ProductVisual product={rel} aspect="4:3" className="w-full h-full" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-stone-500 block">{rel.model}</span>
                    <h4 className="text-xs font-semibold text-stone-900 truncate group-hover:text-amber-800 transition-colors">
                      {rel.name}
                    </h4>
                    <span className="text-[10px] text-stone-500 font-mono block">{rel.dimensions.length}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
