import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, FileText, ArrowRight, Download } from 'lucide-react';
import { PRODUCTS, COMPANY_INFO, Product } from '../data/products';
import { IMAGES } from '../assets/images';

interface CatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const CatalogueModal: React.FC<CatalogueModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 36;

  if (!isOpen) return null;

  // Find products associated with current page
  const pageProducts = PRODUCTS.filter((p) => p.pageNumber === currentPage);

  // Page title mapping from the PDF
  const getPageInfo = (page: number) => {
    if (page === 1) return { title: 'Cover & Company Contact Information', section: 'Identity' };
    if (page === 2) return { title: 'Company Profile & 5Good Excellence Strategy', section: 'Overview' };
    if (page >= 3 && page <= 19) return { title: 'Modern Luxury & Minimalist Modular Sofas', section: 'Sofas' };
    if (page >= 20 && page <= 26) return { title: 'Power Motion, Recliners & Home Theater Lounges', section: 'Power Motion' };
    if (page === 27) return { title: 'Accent Chairs, Swivel Armchairs & Designer Nightstands', section: 'Chairs & Nightstands' };
    if (page >= 28 && page <= 36) return { title: 'Luxury Soft Beds & Master Bedroom Suites', section: 'Beds' };
    return { title: 'TIANAO Furniture Catalogue', section: 'Collection' };
  };

  const currentInfo = getPageInfo(currentPage);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#FBFBFA] border border-[#E8E6E1] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E8E6E1] bg-white flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-[#005EA8]" />
            <div>
              <h2 className="font-editorial text-xl font-bold text-stone-900 leading-none">
                TIANAO Furniture Official Catalogue
              </h2>
              <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">
                36 Pages · Sino-Uganda Mbale Industrial Park
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={COMPANY_INFO.pdfPath}
              download="TIANAO-Furniture-Official-Catalogue.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#005EA8] hover:bg-[#00457C] text-white text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 text-stone-500 hover:text-black transition-colors cursor-pointer"
              aria-label="Close catalogue viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Page Content & Viewer */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#F5F4F0] flex flex-col justify-between">
          <div className="bg-white border border-stone-300 p-6 sm:p-10 shadow-sm relative min-h-[380px] flex flex-col justify-between">
            {/* Page Header */}
            <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block">
                  {currentInfo.section} · PAGE {String(currentPage).padStart(2, '0')} / {totalPages}
                </span>
                <h3 className="font-editorial text-2xl font-bold text-stone-900">
                  {currentInfo.title}
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-stone-500 bg-stone-100 px-3 py-1">
                P.{currentPage}
              </span>
            </div>

            {/* Page Body Details */}
            <div className="space-y-6">
              {currentPage === 1 && (
                <div className="space-y-4">
                  <div className="p-6 bg-stone-50 border border-stone-200 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-auto flex-shrink-0 bg-white border border-stone-200 px-2 py-1 shadow-xs rounded-xs flex items-center justify-center">
                        <img
                          src={IMAGES.brandLogo}
                          alt="TIANAO Furniture Logo"
                          className="h-full w-auto max-h-12 object-contain"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-stone-900">5good 天奥家具 TIANAO furniture</p>
                        <p className="text-xs text-stone-700">TIANAO FURNITURE MANUFACTURING CO., LTD (天奥家具制造有限公司)</p>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-stone-200/80 space-y-1">
                      <p className="text-xs font-mono text-stone-600">Address: Sino-Uganda Mbale Industrial Park, Mbale, Uganda</p>
                      <p className="text-xs font-mono text-stone-600">Mobile Phone: +256 744 477 777 · +256 744 377 777</p>
                      <p className="text-xs font-mono text-stone-600">Official Web: https://tianaofurniture.co.ug</p>
                    </div>
                  </div>
                </div>
              )}

              {currentPage === 2 && (
                <div className="space-y-4 text-xs text-stone-700 leading-relaxed font-sans">
                  {/* Chinese Original from PDF Page 2 */}
                  <div className="p-4 bg-stone-50 border border-stone-200 space-y-2">
                    <p className="font-bold text-stone-900 text-sm">
                      关于天奥企业 · 企业简介
                    </p>
                    <p className="text-stone-800 leading-relaxed font-medium">
                      {COMPANY_INFO.profileCn}
                    </p>
                  </div>

                  {/* English Translation from PDF Page 2 */}
                  <div className="p-4 bg-white border border-stone-200 space-y-2">
                    <p className="font-bold text-stone-900 text-sm">
                      Company Profile
                    </p>
                    <p className="text-stone-700 leading-relaxed">
                      {COMPANY_INFO.profileEn}
                    </p>
                  </div>

                  {/* 5GOOD Strategy */}
                  <div className="bg-[#005EA8]/5 p-3.5 border border-[#005EA8]/20 text-xs">
                    <p className="font-bold text-[#005EA8] text-[11px] mb-1 uppercase tracking-wider">
                      Five Excellence Development Strategy (5好发展战略 / 5GOOD):
                    </p>
                    <p className="text-stone-800 font-mono text-[11px]">
                      好健康 (Good Health) · 好舒适 (Good Comfort) · 好设计 (Good Design) · 好品质 (Good Quality) · 好服务 (Good Service)
                    </p>
                  </div>
                </div>
              )}

              {currentPage >= 3 && pageProducts.length > 0 && (
                <div className="space-y-4">
                  <p className="text-xs text-stone-500 font-mono">
                    Products featured on page {currentPage}:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {pageProducts.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          onClose();
                          onSelectProduct(p);
                        }}
                        className="p-4 bg-stone-50 border border-stone-200 hover:border-black transition-all cursor-pointer group"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-mono text-xs font-bold text-stone-900">{p.model}</span>
                          <span className="text-[10px] text-stone-500">{p.categoryLabel}</span>
                        </div>
                        <h4 className="font-semibold text-stone-900 text-sm group-hover:text-amber-800 transition-colors">
                          {p.name} {p.nameCn ? `(${p.nameCn})` : ''}
                        </h4>
                        <p className="text-xs text-stone-500 font-mono mt-1">
                          {p.dimensions.length} {p.dimensions.depth ? `× ${p.dimensions.depth}` : ''}
                        </p>
                        <div className="mt-3 flex items-center text-xs font-semibold text-stone-800 group-hover:text-black">
                          <span>View Full Specifications</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentPage >= 3 && pageProducts.length === 0 && (
                <div className="py-8 text-center text-stone-500 text-xs">
                  <p>Catalogue editorial spread for the TIANAO Furniture Collection.</p>
                  <p className="mt-1 text-stone-400 font-mono">Navigate to adjacent pages to view specific furniture model specifications.</p>
                </div>
              )}
            </div>

            {/* Page Bottom watermark */}
            <div className="pt-6 border-t border-stone-200 mt-6 flex items-center justify-between text-[10px] font-mono text-stone-400">
              <span>TIANAO FURNITURE · SINO-UGANDA MBALE</span>
              <span>CATALOGUE PAGE {currentPage} OF {totalPages}</span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-stone-300 bg-white hover:bg-stone-50 disabled:opacity-40 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Page</span>
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-stone-300 bg-white hover:bg-stone-50 disabled:opacity-40 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Next Page</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick jump to page */}
            <div className="flex items-center gap-2 text-xs font-mono text-stone-600">
              <span>Jump to Page:</span>
              <select
                value={currentPage}
                onChange={(e) => setCurrentPage(Number(e.target.value))}
                className="px-2 py-1 border border-stone-300 bg-white text-xs"
              >
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
                  <option key={pg} value={pg}>
                    Page {pg} - {getPageInfo(pg).section}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
