import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';

interface CategorySectionProps {
  onSelectCategory: (category: 'all' | 'sofas' | 'recliners' | 'beds' | 'chairs-tables') => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ onSelectCategory }) => {
  const countByCat = (cat: 'sofas' | 'recliners' | 'beds' | 'chairs-tables') =>
    PRODUCTS.filter((p) => p.category === cat).length;

  const categories = [
    {
      id: 'sofas' as const,
      title: 'Modular, Living & Executive Sofas',
      titleCn: '客厅、模块化与商务沙发',
      count: `${countByCat('sofas')} Models`,
      desc: 'Sculpted walnut & bouclé sofas, 1+1+3 executive reception suites, sugar cube sectionals, and piano-key leather lounges.',
      highlightModel: 'TA-M04# · TA-EX01# · TA9106#',
      bgClass: 'bg-[#F2EFE9]',
    },
    {
      id: 'recliners' as const,
      title: 'Power Motion & Home Cinema',
      titleCn: '电动功能与影院沙发',
      count: `${countByCat('recliners')} Models`,
      desc: 'Smart motorized recliners with integrated console cup holders, silent actuators, and ergonomic headrest support.',
      highlightModel: 'TA9810# · TA9102#',
      bgClass: 'bg-[#EAE7DF]',
    },
    {
      id: 'beds' as const,
      title: 'Designer Upholstered Beds',
      titleCn: '软体大床与卧室空间',
      count: `${countByCat('beds')} Models`,
      desc: 'Reinforced ribbed platform slat foundations, Italian saddle leather headboards, and zero-pressure memory foam layers.',
      highlightModel: 'TAA2188# · TA2576# · BED-01',
      bgClass: 'bg-[#E5E1D7]',
    },
    {
      id: 'chairs-tables' as const,
      title: 'Chairs, Dining & Nightstands',
      titleCn: '休闲单椅、餐桌椅与床头柜',
      count: `${countByCat('chairs-tables')} Models`,
      desc: 'Walnut & bouclé lounge armchairs, 360° swivel chairs, sintered stone dining suites, and soft-close nightstands.',
      highlightModel: 'TA-M02# · 9808# · DINING-01',
      bgClass: 'bg-[#DFDBD0]',
    },
  ];

  return (
    <section className="py-20 bg-[#FBFBFA] border-b border-[#E8E6E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest font-semibold text-[#005EA8] block mb-2">
              CURATED SECTIONS · 目录系列
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#191919]">
              Product Categories
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md font-sans">
            Organized directly from the official TIANAO Furniture 36-page product catalogue, featuring verified dimensions, materials, and residential &amp; commercial suites.
          </p>
        </div>

        {/* 4 Large Editorial Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`p-8 border border-stone-200 hover:border-[#005EA8] transition-all duration-300 flex flex-col justify-between min-h-[300px] cursor-pointer group ${cat.bgClass}`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-stone-500 mb-6">
                  <span>0{index + 1}</span>
                  <span className="font-semibold text-stone-700 tabular-nums">{cat.count}</span>
                </div>

                <h3 className="font-editorial text-2xl font-bold text-stone-900 group-hover:text-[#005EA8] transition-colors">
                  {cat.title}
                </h3>
                <span className="text-xs font-medium text-stone-500 block mt-1">
                  {cat.titleCn}
                </span>

                <p className="text-xs text-stone-600 mt-4 leading-relaxed font-sans">
                  {cat.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-stone-300/80 flex items-center justify-between text-xs font-mono">
                <span className="text-stone-600 truncate pr-2">{cat.highlightModel}</span>
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-stone-900 group-hover:bg-[#005EA8] group-hover:text-white transition-all shadow-xs shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
