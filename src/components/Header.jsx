import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { t } from '../i18n';

const MENU_ITEMS = [
  { label: { en: 'Home', vi: 'Trang chủ', zh: '首页', ko: '홈', ru: 'Главная' }, slide: 0 },
  { label: { en: 'Quick Information', vi: 'Thông tin nhanh', zh: '快速信息', ko: '빠른 정보', ru: 'Быстрая информация' }, slide: 1 },
  { label: { en: 'Wi-Fi & Reception', vi: 'Wi-Fi & Lễ tân', zh: 'Wi-Fi与前台', ko: 'Wi-Fi 및 리셉션', ru: 'Wi-Fi и ресепшн' }, slide: 2 },
  { label: { en: 'House Rules', vi: 'Nội quy', zh: '住宿规定', ko: '숙소 규칙', ru: 'Правила проживания' }, slide: 3 },
  { label: { en: 'Resort Services', vi: 'Dịch vụ resort', zh: '度假村服务', ko: '리조트 서비스', ru: 'Услуги курорта' }, slide: 4 },
  { label: { en: 'Tours & Tickets', vi: 'Tour & Vé', zh: '旅游与门票', ko: '투어 및 티켓', ru: 'Туры и билеты' }, slide: 5 },
  { label: { en: 'Explore Phu Quoc', vi: 'Khám phá Phú Quốc', zh: '探索富国岛', ko: '푸꾸옥 탐험', ru: 'Исследуйте Фукуок' }, slide: 6 },
  { label: { en: 'Local Food', vi: 'Ẩm thực', zh: '当地美食', ko: '현지 음식', ru: 'Местная кухня' }, slide: 7 },
  { label: { en: 'Attractions', vi: 'Điểm tham quan', zh: '景点', ko: '명소', ru: 'Достопримечательности' }, slide: 8 },
  { label: { en: 'Travel Tips', vi: 'Mẹo du lịch', zh: '旅行贴士', ko: '여행 팁', ru: 'Советы путешественникам' }, slide: 9 },
];

const LANGUAGES = [
  { code: 'en', flagImg: '/flags/en.png', name: 'English' },
  { code: 'vi', flagImg: '/flags/vi.png', name: 'Tiếng Việt' },
  { code: 'zh', flagImg: '/flags/zh.png', name: '中文' },
  { code: 'ko', flagImg: '/flags/ko.png', name: '한국어' },
  { code: 'ru', flagImg: '/flags/ru.png', name: 'Русский' },
];

function Header({ currentSlide = 0, onNavigate, lang = 'en', onLangChange }) {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const desktopLangButtonRef = useRef(null);
  const mobileLangButtonRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);
  const mobileCloseButtonRef = useRef(null);
  const desktopFirstLangOptionRef = useRef(null);
  const mobileFirstLangOptionRef = useRef(null);
  const desktopLangPanelRef = useRef(null);
  const mobileLangPanelRef = useRef(null);
  const mobileDrawerRef = useRef(null);
  const prevOpenRef = useRef(false);
  const prevLangOpenRef = useRef(false);
  const items = MENU_ITEMS;

  const getFocusableElements = (container) => {
    if (!container) return [];
    return Array.from(
      container.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );
  };

  const handleNavigate = (slide) => {
    onNavigate?.(slide);
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      mobileCloseButtonRef.current?.focus();
    } else if (prevOpenRef.current) {
      mobileMenuButtonRef.current?.focus();
    }

    prevOpenRef.current = open;
  }, [open]);

  useEffect(() => {
    if (langOpen) {
      const target = open ? mobileFirstLangOptionRef.current : desktopFirstLangOptionRef.current;
      target?.focus();
    } else if (prevLangOpenRef.current) {
      if (open) {
        mobileLangButtonRef.current?.focus();
      } else {
        desktopLangButtonRef.current?.focus();
      }
    }

    prevLangOpenRef.current = langOpen;
  }, [langOpen, open]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key !== 'Escape') return;

      if (langOpen) {
        setLangOpen(false);
        if (open) {
          mobileLangButtonRef.current?.focus();
        } else {
          desktopLangButtonRef.current?.focus();
        }
        return;
      }

      if (open) {
        setOpen(false);
      }
    };

    if (langOpen || open) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }

    return undefined;
  }, [langOpen, open]);

  useEffect(() => {
    const handleTrap = (event) => {
      if (event.key !== 'Tab') return;

      const container = langOpen
        ? open
          ? mobileLangPanelRef.current
          : desktopLangPanelRef.current
        : open
          ? mobileDrawerRef.current
          : null;

      const focusable = getFocusableElements(container);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    if (langOpen || open) {
      window.addEventListener('keydown', handleTrap);
      return () => window.removeEventListener('keydown', handleTrap);
    }

    return undefined;
  }, [langOpen, open]);

  return (
    <>
      {/* ===== DESKTOP HEADER ===== */}
      <header
        className={`hidden md:flex fixed top-0 w-full z-50 justify-center items-center px-6 py-3 transition-all duration-300 ${
          currentSlide === 0 ? 'bg-transparent' : 'bg-background/80 backdrop-blur-sm shadow-lg'
        }`}
      >
        <nav className="flex gap-1 items-center">
          {items.map((item) => (
            <button
              key={item.slide}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                currentSlide === item.slide
                  ? 'text-secondary bg-secondary/10'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
              onClick={() => handleNavigate(item.slide)}
              type="button"
            >
              {item.label[lang] || item.label.en}
            </button>
          ))}
          <div className="ml-4 border-l border-white/20 pl-4 relative">
            <button
              aria-expanded={langOpen}
              aria-label={t('common.changeLanguage', lang)}
              className="flex items-center gap-2 text-white/70 text-sm font-medium hover:text-white transition-colors cursor-pointer"
              onClick={() => setLangOpen(prev => !prev)}
              ref={desktopLangButtonRef}
              type="button"
            >
              {(() => { const cl = LANGUAGES.find(l => l.code === lang); return cl ? (
                <><img src={cl.flagImg} alt="" className="w-5 h-auto inline-block" />{cl.name}</>
              ) : lang.toUpperCase(); })()}
              <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_drop_down</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <>
                  <motion.div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                  <motion.div
                    ref={desktopLangPanelRef}
                    className="absolute right-0 mt-1 bg-[#120B06] border border-white/20 rounded-lg shadow-xl z-50 py-1 min-w-[120px]"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    {LANGUAGES.filter(l => l.code !== lang).map((l, index) => (
                      <button
                        key={l.code}
                        className="flex items-center gap-2 w-full text-left px-3 py-1.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                        onClick={() => { onLangChange?.(l.code); setLangOpen(false); }}
                        ref={index === 0 ? desktopFirstLangOptionRef : null}
                        type="button"
                      >
                        <img src={l.flagImg} alt="" className="w-5 h-auto inline-block" />
                        {l.name}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </header>

      {/* ===== MOBILE: floating hamburger (left) + language dropdown (right) ===== */}
      <div className="md:hidden">
        <button
          aria-expanded={open}
          aria-label={t('common.menu', lang)}
          className="fixed top-3 left-3 z-50 h-10 w-10 bg-[#120B06]/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-md flex items-center justify-center group"
          onClick={() => setOpen(true)}
          ref={mobileMenuButtonRef}
          type="button"
        >
          <span className="material-symbols-outlined text-[#D39A53] text-2xl group-hover:scale-110 transition-transform" aria-hidden="true">
            menu
          </span>
        </button>

        <div className="fixed top-3 right-3 z-50">
          <button
            aria-expanded={langOpen}
            aria-label={t('common.changeLanguage', lang)}
            className="h-10 bg-[#120B06]/90 backdrop-blur-sm border border-white/20 rounded-lg px-3 text-xs font-semibold text-white/80 shadow-md flex items-center gap-1"
            onClick={() => setLangOpen(!langOpen)}
            ref={mobileLangButtonRef}
            type="button"
          >
            {(() => { const cl = LANGUAGES.find(l => l.code === lang); return cl ? (
              <><img src={cl.flagImg} alt="" className="w-4 h-auto inline-block" /> {cl.name}</>
            ) : lang.toUpperCase(); })()}
            <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_drop_down</span>
          </button>
          <AnimatePresence>
            {langOpen && (
              <>
                <motion.div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                <motion.div
                  ref={mobileLangPanelRef}
                  className="absolute right-0 mt-1 bg-[#120B06] border border-white/20 rounded-lg shadow-xl z-50 py-1 min-w-[120px]"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                >
                  {LANGUAGES.filter(l => l.code !== lang).map((l, index) => (
                    <button
                      key={l.code}
                      className="flex items-center gap-2 w-full text-left px-3 py-1.5 text-xs font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                      onClick={() => { onLangChange?.(l.code); setLangOpen(false); }}
                      ref={index === 0 ? mobileFirstLangOptionRef : null}
                      type="button"
                    >
                      <img src={l.flagImg} alt="" className="w-4 h-auto inline-block" />
                      {l.name}
                    </button>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {open && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/40 z-[60]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
              />
                <motion.div
                  ref={mobileDrawerRef}
                  aria-labelledby="mobile-nav-title"
                  aria-modal="true"
                  className="fixed left-0 top-0 h-full w-64 bg-[#120B06] shadow-2xl z-[70] py-6 overflow-y-auto"
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  role="dialog"
                  transition={{ type: 'tween', duration: 0.3 }}
                >
                  <div className="flex items-center justify-between px-4 mb-6">
                  <span className="text-[#D39A53] font-bold text-lg" id="mobile-nav-title">SunSet Hill</span>
                  <button
                    aria-label={t('common.closeMenu', lang)}
                    className="p-1 text-white/60 hover:text-white"
                    onClick={() => setOpen(false)}
                    ref={mobileCloseButtonRef}
                    type="button"
                  >
                    <span aria-hidden="true" className="material-symbols-outlined text-2xl">close</span>
                  </button>
                </div>
                <div className="space-y-1 px-3">
                  {items.map((item) => (
                    <button
                      key={item.slide}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        currentSlide === item.slide
                          ? 'text-[#D39A53] bg-white/10 font-bold'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                      onClick={() => handleNavigate(item.slide)}
                      type="button"
                    >
                      {item.label[lang] || item.label.en}
                    </button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Header;
