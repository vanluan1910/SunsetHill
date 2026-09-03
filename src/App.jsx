import { Suspense, lazy, useState, useRef, useCallback, useEffect } from 'react';
import { t } from './i18n';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import QuickInfo from './components/QuickInfo';
import WifiReception from './components/WifiReception';

const HouseRules = lazy(() => import('./components/HouseRules'));
const MotorbikeRental = lazy(() => import('./components/MotorbikeRental'));
const ToursTickets = lazy(() => import('./components/ToursTickets'));
const ExplorePhuQuoc = lazy(() => import('./components/ExplorePhuQuoc'));
const LocalFood = lazy(() => import('./components/LocalFood'));
const Attractions = lazy(() => import('./components/Attractions'));
const TravelTips = lazy(() => import('./components/TravelTips'));

const TOTAL_SLIDES = 10;
const SLIDE_KEY = 'sunset-hill-slide';

const HASH_TO_SLIDE = {
  home: 0,
  info: 1,
  wifi: 2,
  rules: 3,
  services: 4,
  tours: 5,
  explore: 6,
  food: 7,
  attractions: 8,
  tips: 9,
};

function getHashSlide() {
  try {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    return HASH_TO_SLIDE[hash];
  } catch {
    return undefined;
  }
}

function getStoredSlide() {
  const fromHash = getHashSlide();
  if (fromHash !== undefined) return fromHash;
  return 0;
}

function SlideFallback() {
  return (
    <div className="min-h-full bg-background flex items-center justify-center text-secondary">
      <span className="text-sm font-semibold tracking-wide">{t('common.loading', 'en')}</span>
    </div>
  );
}

function LazySlide({ children }) {
  return <Suspense fallback={<SlideFallback />}>{children}</Suspense>;
}

function SlidePane({ active, children }) {
  return (
    <div
      aria-hidden={!active}
      className={`min-w-full h-full ${active ? 'overflow-y-auto overscroll-y-auto' : 'overflow-hidden overscroll-none'}`}
      inert={active ? undefined : ''}
    >
      {children}
    </div>
  );
}

function App() {
  const [slide, setSlide] = useState(getStoredSlide);
  const [lang, setLang] = useState('en');
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    try { localStorage.setItem(SLIDE_KEY, String(slide)); } catch { /* ignore */ }
  }, [slide]);

  useEffect(() => {
    const markIcons = () => {
      document.querySelectorAll('.material-symbols-outlined').forEach((el) => {
        el.setAttribute('translate', 'no');
        el.classList.add('notranslate');
      });
    };
    markIcons();
    const observer = new MutationObserver(markIcons);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const goTo = useCallback((index) => {
    setSlide(Math.max(0, Math.min(TOTAL_SLIDES - 1, index)));
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      const fromHash = getHashSlide();
      if (fromHash !== undefined) goTo(fromHash);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [goTo]);

  useEffect(() => {
    window.history.pushState(null, '', window.location.href);
    const handlePop = () => {
      window.history.pushState(null, '', window.location.href);
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      const dx = touchStartX.current - e.changedTouches[0].clientX;
      const dy = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        goTo(slide + (dx > 0 ? 1 : -1));
      }
    },
    [slide, goTo]
  );

  return (
    <div className="bg-background antialiased" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <Header currentSlide={slide} onNavigate={goTo} lang={lang} onLangChange={setLang} />

      <div className="h-screen overflow-hidden" style={{ height: '100dvh' }}>
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          <SlidePane active={slide === 0}>
            <WelcomePage lang={lang} />
          </SlidePane>

          <SlidePane active={slide === 1}>
            <QuickInfo lang={lang} />
          </SlidePane>

          <SlidePane active={slide === 2}>
            <WifiReception lang={lang} />
          </SlidePane>

          <SlidePane active={slide === 3}>
            <LazySlide><HouseRules lang={lang} /></LazySlide>
          </SlidePane>

          <SlidePane active={slide === 4}>
            <LazySlide><MotorbikeRental lang={lang} /></LazySlide>
          </SlidePane>

          <SlidePane active={slide === 5}>
            <LazySlide><ToursTickets lang={lang} /></LazySlide>
          </SlidePane>

          <SlidePane active={slide === 6}>
            <LazySlide><ExplorePhuQuoc lang={lang} /></LazySlide>
          </SlidePane>

          <SlidePane active={slide === 7}>
            <LazySlide><LocalFood lang={lang} /></LazySlide>
          </SlidePane>

          <SlidePane active={slide === 8}>
            <LazySlide><Attractions lang={lang} /></LazySlide>
          </SlidePane>

          <SlidePane active={slide === 9}>
            <LazySlide><TravelTips lang={lang} /></LazySlide>
          </SlidePane>
        </div>
      </div>

      {slide !== 0 && (
        <nav className="fixed bottom-6 left-0 right-0 flex justify-center z-50 pointer-events-none">
          <div className="flex gap-3 bg-background/60 backdrop-blur px-4 py-2.5 rounded-full pointer-events-auto shadow-lg">
            {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
              <button
                key={i}
                aria-label={`${t('common.goToSlide', lang)} ${i + 1}`}
                aria-current={slide === i ? 'page' : undefined}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  slide === i ? 'bg-secondary scale-125' : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => goTo(i)}
                type="button"
              />
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}

export default App;
