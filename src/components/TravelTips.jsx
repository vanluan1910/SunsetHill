import { useState } from 'react';
import { motion } from 'framer-motion';
import { t } from '../i18n';
import { RECEPTION_TEL } from '../data/contact';
import { TRAVEL_TIPS_IMAGES } from '../data/pageImages';
import PageShell from './shared/PageShell';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const FAQS = [
  { icon: 'schedule', qKey: 'tips.faqCheckin', aKey: 'tips.faqCheckinA' },
  { icon: 'restaurant', qKey: 'tips.faqBreakfast', aKey: 'tips.faqBreakfastA' },
  { icon: 'wifi', qKey: 'tips.faqWifi', aKey: 'tips.faqWifiA' },
  { icon: 'moped', qKey: 'tips.faqMoto', aKey: 'tips.faqMotoA' },
  { icon: 'laundry', qKey: 'tips.faqLaundry', aKey: 'tips.faqLaundryA' },
  { icon: 'pool', qKey: 'tips.faqPool', aKey: 'tips.faqPoolA' },
];

const TOURS_LIST = [
  ['tours.cableCar'], ['tours.islandHopping'], ['tours.vinwonders'], ['tours.snorkeling'],
  ['tours.safari'], ['tours.scubaDiving'], ['tours.kissShow'], ['tours.symphonyShow'], ['tours.fishing'],
];

const TRAVEL_TIMES = [
  { icon: 'waves', labelKey: 'tips.ongLang', timeKey: 'tips.ongLangTime' },
  { icon: 'forest', labelKey: 'tips.pepperFarm', timeKey: 'tips.pepperFarmTime' },
  { icon: 'storefront', labelKey: 'tips.nightMarket', timeKey: 'tips.nightMarketTime' },
  { icon: 'sailing', labelKey: 'tips.fishingVillage', timeKey: 'tips.fishingVillageTime' },
  { icon: 'attractions', labelKey: 'tips.vinwonders', timeKey: 'tips.vinwondersTime' },
  { icon: 'temple_buddhist', labelKey: 'tips.pagoda', timeKey: 'tips.pagodaTime' },
  { icon: 'flight', labelKey: 'tips.airport', timeKey: 'tips.airportTime' },
];

function FAQItem({ item, lang }) {
  const [open, setOpen] = useState(false);
  const answerId = `faq-answer-${item.qKey}`;
  return (
    <div>
      <button
        className="w-full text-left p-4 bg-[#FFF8EF]/90 backdrop-blur-sm border border-[#E6D3BB] rounded-xl flex items-center justify-between hover:bg-[#F3E2CA] transition-colors"
        aria-controls={answerId}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        type="button"
      >
        <span className="flex items-center gap-3 font-semibold text-sm text-[#2A160A]">
          <span className="material-symbols-outlined text-[#2A160A]">{item.icon}</span>
          {t(item.qKey, lang)}
        </span>
          <span className={`material-symbols-outlined text-[#8B6B52] transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true">expand_more</span>
      </button>
      {open && (
        <div id={answerId} className="px-8 py-4 text-[#57423b] text-sm leading-6">{t(item.aKey, lang)}</div>
      )}
    </div>
  );
}

function TravelTips({ lang = 'en' }) {
  return (
    <PageShell>
      <div className="md:hidden">
        <main className="px-4 pt-3 pb-20 space-y-9">
          <motion.section className="text-center space-y-3" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-[#1d1b19]">{t('tips.title', lang)}</h1>
            <div className="w-20 h-0.5 bg-[#D39A53] mx-auto rounded-full" />
          </motion.section>

          <motion.div className="space-y-5" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            <motion.div variants={fadeUp} className="bg-[#FFF8EF]/90 backdrop-blur-sm border border-[#E6D3BB] rounded-xl p-5 border-l-4 border-l-[#D39A53]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#120B06] rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#D39A53]" aria-hidden="true">lightbulb</span>
                </div>
                <h2 className="font-serif text-2xl font-semibold text-[#1d1b19]">{t('tips.tip', lang)}</h2>
              </div>
              <p className="text-[#57423b] text-sm leading-6 mb-4">{t('tips.tipDesc', lang)}</p>
              <div className="bg-[#F3E2CA] p-4 rounded-lg flex items-start gap-3">
                <span className="material-symbols-outlined text-[#2A160A]" aria-hidden="true">support_agent</span>
                  <p className="text-xs leading-5 text-[#57423b]">{t('tips.contactReception', lang)}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[#FFF8EF]/90 backdrop-blur-sm border border-[#E6D3BB] rounded-xl p-5 border-l-4 border-l-[#2A160A]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#120B06] rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#D39A53]" aria-hidden="true">favorite</span>
                </div>
                <h2 className="font-serif text-2xl font-semibold text-[#1d1b19]">{t('tips.whyStay', lang)}</h2>
              </div>
              <p className="text-[#57423b] text-sm leading-6">{t('tips.whyStayDesc', lang)}</p>
            </motion.div>
          </motion.div>

          <motion.div className="space-y-5" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            <motion.div variants={fadeUp} className="bg-[#FFF8EF]/90 backdrop-blur-sm border border-[#E6D3BB] rounded-xl overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img alt={t('tips.peaceful', lang)} className="w-full h-full object-cover image-lift" src={TRAVEL_TIPS_IMAGES.garden} loading="lazy" decoding="async" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[#2A160A]" aria-hidden="true">nature_people</span>
                  <h3 className="font-sans text-lg font-bold text-[#1d1b19]">{t('tips.peaceful', lang)}</h3>
                </div>
                <p className="text-sm leading-6 text-[#57423b]">{t('tips.peacefulDesc', lang)}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[#FFF8EF]/90 backdrop-blur-sm border border-[#E6D3BB] rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#2A160A]" aria-hidden="true">location_on</span>
                  <h3 className="font-sans text-lg font-bold text-[#1d1b19]">{t('tips.convenient', lang)}</h3>
              </div>
              <p className="mb-4 text-xs italic text-[#8b7169]">{t('tips.convenientDesc', lang)}</p>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#8a501a]">{t('tips.travelTimes', lang)}</h4>
              <div className="space-y-2">
                {TRAVEL_TIMES.map((tt) => (
                  <div key={tt.labelKey} className="flex items-center justify-between border-b border-[#E6D3BB] pb-2">
                    <span className="flex items-center gap-2 text-sm text-[#5F4635]">
                      <span className="material-symbols-outlined text-[#D39A53] text-base">{tt.icon}</span>
                      {t(tt.labelKey, lang)}
                    </span>
                    <span className="font-semibold text-sm text-[#D39A53]">{t(tt.timeKey, lang)}</span>
                  </div>
                ))}
              </div>
              <div className="h-32 rounded-lg overflow-hidden mt-4">
                <img alt={t('explore.coastline', lang)} className="w-full h-full object-cover image-lift" src={TRAVEL_TIPS_IMAGES.coast} loading="lazy" decoding="async" />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[#FFF8EF]/90 backdrop-blur-sm border border-[#E6D3BB] rounded-xl overflow-hidden">
              <div className="relative h-44 overflow-hidden">
                <img alt={t('tips.bestOfPQ', lang)} className="w-full h-full object-cover image-lift" src={TRAVEL_TIPS_IMAGES.sunset} loading="lazy" decoding="async" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[#2A160A]" aria-hidden="true">sunny</span>
                  <h3 className="font-sans text-lg font-bold text-[#1d1b19]">{t('tips.bestOfPQ', lang)}</h3>
                </div>
                <p className="text-sm leading-6 text-[#57423b]">{t('tips.bestOfPQDesc', lang)}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[#FFF8EF]/90 backdrop-blur-sm border border-[#E6D3BB] rounded-xl overflow-hidden">
              <div className="relative h-44 overflow-hidden">
                <img alt={t('tips.friendlyService', lang)} className="w-full h-full object-cover image-lift" src={TRAVEL_TIPS_IMAGES.service} loading="lazy" decoding="async" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[#2A160A]" aria-hidden="true">favorite</span>
                  <h3 className="font-sans text-lg font-bold text-[#1d1b19]">{t('tips.friendlyService', lang)}</h3>
                </div>
                <p className="text-sm leading-6 text-[#57423b]">{t('tips.friendlyServiceDesc', lang)}</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.section className="space-y-4" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#120B06] rounded-lg flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#D39A53] text-xl" aria-hidden="true">help</span>
              </div>
              <h2 className="font-serif text-3xl font-semibold text-[#1d1b19]">{t('tips.faq', lang)}</h2>
            </div>
            <motion.div className="space-y-2" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
              {FAQS.map((faq) => (
                <motion.div key={faq.qKey} variants={fadeUp}>
                  <FAQItem item={faq} lang={lang} />
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-[#F3D7A8] border border-[#D39A53]/20 rounded-xl p-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#D39A53]" aria-hidden="true">star_rate</span>
              <h3 className="font-sans text-lg font-bold text-[#1d1b19]">{t('tips.bookTours', lang)}</h3>
            </div>
              <p className="text-sm font-semibold text-[#57423b]">{t('tips.bookToursA', lang)}</p>
              <div className="grid grid-cols-2 gap-2 text-sm text-[#57423b]">
              {TOURS_LIST.map((tour) => (
                <div key={tour[0]} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D39A53] rounded-full shrink-0" />
                  {t(tour[0], lang)}
                </div>
              ))}
            </div>
            <p className="text-xs italic text-[#8B6B52] pt-2 border-t border-[#D39A53]/20">{t('tips.bookToursNote', lang)}</p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
            <div className="bg-[#FFF8EF]/90 backdrop-blur-sm border border-[#E6D3BB] rounded-xl p-4 space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-[#2A160A] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#D39A53]" aria-hidden="true">work</span>
                  {t('tips.luggage', lang)}
                </h4>
                <p className="text-sm leading-6 text-[#57423b]">{t('tips.luggageA', lang)}</p>
              </div>
              <div className="pt-4 border-t border-[#E6D3BB] space-y-3">
                <h4 className="font-semibold text-sm text-[#2A160A] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#D39A53]" aria-hidden="true">local_taxi</span>
                  {t('tips.bookTaxi', lang)}
                </h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <a href={RECEPTION_TEL} className="inline-flex items-center gap-2 rounded-full bg-[#922f05] px-4 py-2 text-xs font-bold text-white no-underline active:scale-[0.98]">
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">call</span>
                    {t('rules.contactReception', lang)}
                  </a>
                  <span className="text-xs text-[#8b7169]">{t('tips.needMoreHelp', lang)}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-[#120B06] text-white rounded-2xl p-8 text-center space-y-4 relative overflow-hidden">
              <span className="material-symbols-outlined text-[#D39A53] text-4xl" aria-hidden="true">favorite</span>
            <h2 className="text-2xl font-bold">{t('tips.thankYou', lang)}</h2>
            <p className="text-sm text-[#F3E2CA]">{t('tips.thankYouMsg', lang)}</p>
            <p className="text-xs text-[#D9BE9B]">{t('tips.thankYouAssist', lang)}</p>
            <div className="pt-4">
              <span className="text-[#D39A53] font-semibold tracking-wide">{t('tips.happyHoliday', lang)}</span>
            </div>
          </motion.section>
        </main>
      </div>

      <div className="hidden md:block">
        <main className="max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-14 space-y-12">
          <motion.section className="text-center space-y-4" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h1 className="font-serif text-5xl font-semibold tracking-tight text-[#1d1b19]">{t('tips.titleDesktop', lang)}</h1>
            <div className="w-24 h-0.5 bg-[#D39A53] mx-auto rounded-full" />
          </motion.section>

          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-6" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            <motion.div variants={fadeUp} className="bg-[#FFF8EF]/90 backdrop-blur-sm border border-[#E6D3BB] rounded-xl p-6 border-l-4 border-l-[#D39A53] flex gap-6">
              <div className="w-12 h-12 bg-[#120B06] rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#D39A53]" aria-hidden="true">lightbulb</span>
              </div>
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#1d1b19]">{t('tips.tip', lang)}</h2>
                <p className="text-[#57423b] text-sm leading-6">{t('tips.tipDesc', lang)}</p>
                <div className="bg-[#F3E2CA] p-4 rounded-lg flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#2A160A]" aria-hidden="true">support_agent</span>
                  <p className="text-sm leading-6 text-[#57423b]">{t('tips.contactReception', lang)}</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-[#FFF8EF]/90 backdrop-blur-sm border border-[#E6D3BB] rounded-xl p-6 border-l-4 border-l-[#2A160A] flex gap-6">
              <div className="w-12 h-12 bg-[#120B06] rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#D39A53]" aria-hidden="true">favorite</span>
              </div>
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#1d1b19]">{t('tips.whyStay', lang)}</h2>
                <p className="text-[#57423b] text-sm leading-6">{t('tips.whyStayDesc', lang)}</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-12 gap-6" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            <motion.div variants={fadeUp} className="md:col-span-7 bg-[#FFF8EF]/90 backdrop-blur-sm border border-[#E6D3BB] rounded-xl overflow-hidden flex flex-col md:flex-row">
              <div className="p-6 flex-1 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#2A160A]" aria-hidden="true">nature_people</span>
                  <h3 className="font-sans text-xl font-bold text-[#1d1b19]">{t('tips.peaceful', lang)}</h3>
                </div>
                <p className="text-[#57423b] text-sm leading-6">{t('tips.peacefulDesc', lang)}</p>
              </div>
              <div className="w-full md:w-1/2 overflow-hidden h-48 md:h-auto">
                <img alt={t('tips.peaceful', lang)} className="w-full h-full object-cover image-lift" src={TRAVEL_TIPS_IMAGES.garden} loading="lazy" decoding="async" />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-5 md:row-span-2 bg-[#FFF8EF]/90 backdrop-blur-sm border border-[#E6D3BB] rounded-xl p-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#2A160A]" aria-hidden="true">location_on</span>
                <h3 className="font-sans text-xl font-bold text-[#1d1b19]">{t('tips.convenient', lang)}</h3>
              </div>
              <p className="text-sm text-[#8B6B52] italic">{t('tips.convenientDescDesktop', lang)}</p>
              <div>
                <h4 className="font-semibold text-xs text-[#2A160A] uppercase tracking-wider mb-3">{t('tips.travelTimes', lang)}</h4>
                <div className="space-y-3">
                  {TRAVEL_TIMES.map((tt) => (
                    <div key={tt.labelKey} className="flex items-center justify-between border-b border-[#E6D3BB] pb-2">
                      <span className="flex items-center gap-2 text-sm text-[#57423b]">
                        <span className="material-symbols-outlined text-[#D39A53]">{tt.icon}</span>
                        {t(tt.labelKey, lang)}
                      </span>
                    <span className="text-sm font-semibold text-[#8a501a]">{t(tt.timeKey, lang)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-40 rounded-lg overflow-hidden">
                <img alt={t('explore.coastline', lang)} className="w-full h-full object-cover image-lift" src={TRAVEL_TIPS_IMAGES.coast} loading="lazy" decoding="async" />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-4 bg-[#FFF8EF]/90 backdrop-blur-sm border border-[#E6D3BB] rounded-xl overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img alt={t('tips.bestOfPQ', lang)} className="w-full h-full object-cover image-lift" src={TRAVEL_TIPS_IMAGES.sunset} loading="lazy" decoding="async" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#2A160A]" aria-hidden="true">sunny</span>
                  <h3 className="font-sans text-xl font-bold text-[#1d1b19]">{t('tips.bestOfPQ', lang)}</h3>
                </div>
                <p className="text-[#57423b] text-sm leading-6">{t('tips.bestOfPQDesc', lang)}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-3 bg-[#FFF8EF]/90 backdrop-blur-sm border border-[#E6D3BB] rounded-xl overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img alt={t('tips.friendlyService', lang)} className="w-full h-full object-cover image-lift" src={TRAVEL_TIPS_IMAGES.service} loading="lazy" decoding="async" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#2A160A]" aria-hidden="true">favorite</span>
                  <h3 className="font-sans text-xl font-bold text-[#1d1b19]">{t('tips.friendlyService', lang)}</h3>
                </div>
                <p className="text-[#57423b] text-sm leading-6">{t('tips.friendlyServiceDesc', lang)}</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.section className="space-y-8" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#120B06] rounded-lg flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#D39A53] text-xl" aria-hidden="true">help</span>
              </div>
              <h2 className="font-serif text-3xl font-semibold text-[#1d1b19]">{t('tips.faqDesktop', lang)}</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-7 space-y-2">
                {FAQS.map((faq) => (
                  <FAQItem key={faq.qKey} item={faq} lang={lang} />
                ))}
              </div>
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#F3D7A8] border border-[#D39A53]/20 rounded-xl p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#D39A53]" aria-hidden="true">star_rate</span>
                    <h3 className="font-sans text-xl font-bold text-[#1d1b19]">{t('tips.bookTours', lang)}</h3>
                  </div>
                  <p className="font-semibold text-sm text-[#5F4635]">{t('tips.bookToursA', lang)}</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-[#5F4635]">
                    {TOURS_LIST.map((tour) => (
                      <div key={tour[0]} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#D39A53] rounded-full shrink-0" />
                        {t(tour[0], lang)}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs italic text-[#8B6B52] pt-2 border-t border-[#D39A53]/20">{t('tips.bookToursNote', lang)}</p>
                </div>
                <div className="space-y-3">
                  <div className="bg-[#FFF8EF]/90 backdrop-blur-sm border border-[#E6D3BB] rounded-xl p-4 space-y-2">
                    <h4 className="font-semibold text-sm text-[#2A160A] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#D39A53]" aria-hidden="true">work</span>
                      {t('tips.luggage', lang)}
                    </h4>
                    <p className="text-sm text-[#5F4635]">{t('tips.luggageA', lang)}</p>
                  </div>
                  <div className="bg-[#FFF8EF]/90 backdrop-blur-sm border border-[#E6D3BB] rounded-xl p-4">
                    <h4 className="font-semibold text-sm text-[#2A160A] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#D39A53]" aria-hidden="true">local_taxi</span>
                      {t('tips.bookTaxi', lang)}
                    </h4>
                    <a href={RECEPTION_TEL} className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#922f05] px-4 py-2 text-xs font-bold text-white no-underline hover:opacity-90 transition-all">
                      <span className="material-symbols-outlined text-sm" aria-hidden="true">call</span>
                      {t('rules.contactReception', lang)}
                    </a>
                  </div>
                  <a href={RECEPTION_TEL} className="block bg-[#FFF8EF]/90 backdrop-blur-sm border border-[#E6D3BB] rounded-xl p-4 flex items-center justify-between hover:shadow-md transition-all">
                    <h4 className="font-semibold text-sm text-[#2A160A] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#D39A53]" aria-hidden="true">support</span>
                      {t('tips.needMoreHelp', lang)}
                    </h4>
                    <span className="material-symbols-outlined text-[#D39A53]">call</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-[#120B06] text-white rounded-2xl p-12 text-center space-y-6 relative overflow-hidden">
            <span className="material-symbols-outlined text-[#D39A53] text-5xl" aria-hidden="true">favorite</span>
            <h2 className="text-3xl font-bold tracking-tight">{t('tips.thankYou', lang)}</h2>
            <p className="text-lg text-[#F3E2CA] max-w-2xl mx-auto">{t('tips.thankYouMsg', lang)}</p>
            <p className="text-sm text-[#D9BE9B] max-w-xl mx-auto">{t('tips.thankYouAssist', lang)}</p>
            <div className="pt-4">
              <span className="text-[#D39A53] font-semibold text-xl tracking-wide">{t('tips.happyHoliday', lang)}</span>
            </div>
          </motion.section>
        </main>
      </div>
    </PageShell>
  );
}

export default TravelTips;
