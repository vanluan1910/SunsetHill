import { t } from '../i18n';
import { RECEPTION_TEL, RECEPTION_WHATSAPP, RECEPTION_ZALO, DISPLAY_PHONE } from '../data/contact';
import { RESORT_SERVICES } from '../data/resortServices';
import PageShell from './shared/PageShell';

function byId(id) {
  return RESORT_SERVICES.find((service) => service.id === id);
}

function ServiceImage({ service, lang, className = 'h-48' }) {
  const objectFitClass = service.fitContain ? 'object-contain p-2 bg-[#ece7e2]' : 'object-cover';
  return (
    <div className={`${className} overflow-hidden rounded-2xl bg-[#dfc0b7]/30`}>
      <img className={`h-full w-full ${objectFitClass} transition-transform duration-500 hover:scale-105`} alt={t(service.nameKey, lang)} src={service.img} loading="lazy" decoding="async" />
    </div>
  );
}

function DetailBlock({ label, children }) {
  return (
    <div className="rounded-2xl bg-[#f8f3ef] p-4">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[#77410a]">{label}</p>
      {children}
    </div>
  );
}

function ServiceShell({ service, lang, children, className = '', dark = false }) {
  return (
    <article className={`${dark ? 'bg-[#32302e] text-[#f5f0ec]' : 'border border-[#dfc0b7]/45 bg-[#FDF8F4]/82'} flex h-full flex-col rounded-[28px] p-5 shadow-sm backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl md:p-6 ${className}`}>
      <div className="mb-4 flex items-center gap-3">
        <span className={`material-symbols-outlined flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-3xl ${dark ? 'bg-[#922f05] text-white' : 'bg-[#ffdcc3] text-[#77410a]'}`} aria-hidden="true">{service.icon}</span>
        <h2 className={`font-serif text-2xl font-semibold leading-tight ${dark ? 'text-white' : 'text-[#1d1b19]'}`}>{t(service.nameKey, lang)}</h2>
      </div>
      {children}
    </article>
  );
}

function MotorbikeCard({ service, lang, desktop = false }) {
  return (
    <ServiceShell service={service} lang={lang} className={desktop ? 'col-span-5 row-span-2' : ''}>
      <ServiceImage service={service} lang={lang} className={desktop ? 'h-56' : 'h-44'} />
      <p className="mt-4 text-base leading-7 text-[#57423b]">{t(service.descKey, lang)}</p>
      <div className="mt-4 grid gap-3">
        <DetailBlock label={t('services.rentalFee', lang)}>
          <p className="text-2xl font-bold text-[#922f05]">{t('services.motoPrice', lang)}</p>
        </DetailBlock>
        <DetailBlock label={t('services.availableModels', lang)}>
          <ul className="space-y-2 text-base font-semibold text-[#1d1b19]">
            <li>Honda Air Blade</li>
            <li>Vision</li>
          </ul>
        </DetailBlock>
      </div>
      <p className="mt-4 text-sm italic leading-6 text-[#8b7169]">{t('services.motoReserve', lang)}</p>
    </ServiceShell>
  );
}

function LaundryCard({ service, lang }) {
  return (
    <ServiceShell service={service} lang={lang}>
      <p className="text-base leading-7 text-[#57423b]">{t(service.descKey, lang)}</p>
      <div className="mt-4">
        <DetailBlock label={t('services.price', lang)}>
          <div className="space-y-2 text-base font-bold text-[#1d1b19]">
            <p>{t('services.laundryUnder2', lang)}</p>
            <p>{t('services.laundryOver2', lang)}</p>
          </div>
        </DetailBlock>
      </div>
      <p className="mt-4 text-sm italic leading-6 text-[#922f05]">{t('services.laundryNote', lang)}</p>
      <p className="mt-3 text-sm leading-6 text-[#57423b]">{t('services.laundryContact', lang)}</p>
    </ServiceShell>
  );
}

function PoolCard({ service, lang }) {
  return (
    <ServiceShell service={service} lang={lang}>
      <p className="text-base leading-7 text-[#57423b]">{t(service.descKey, lang)}</p>
      <div className="mt-4 rounded-2xl bg-[#8a501a]/10 p-4">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#77410a]">{t('common.openingHours', lang)}</p>
        <p className="mt-2 text-2xl font-bold text-[#8a501a]">{t('services.poolHours', lang)}</p>
      </div>
      <div className="mt-4 rounded-2xl border border-[#ba1a1a]/20 bg-[#ffdad6]/35 p-4">
        <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#ba1a1a]">
          <span className="material-symbols-outlined text-base" aria-hidden="true">warning</span>
          {t('common.safetyPolicy', lang)}
        </p>
        <p className="text-sm leading-6 text-[#57423b]">{t('services.poolSafety', lang)}</p>
      </div>
    </ServiceShell>
  );
}

function AirportCard({ service, lang }) {
  return (
    <ServiceShell service={service} lang={lang}>
      <p className="text-base leading-7 text-[#57423b]">{t(service.descKey, lang)}</p>
      <div className="mt-4">
        <DetailBlock label={t('services.airportFee', lang)}>
          <p className="text-2xl font-bold text-[#922f05]">{t('services.airportPrice', lang)}</p>
          <p className="mt-1 text-sm text-[#57423b]">{t('services.airportCarType', lang)}</p>
        </DetailBlock>
      </div>
      <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-[#57423b]">
        <span className="material-symbols-outlined text-base text-[#8a501a]" aria-hidden="true">payments</span>
        {t('services.airportPayment', lang)}
      </p>
      <p className="mt-3 text-sm italic leading-6 text-[#8b7169]">{t('services.airportNotify', lang)}</p>
    </ServiceShell>
  );
}

function TaxiCard({ service, lang }) {
  return (
    <ServiceShell service={service} lang={lang} dark className="md:col-span-2 md:flex-row md:items-center md:gap-8">
      <div className="flex-1">
        <p className="text-base leading-7 text-white/80">{t(service.descKey, lang)}</p>
        <p className="mt-3 text-sm leading-6 text-white/70">{t('services.taxiRecommend', lang)}</p>
      </div>
    </ServiceShell>
  );
}

function AssistanceCard({ lang, desktop = false }) {
  return (
    <section className={`${desktop ? 'rounded-[28px] bg-[#922f05]/10 p-6' : 'rounded-[28px] border border-[#dfc0b7]/45 bg-[#ffdcc3]/65 p-5'}`}>
      <div className="flex items-start gap-4">
        <span className="material-symbols-outlined flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#120B06] text-3xl text-[#D39A53]" aria-hidden="true">support_agent</span>
        <div>
          <h2 className="font-serif text-2xl font-semibold text-[#1d1b19]">{t('services.needAssistance', lang)}</h2>
          <p className="mt-2 text-sm leading-6 text-[#57423b]">{t('services.assistMsg', lang)}</p>
        </div>
      </div>
      <div className="mt-5 rounded-2xl bg-[#120B06] p-4 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/60">{t('common.receptionHotline', lang)}</p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a href={RECEPTION_TEL} className="flex items-center gap-2 text-xl font-bold text-white no-underline hover:text-[#D39A53]">
            <span className="material-symbols-outlined text-[#D39A53]" aria-hidden="true">call</span>
            {DISPLAY_PHONE}
          </a>
          <div className="flex items-center gap-2">
            <a href={RECEPTION_ZALO} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-lg bg-[#0068FF] px-3 py-1.5 text-xs font-black text-white no-underline transition-transform hover:scale-105">
              ZALO
            </a>
            <a href={RECEPTION_WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1 rounded-lg bg-[#25D366] px-3 py-1.5 text-xs font-bold text-white no-underline transition-transform hover:scale-105">
              <span className="material-symbols-outlined text-sm" aria-hidden="true">chat</span>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm italic leading-6 text-[#57423b]">{t('services.wishMsg', lang)}</p>
    </section>
  );
}

function MotorbikeRental({ lang = 'en' }) {
  const motorbike = byId('motorbike');
  const laundry = byId('laundry');
  const airport = byId('airport');
  const pool = byId('pool');
  const taxi = byId('taxi');

  return (
    <PageShell>
      <div className="md:hidden">
        <main className="mx-auto max-w-lg px-4 py-5">
          <section className="mb-5 rounded-[28px] border border-[#dfc0b7]/45 bg-[#fdf8f4]/85 p-5 shadow-sm backdrop-blur-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#922f05]">{t('common.conciergeExcellence', lang)}</p>
            <h1 className="mt-2.5 font-serif text-4xl font-bold leading-tight text-[#922f05]">{t('services.title', lang)}</h1>
          </section>

          <div className="space-y-5">
            <MotorbikeCard service={motorbike} lang={lang} />
            <LaundryCard service={laundry} lang={lang} />
            <PoolCard service={pool} lang={lang} />
            <AirportCard service={airport} lang={lang} />
            <TaxiCard service={taxi} lang={lang} />
            <AssistanceCard lang={lang} />
          </div>
        </main>
      </div>

      <div className="hidden md:block">
        <main className="mx-auto w-full max-w-7xl px-10 py-16">
          <section className="mb-14 grid grid-cols-12 items-end gap-8">
            <div className="col-span-7">
                <div className="mb-4 flex items-center gap-2">
                <span className="h-px w-12 bg-[#922f05]" />
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#922f05]">{t('common.conciergeExcellence', lang)}</span>
              </div>
              <h1 className="font-serif text-6xl font-bold leading-[1.04] text-[#922f05] lg:text-7xl">{t('services.title', lang)}</h1>
            </div>

              <div className="col-span-5 rounded-[28px] border border-white/45 bg-[#FDF8F4]/72 p-6 shadow-sm backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#922f05]/10 text-3xl text-[#922f05]" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">contact_support</span>
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-[#8a501a]">{t('services.needAssistance', lang)}</h2>
                  <p className="mt-3 text-sm leading-6 text-[#57423b]">{t('services.assistMsg', lang)}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <a href={RECEPTION_TEL} className="inline-flex items-center gap-2 text-lg font-bold text-[#922f05] no-underline hover:underline">
                      <span className="material-symbols-outlined" aria-hidden="true">call</span>
                      {DISPLAY_PHONE}
                    </a>
                    <a href={RECEPTION_ZALO} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-lg bg-[#0068FF] px-3 py-1.5 text-xs font-black text-white no-underline shadow transition-transform hover:scale-105">
                      ZALO
                    </a>
                    <a href={RECEPTION_WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1 rounded-lg bg-[#25D366] px-3 py-1.5 text-xs font-bold text-white no-underline shadow transition-transform hover:scale-105">
                      <span className="material-symbols-outlined text-sm" aria-hidden="true">chat</span>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-12 gap-6">
            <MotorbikeCard service={motorbike} lang={lang} desktop />
            <div className="col-span-4">
              <LaundryCard service={laundry} lang={lang} />
            </div>
            <div className="col-span-3">
              <PoolCard service={pool} lang={lang} />
            </div>
            <div className="col-span-4">
              <AirportCard service={airport} lang={lang} />
            </div>
            <div className="col-span-8">
              <TaxiCard service={taxi} lang={lang} />
            </div>
          </section>
        </main>
      </div>
    </PageShell>
  );
}

export default MotorbikeRental;
