import React, { useEffect, useRef, useState } from 'react';
import { ChevronUp, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/productTranslations';

interface LanguageOption {
  code: Language;
  nativeLabel: string;
  englishLabel: string;
  shortCode: string;
}

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'en', nativeLabel: 'English', englishLabel: 'English', shortCode: 'EN' },
  { code: 'zh', nativeLabel: '中文', englishLabel: 'Chinese', shortCode: '中文' },
  { code: 'ar', nativeLabel: 'العربية', englishLabel: 'Arabic', shortCode: 'AR' },
];

export const FlagIcon: React.FC<{ code: Language; className?: string }> = ({
  code,
  className = 'w-6 h-4',
}) => {
  if (code === 'en') {
    return (
      <svg
        viewBox="0 0 60 40"
        className={`${className} rounded-[2px] border border-black/15 shrink-0 block`}
        aria-hidden="true"
      >
        <rect width="60" height="40" fill="#012169" />
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#FFFFFF" strokeWidth="8" />
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4.2" />
        <path d="M30,0 V40 M0,20 H60" stroke="#FFFFFF" strokeWidth="12" />
        <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="7" />
      </svg>
    );
  }

  if (code === 'zh') {
    return (
      <svg
        viewBox="0 0 60 40"
        className={`${className} rounded-[2px] border border-black/15 shrink-0 block`}
        aria-hidden="true"
      >
        <rect width="60" height="40" fill="#DE2910" />
        <polygon
          points="12,5 13.8,10.5 19.6,10.5 14.9,13.9 16.7,19.4 12,16 7.3,19.4 9.1,13.9 4.4,10.5 10.2,10.5"
          fill="#FFDE00"
        />
        <circle cx="23.5" cy="6.5" r="1.7" fill="#FFDE00" />
        <circle cx="27" cy="10.5" r="1.7" fill="#FFDE00" />
        <circle cx="27" cy="16" r="1.7" fill="#FFDE00" />
        <circle cx="23.5" cy="20" r="1.7" fill="#FFDE00" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 60 40"
      className={`${className} rounded-[2px] border border-black/15 shrink-0 block`}
      aria-hidden="true"
    >
      <rect width="60" height="40" fill="#006C35" />
      {/* Stylized white calligraphic crest + horizontal sabre */}
      <path
        d="M15,15 C19,11 24,16 28,13 C32,10 36,16 40,13 C42,11 45,14 46,16"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M19,20 H41 M24,18 V21 M32,17.5 V21 M37,18 V21"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M16,27 H44 M40,25.2 L44,27 L40,28.8"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

interface LanguageSwitcherProps {
  variant?: 'floating' | 'header' | 'mobile';
  onSelectComplete?: () => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'floating',
  onSelectComplete,
}) => {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentOption =
    LANGUAGE_OPTIONS.find((opt) => opt.code === language) || LANGUAGE_OPTIONS[0];

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setOpen(false);
    onSelectComplete?.();
  };

  if (variant === 'mobile') {
    return (
      <div className="py-3 border-b border-stone-200">
        <div className="flex items-center gap-2 text-sm font-semibold text-stone-700 mb-3">
          <FlagIcon code={currentOption.code} className="w-5 h-3.5" />
          <span>{t.languageSelectorLabel}</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {LANGUAGE_OPTIONS.map((opt) => (
            <button
              key={opt.code}
              type="button"
              onClick={() => handleSelect(opt.code)}
              aria-pressed={language === opt.code}
              className={`py-2.5 px-3 text-sm font-semibold border transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                language === opt.code
                  ? 'bg-[#005EA8] text-white border-[#005EA8]'
                  : 'bg-white text-stone-800 border-stone-300 hover:border-[#005EA8]'
              }`}
            >
              <FlagIcon code={opt.code} className="w-5 h-3.5" />
              <span>{opt.nativeLabel}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'floating') {
    return (
      <div
        ref={containerRef}
        dir="ltr"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40"
      >
        {open && (
          <div
            role="listbox"
            aria-label={t.languageSelectorLabel}
            className="absolute bottom-full right-0 mb-2.5 w-56 bg-white border border-stone-300 shadow-2xl py-1.5"
          >
            <div className="px-4 py-1.5 border-b border-stone-100 text-[11px] uppercase tracking-widest font-semibold text-stone-500">
              {t.languageSelectorLabel}
            </div>
            {LANGUAGE_OPTIONS.map((opt) => {
              const isSelected = language === opt.code;
              return (
                <button
                  key={opt.code}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(opt.code)}
                  className={`w-full px-4 py-2.5 text-sm flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#005EA8]/10 text-[#005EA8] font-semibold'
                      : 'text-stone-800 hover:bg-stone-100 font-medium'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <FlagIcon code={opt.code} className="w-6 h-4" />
                    <span className="flex items-baseline gap-1.5">
                      <span>{opt.nativeLabel}</span>
                      {opt.code !== 'en' && (
                        <span className="text-xs text-stone-500 font-normal">
                          ({opt.englishLabel})
                        </span>
                      )}
                    </span>
                  </span>
                  {isSelected && <Check className="w-4 h-4 text-[#005EA8] shrink-0" />}
                </button>
              );
            })}
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label={`${t.languageSelectorLabel}: ${currentOption.nativeLabel}`}
          className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white/95 backdrop-blur-md hover:bg-white text-stone-900 border border-stone-300 hover:border-[#005EA8] shadow-lg transition-all cursor-pointer whitespace-nowrap"
        >
          <FlagIcon code={currentOption.code} className="w-6 h-4" />
          <span className="text-sm font-semibold tracking-wide">
            {currentOption.nativeLabel}
          </span>
          <ChevronUp
            className={`w-4 h-4 text-stone-500 transition-transform duration-150 ${
              open ? 'rotate-180 text-[#005EA8]' : ''
            }`}
          />
        </button>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t.languageSelectorLabel}: ${currentOption.nativeLabel}`}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 hover:border-[#005EA8] transition-colors cursor-pointer whitespace-nowrap"
      >
        <FlagIcon code={currentOption.code} className="w-5 h-3.5" />
        <span>{currentOption.nativeLabel}</span>
        <ChevronUp
          className={`w-4 h-4 text-stone-500 transition-transform duration-150 ${
            open ? '' : 'rotate-180'
          }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={t.languageSelectorLabel}
          className="absolute end-0 mt-1.5 w-48 bg-white border border-stone-300 shadow-lg z-50 py-1"
        >
          {LANGUAGE_OPTIONS.map((opt) => {
            const isSelected = language === opt.code;
            return (
              <button
                key={opt.code}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(opt.code)}
                className={`w-full px-4 py-2.5 text-sm flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#005EA8]/10 text-[#005EA8] font-semibold'
                    : 'text-stone-800 hover:bg-stone-100 font-medium'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <FlagIcon code={opt.code} className="w-5 h-3.5" />
                  <span>{opt.nativeLabel}</span>
                </span>
                {isSelected && <Check className="w-4 h-4 text-[#005EA8] shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
