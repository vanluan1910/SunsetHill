import { t } from '../i18n';
import { TRAVEL_TIPS_IMAGES } from '../data/pageImages';
import { RECEPTION_TEL } from '../data/contact';
import PageShell from './shared/PageShell';

const LATE_CHECKOUT_RULES = [
  { labelKey: 'quickInfo.until3', rateKey: 'quickInfo.until3rate' },
  { labelKey: 'quickInfo.until6', rateKey: 'quickInfo.until6rate' },
  { labelKey: 'quickInfo.after6', rateKey: 'quickInfo.after6rate' },
];

function QuickInfo({ lang = 'en' }) {
  return (
    <PageShell>
      <div className="md:hidden">
        <main className="min-h-[calc(100dvh-4rem)] px-4 pb-5 pt-4">
          <section className="mx-auto flex max-w-md flex-col gap-3.5">
            <div className="rounded-2xl border border-white/45 bg-[#fdf8f4]/72 p-4 shadow-sm backdrop-blur-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#922f05]">{t('quickInfo.guestGuide', lang)}</p>
              <h1 className="mt-1 font-serif text-3xl font-bold leading-[1.05] text-[#1d1b19]">
                {t('quickInfo.title', lang)}
              </h1>
              <p className="mt-1.5 text-sm leading-5 text-[#57423b]">{t('quickInfo.subtitle', lang)}</p>
            </div>

            <section className="space-y-2">
              <h2 className="flex items-center gap-1.5 font-serif text-lg font-semibold text-[#8a501a]">
                <span className="material-symbols-outlined text-[24px] text-[#922f05]" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">calendar_today</span>
                {t('quickInfo.arrivalDeparture', lang)}
              </h2>
              <div className="space-y-2">
                <div className="flex items-center gap-3 rounded-2xl border border-[#dfc0b7]/25 bg-[#f8f3ef]/95 p-3 shadow-sm">
                  <span className="material-symbols-outlined flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#922f05]/10 text-[24px] text-[#922f05]" aria-hidden="true">login</span>
                  <div className="min-w-0">
                    <p className="text-lg font-bold leading-tight text-[#1d1b19]">{t('quickInfo.checkin', lang)}</p>
                    <p className="mt-0.5 text-base font-semibold leading-tight text-[#922f05]">{t('quickInfo.checkinTime', lang)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-[#dfc0b7]/25 bg-[#f8f3ef]/95 p-3 shadow-sm">
                  <span className="material-symbols-outlined flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#922f05]/10 text-[24px] text-[#922f05]" aria-hidden="true">logout</span>
                  <div className="min-w-0">
                    <p className="text-lg font-bold leading-tight text-[#1d1b19]">{t('quickInfo.checkout', lang)}</p>
                    <p className="mt-0.5 text-base font-semibold leading-tight text-[#922f05]">{t('quickInfo.checkoutTime', lang)}</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-2">
              <h2 className="flex items-center gap-1.5 font-serif text-lg font-semibold text-[#8a501a]">
                <span className="material-symbols-outlined text-[24px] text-[#922f05]" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">schedule</span>
                {t('quickInfo.lateCheckout', lang)}
              </h2>
              <p className="text-sm leading-normal text-[#57423b]">{t('quickInfo.lateCheckoutDesc', lang)}</p>
               <div className="overflow-hidden rounded-[20px] border border-[#dfc0b7]/30 bg-[#fdf8f4]/74 shadow-sm backdrop-blur-xl divide-y divide-[#dfc0b7]/25">
                 {LATE_CHECKOUT_RULES.map((rule, index) => (
                  <div key={rule.labelKey} className={`flex items-center justify-between gap-3 px-3.5 py-2 ${index === 2 ? 'bg-[#ffdbd0]/25' : ''}`}>
                    <span className={`text-base leading-tight text-[#1d1b19] ${index === 2 ? 'font-medium' : ''}`}>{t(rule.labelKey, lang)}</span>
                    <span className="text-right text-base font-bold leading-tight text-[#922f05]">{t(rule.rateKey, lang)}</span>
                  </div>
                ))}
              </div>
              <p className="rounded-2xl bg-[#f8f3ef]/90 px-3 py-2 text-sm italic leading-normal text-[#57423b]">
                {t('quickInfo.lateCheckoutNote', lang)}
              </p>
            </section>

            <section className="relative flex min-h-[112px] shrink-0 items-center overflow-hidden rounded-[20px] p-4 shadow-md">
              <div className="absolute inset-0 z-0">
                <img
                  alt={t('quickInfo.breakfast', lang)}
                  className="h-full w-full object-cover"
                  src={TRAVEL_TIPS_IMAGES.service}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#fdf8f4]/95 via-[#fdf8f4]/52 to-transparent" />
              </div>
              <div className="relative z-10 max-w-[78%] space-y-1.5">
                <h2 className="font-serif text-xl font-semibold leading-tight text-[#922f05]">{t('quickInfo.breakfast', lang)}</h2>
                <p className="text-sm leading-normal text-[#57423b]">{t('quickInfo.breakfastDesc', lang)}</p>
                <p className="text-xs font-bold uppercase tracking-wide text-[#57423b]">{t('quickInfo.breakfastHours', lang)}</p>
                <p className="text-base font-bold leading-tight text-[#1d1b19]">{t('quickInfo.breakfastTime', lang)}</p>
                <p className="text-sm leading-normal text-[#57423b]">{t('quickInfo.breakfastRecommend', lang)}</p>
              </div>
            </section>

            <footer className="border-t border-[#dfc0b7]/30 pt-3">
            <a
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#922f05] py-3 text-sm font-bold text-white shadow-lg shadow-[#922f05]/20 transition-transform active:scale-[0.98]"
              href={RECEPTION_TEL}
            >
              <span className="material-symbols-outlined" aria-hidden="true">headset_mic</span>
              {t('rules.contactReception', lang)}
            </a>
            <p className="mt-1.5 text-center text-xs font-medium leading-4 text-[#8b7169]">
              {t('services.help247', lang)}
            </p>
          </footer>
          </section>
        </main>
      </div>

      <div className="hidden md:block">
        <main className="relative mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-7xl items-center px-4 py-8 md:px-10 md:py-14">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
          <section className="flex flex-col justify-center pb-2 lg:col-span-5 lg:pb-10">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-px w-12 bg-[#922f05]" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#922f05]">
                {t('quickInfo.resortInfo', lang)}
              </span>
            </div>
            <h1 className="font-serif text-5xl font-bold leading-tight text-[#922f05] md:text-6xl lg:text-7xl">
              {t('quickInfo.title', lang)}
            </h1>
            <p className="mt-7 max-w-lg text-base leading-8 text-[#57423b] md:text-lg">
              {t('quickInfo.subtitle', lang)}
            </p>
            <div className="mt-9 h-px w-28 bg-[#922f05]/35" aria-hidden="true" />
          </section>

          <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-7">
            <article className="rounded-[28px] border border-white/45 bg-[#FDF8F4]/72 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#922f05]/20 md:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#922f05]/10">
                <span className="material-symbols-outlined text-[#922f05]" aria-hidden="true">schedule</span>
              </div>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-[#8a501a]">{t('quickInfo.timing', lang)}</h2>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between border-b border-[#dfc0b7]/50 pb-3">
                  <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#57423b]">{t('quickInfo.checkin', lang)}</span>
                  <span className="text-base font-semibold text-[#1d1b19]">{t('quickInfo.checkinTime', lang)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#57423b]">{t('quickInfo.checkout', lang)}</span>
                  <span className="text-base font-semibold text-[#1d1b19]">{t('quickInfo.checkoutTime', lang)}</span>
                </div>
              </div>
            </article>

            <article className="rounded-[28px] border border-white/45 bg-[#FDF8F4]/72 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#922f05]/20 md:row-span-2 md:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fdb071]/20">
                <span className="material-symbols-outlined text-[#8a501a]" aria-hidden="true">restaurant</span>
              </div>
              <div className="flex h-full flex-col">
                <h2 className="mt-4 font-serif text-3xl font-semibold text-[#8a501a]">{t('quickInfo.breakfast', lang)}</h2>
                <p className="mt-4 text-base leading-7 text-[#57423b]">{t('quickInfo.breakfastDesc', lang)}</p>
                <div className="my-5 rounded-2xl bg-[#ffdbcd]/45 p-5">
                  <span className="block font-serif text-3xl font-semibold text-[#922f05]">{t('quickInfo.breakfastTime', lang)}</span>
                </div>
                <div className="mt-auto flex items-start gap-3 border-l-2 border-[#922f05] bg-[#922f05]/5 p-4">
                  <span className="material-symbols-outlined mt-1 text-sm text-[#922f05]" aria-hidden="true">info</span>
                   <p className="text-sm font-semibold leading-6 text-[#8b7169]">{t('quickInfo.breakfastRecommend', lang)}</p>
                </div>
              </div>
            </article>

            <article className="rounded-[28px] border border-white/45 bg-[#FDF8F4]/72 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#922f05]/20 md:p-7">
               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8a501a]/10">
                 <span className="material-symbols-outlined text-[#8a501a]" aria-hidden="true">more_time</span>
              </div>
               <h2 className="mt-4 font-serif text-3xl font-semibold text-[#8a501a]">{t('quickInfo.lateCheckout', lang)}</h2>
               <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#8b7169]">{t('quickInfo.lateCheckoutDesc', lang)}</p>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                {LATE_CHECKOUT_RULES.slice(0, 2).map((rule) => (
                  <div key={rule.labelKey} className="rounded-2xl border border-[#dfc0b7]/35 bg-[#f2ede9] p-3">
                    <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#57423b]">{t(rule.labelKey, lang)}</span>
                    <span className="mt-1 block font-bold text-[#922f05]">{t(rule.rateKey, lang)}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 border-t border-[#dfc0b7]/40 pt-4 text-center text-sm font-semibold text-[#57423b]">
                {t('quickInfo.after6', lang)}: <span className="text-[#922f05]">{t('quickInfo.after6rate', lang)}</span>
              </p>
            </article>
          </section>
        </div>
      </main>
      </div>
    </PageShell>
  );
}

export default QuickInfo;
