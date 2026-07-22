import { t } from '../i18n';
import { LOCAL_FOOD_IMAGES } from '../data/pageImages';
import MapLink from './shared/MapLink';
import PageShell from './shared/PageShell';

function LocalFood({ lang = 'en' }) {
  const TIPS = [
    { icon: 'payments', titleKey: 'food.cashKing', textKey: 'food.cashKingDesc' },
    { icon: 'security', titleKey: 'food.staySafe', textKey: 'food.staySafeDesc' },
    { icon: 'translate', titleKey: 'food.etiquette', textKey: 'food.etiquetteDesc' },
  ];
  return (
    <PageShell>
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-5 md:py-14">
        <section className="mb-12 reveal-soft">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-[#120B06] rounded-lg flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#D39A53] text-3xl" aria-hidden="true">restaurant</span>
            </div>
            <div>
              <h1 className="font-serif text-4xl font-semibold tracking-tight text-[#1d1b19] md:text-5xl">{t('food.title', lang)}</h1>
            </div>
          </div>
          <p className="text-base leading-8 text-[#57423b] md:text-lg max-w-2xl">{t('food.desc', lang)}</p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 reveal-stagger">
          <article className="lg:col-span-6 flex flex-col bg-[#FFF8EF]/90 backdrop-blur-sm border border-[#E6D3BB] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="relative h-[220px] md:h-[400px] overflow-hidden group">
              <img
                alt={t('food.hamNinh', lang)}
                className="w-full h-full object-cover image-lift"
                loading="lazy"
                decoding="async"
                src={LOCAL_FOOD_IMAGES.hamNinh}
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-1.5 bg-[#120B06] text-white rounded-full text-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-base" aria-hidden="true">moped</span>
                  {t('food.hamNinhDist', lang)}
                </span>
              </div>
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="font-sans text-xl font-bold text-[#1d1b19] mb-2 md:text-2xl">{t('food.hamNinh', lang)}</h2>
                <p className="text-[#57423b] mb-6 leading-7">{t('food.hamNinhDesc', lang)}</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#57423b] bg-[#F3D7A8] border border-[#D39A53]/20 p-3 rounded-lg">
                  <span className="material-symbols-outlined text-[#D39A53]" aria-hidden="true">schedule</span>
                  <span className="text-sm font-semibold text-[#D39A53]">{t('food.hamNinhHours', lang)}</span>
                </div>
                <MapLink href="https://maps.app.goo.gl/e7cN4Jm8J4eE3rZX9" lang={lang} className="text-[#9A5A24] text-sm" />
              </div>
            </div>
          </article>

          <article className="lg:col-span-6 flex flex-col bg-[#FFF8EF]/90 backdrop-blur-sm border border-[#E6D3BB] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="relative h-[220px] md:h-[400px] overflow-hidden group">
              <img
                alt={t('food.nightMarket', lang)}
                className="w-full h-full object-cover image-lift"
                loading="lazy"
                decoding="async"
                src={LOCAL_FOOD_IMAGES.nightMarket}
              />
              <div className="absolute bottom-4 left-4">
                <span className="px-4 py-1.5 bg-[#120B06] text-white rounded-full text-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-base" aria-hidden="true">moped</span>
                  {t('food.nightMarketDist', lang)}
                </span>
              </div>
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="font-sans text-xl font-bold text-[#1d1b19] mb-2 md:text-2xl">{t('food.nightMarket', lang)}</h2>
                <p className="text-[#57423b] mb-6 leading-7">{t('food.nightMarketDesc', lang)}</p>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-[#F3D7A8] border border-[#D39A53]/20 rounded-xl">
                  <div className="flex items-center gap-3 text-[#D39A53] mb-2">
                    <span className="material-symbols-outlined" aria-hidden="true">event_available</span>
                    <span className="text-sm font-semibold">{t('food.nightMarketHours', lang)}</span>
                  </div>
                  <p className="text-[#8b7169] text-xs">{t('food.nightMarketPeak', lang)}</p>
                </div>
                <MapLink href="https://maps.app.goo.gl/VJ4fG5w3V4yWv8J79" lang={lang} className="text-[#9A5A24] text-sm" />
              </div>
            </div>
          </article>

          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-2 reveal-stagger">
            {TIPS.map((tip) => (
              <div key={tip.icon} className="p-5 bg-[#E6D3BB] rounded-xl flex items-start gap-4">
                <span className="material-symbols-outlined text-[#2A160A] p-2 bg-[#FFF8EF] rounded-full shrink-0">{tip.icon}</span>
                <div>
                  <h4 className="font-sans text-lg font-bold text-[#8a501a] mb-1">{t(tip.titleKey, lang)}</h4>
                  <p className="text-sm leading-6 text-[#57423b]">{t(tip.textKey, lang)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </PageShell>
  );
}

export default LocalFood;
