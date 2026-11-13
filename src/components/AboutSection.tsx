import React from 'react';
import { COMPANY_INFO } from '../data/products';
import { IMAGES } from '../assets/images';
import { Factory, ShieldCheck, Award, Users, CheckCircle2, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FBFBFA] border-b border-[#E8E6E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header with Official Brand Logo */}
        <div className="max-w-4xl mb-16 flex items-start gap-5">
          <div className="h-16 sm:h-20 w-auto flex-shrink-0 bg-white border border-stone-200/90 px-3 py-1.5 shadow-xs rounded-xs flex items-center justify-center">
            <img
              src={IMAGES.brandLogo}
              alt="TIANAO Furniture Logo"
              className="h-full w-auto max-h-14 sm:max-h-16 object-contain"
            />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-widest font-semibold text-stone-500 block mb-1">
              COMPANY PROFILE · 企业简介 · 5GOOD 天奥家具
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#191919] leading-tight">
              天奥家具制造有限公司
            </h2>
            <p className="text-stone-600 font-mono text-xs uppercase tracking-wider mt-1">
              TIANAO FURNITURE MANUFACTURING CO., LTD. · SINO-UGANDA MBALE INDUSTRIAL PARK
            </p>
          </div>
        </div>

        {/* Split Showcase: High-Res Architecture + Verbatim Editorial Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden bg-stone-200 border border-stone-300 shadow-sm sticky top-28">
              <img
                src={IMAGES.factoryFacility}
                alt="Sino-Uganda Mbale Industrial Park - TIANAO Furniture 20,000 sqm Manufacturing Plant"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover aspect-[16/9]"
              />
              <div className="p-6 bg-[#191919] text-white font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                  <span className="text-amber-400 font-bold uppercase tracking-wider">中乌姆巴莱工业园生产基地</span>
                  <span className="text-stone-400">JULY 2024</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center pt-1">
                  <div>
                    <span className="text-white font-bold block text-sm">20,000 m²</span>
                    <span className="text-stone-400 text-[10px]">厂房面积</span>
                  </div>
                  <div>
                    <span className="text-white font-bold block text-sm">1,000 m²</span>
                    <span className="text-stone-400 text-[10px]">展厅面积</span>
                  </div>
                  <div>
                    <span className="text-white font-bold block text-sm">100+</span>
                    <span className="text-stone-400 text-[10px]">员工人数</span>
                  </div>
                </div>
                <div className="border-t border-stone-800 pt-2 text-[11px] text-stone-300">
                  <p>乌干达天唐集团 · 中国杭州奥默家具 合资成立</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8 font-sans">
            {/* Box 1: Verbatim Chinese Text from Document Page 2 */}
            <div className="p-6 sm:p-8 bg-white border border-[#E8E6E1] shadow-2xs space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <h3 className="font-editorial text-2xl font-bold text-stone-900">
                  关于天奥企业 · 企业简介
                </h3>
                <span className="text-[11px] font-mono text-[#005EA8] uppercase tracking-wider font-semibold">
                  CATALOGUE PAGE 01
                </span>
              </div>
              <p className="text-base text-stone-800 leading-relaxed font-sans font-medium">
                {COMPANY_INFO.profileCn}
              </p>
              <div className="p-4 bg-[#F5F4F0] border border-[#E8E6E1] space-y-1">
                <p className="text-xs font-mono text-[#005EA8] uppercase tracking-wider font-semibold">
                  公司现有产品系列
                </p>
                <p className="text-sm font-semibold text-stone-900 leading-relaxed">
                  现代豪华系列 · 高端极简系列 · 高端简奢系列
                </p>
              </div>
            </div>

            {/* Box 2: Verbatim English Text from Document Page 2 */}
            <div className="p-6 sm:p-8 bg-white border border-[#E8E6E1] shadow-2xs space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <h3 className="font-editorial text-2xl font-bold text-stone-900">
                  Company Profile
                </h3>
                <span className="text-[11px] font-mono text-[#005EA8] uppercase tracking-wider font-semibold">
                  CATALOGUE PAGE 02
                </span>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed font-sans">
                {COMPANY_INFO.profileEn}
              </p>
              <div className="p-4 bg-[#005EA8]/5 border border-[#005EA8]/20 text-xs text-stone-700 leading-relaxed">
                <span className="font-mono font-semibold text-[#005EA8] block mb-1 uppercase tracking-wider">
                  Current Product Series
                </span>
                <span>Modern Luxury Series · High-End Minimalist Series · High-End Simple Luxury Series</span>
              </div>
            </div>
          </div>
        </div>

        {/* The 5 Excellence Strategy (Direct from PDF Page 2) */}
        <div className="pt-12 border-t border-[#E8E6E1]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#005EA8] font-semibold block mb-1">
              THE 5GOOD PILLARS · 5好发展战略
            </span>
            <h3 className="font-editorial text-3xl font-bold text-stone-900">
              The Five Excellence Development Strategy
            </h3>
            <p className="text-xs text-stone-500 mt-2 font-mono">
              好健康 · 好舒适 · 好设计 · 好品质 · 好服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {COMPANY_INFO.fiveExcellence.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-[#E8E6E1] hover:border-black transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-4">
                    <span>0{idx + 1}</span>
                    <span className="text-stone-700 font-semibold">{item.cn}</span>
                  </div>
                  <h4 className="font-editorial text-xl font-bold text-stone-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-100 flex items-center text-[11px] font-mono text-stone-500">
                  <span>TIANAO STANDARD</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
