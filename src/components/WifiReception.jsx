import { t } from '../i18n';
import { RECEPTION_TEL, RECEPTION_WHATSAPP } from '../data/contact';
import PageShell from './shared/PageShell';

const DISPLAY_PHONE = '0768150325';
const DISPLAY_WHATSAPP = '+84 768150325';

const SERVICES = [
  { key: 'wifi.serviceTourInfo', icon: 'info' },
  { key: 'wifi.serviceTaxi', icon: 'local_taxi' },
  { key: 'wifi.serviceAirport', icon: 'flight_takeoff' },
  { key: 'wifi.serviceMotorbike', icon: 'two_wheeler' },
  { key: 'wifi.serviceLaundry', icon: 'local_laundry_service' },
  { key: 'wifi.serviceTourBooking', icon: 'confirmation_number' },
  { key: 'wifi.serviceRequests', icon: 'support_agent' },
];

function WifiCredentials({ lang, compact = false }) {
  return (
    <div className={`rounded-[26px] bg-[#120B06] text-white shadow-xl shadow-[#120B06]/15 ${compact ? 'p-5' : 'p-6 lg:p-8'}`}>
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#D39A53]/15">
          <span className="material-symbols-outlined text-4xl text-[#D39A53]" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">wifi</span>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">{t('wifi.networkName', lang)}</p>
          <p className="mt-1 font-serif text-2xl font-semibold leading-tight text-white">SUNSET HILL RESORT</p>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-white/8 p-4">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/60">{t('wifi.passwordLabel', lang)}</p>
        <p className="mt-1 text-4xl font-bold tracking-[0.18em] text-[#D39A53]">{t('wifi.passwordValue', lang)}</p>
      </div>
    </div>
  );
}

function ContactStrip({ icon, label, value, href }) {
  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="flex items-center gap-4 rounded-2xl border border-[#D39A53]/25 bg-[#F3D7A8]/70 p-4 no-underline transition-transform active:scale-[0.98]">
      <span className="material-symbols-outlined flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#120B06] text-2xl text-[#D39A53]" aria-hidden="true">{icon}</span>
      <span className="min-w-0">
          <span className="block text-sm font-semibold text-[#8b7169]">{label}</span>
          <span className="mt-0.5 block text-xl font-bold leading-tight text-[#1d1b19]">{value}</span>
      </span>
    </a>
  );
}

function ServiceList({ lang, grid = false }) {
  return (
    <div className={grid ? 'grid grid-cols-1 gap-4 sm:grid-cols-2' : 'space-y-3'}>
      {SERVICES.map((service) => (
        <div key={service.key} className="flex items-center gap-3 rounded-2xl border border-[#E6D3BB] bg-[#FFF8EF]/80 p-3.5 shadow-sm">
          <span className="material-symbols-outlined flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F3E2CA] text-[24px] text-[#2A160A]" aria-hidden="true">{service.icon}</span>
          <span className="text-base font-semibold leading-snug text-[#1d1b19]">{t(service.key, lang)}</span>
        </div>
      ))}
    </div>
  );
}

function ReceptionPanel({ lang, desktop = false }) {
  return (
    <section className={`rounded-[28px] border border-white/50 bg-[#FFF8EF]/82 shadow-sm backdrop-blur-xl ${desktop ? 'p-7' : 'p-5'}`}>
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#120B06]">
          <span className="material-symbols-outlined text-3xl text-[#D39A53]" aria-hidden="true">support_agent</span>
        </div>
        <div>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#8a501a]">{t('wifi.reception', lang)}</h2>
          <p className="mt-2 text-base leading-7 text-[#57423b]">{t('wifi.receptionSub', lang)}</p>
        </div>
      </div>

      <div className="mt-5 grid gap-3">
        <ContactStrip icon="call" label={t('wifi.hotlineLabel', lang)} value={DISPLAY_PHONE} href={RECEPTION_TEL} />
        <ContactStrip icon="chat" label={t('common.whatsapp', lang)} value={DISPLAY_WHATSAPP} href={RECEPTION_WHATSAPP} />
      </div>

      <div className="mt-6 border-t border-[#E6D3BB] pt-5">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[#8b7169]">{t('wifi.teamAssist', lang)}</p>
        <ServiceList lang={lang} grid={desktop} />
      </div>
    </section>
  );
}

function WifiReception({ lang = 'en' }) {
  return (
    <PageShell>
      <div className="md:hidden">
        <main className="mx-auto flex max-w-lg flex-col gap-5 px-5 py-6">
          <section className="relative overflow-hidden rounded-2xl border border-[#dfc0b7]/25 bg-[#ece7e3]/80 p-5 shadow-sm backdrop-blur-xl">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#922f05]/5 blur-3xl" />
            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl text-[#922f05]" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">wifi</span>
                <h1 className="font-serif text-3xl font-bold leading-tight text-[#922f05]">{t('wifi.title', lang)}</h1>
              </div>
            <div className="space-y-3">
                <div className="border-b border-[#dfc0b7]/45 pb-3">
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-[#57423b]">{t('wifi.networkName', lang)}</p>
                  <p className="font-serif text-xl font-semibold text-[#1d1b19]">{t('wifi.ssid', lang)}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-[#57423b]">{t('wifi.passwordLabel', lang)}</p>
                  <p className="font-serif text-2xl font-bold tracking-[0.12em] text-[#1d1b19]">{t('wifi.passwordValue', lang)}</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-serif text-xl font-semibold text-[#8a501a]">{t('common.resortServices', lang)}</h2>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#922f05]">{t('common.discover', lang)}</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {SERVICES.map((service) => {
                const wide = service.key === 'wifi.serviceAirport' || service.key === 'wifi.serviceTourBooking' || service.key === 'wifi.serviceRequests';
                return (
                  <div key={service.key} className={`flex min-h-28 flex-col justify-between rounded-2xl border border-[#dfc0b7]/20 bg-[#f8f3ef]/90 p-4 shadow-sm active:scale-[0.98] ${wide ? 'col-span-2' : ''}`}>
                    <span className="material-symbols-outlined text-3xl text-[#8a501a]" aria-hidden="true">{service.icon}</span>
                    <span className="text-base font-bold leading-snug text-[#1d1b19]">{t(service.key, lang)}</span>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="rounded-3xl border border-[#806256]/20 bg-[#806256]/10 p-5">
            <h2 className="font-serif text-2xl font-semibold text-[#8a501a]">{t('wifi.reception', lang)}</h2>
            <p className="mt-2 text-sm leading-6 text-[#57423b]">{t('wifi.receptionSub', lang)}</p>

            <div className="mt-4 grid gap-3">
              <a href={RECEPTION_TEL} className="flex items-center gap-3 rounded-full bg-[#922f05] px-4 py-3.5 text-white no-underline active:scale-[0.98]">
                <span className="material-symbols-outlined text-xl" aria-hidden="true">call</span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-white/75">{t('wifi.hotlineLabel', lang)}</span>
                  <span className="block text-lg font-bold leading-tight">{DISPLAY_PHONE}</span>
                </span>
              </a>
              <a href={RECEPTION_WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-full border border-[#dfc0b7]/45 bg-[#f8f3ef] px-4 py-3.5 text-[#1d1b19] no-underline active:scale-[0.98]">
                <span className="material-symbols-outlined text-xl text-[#25D366]" aria-hidden="true">chat</span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-[#57423b]">{t('common.whatsapp', lang)}</span>
                  <span className="block text-lg font-bold leading-tight">{DISPLAY_WHATSAPP}</span>
                </span>
              </a>
            </div>

            <div className="mt-5 border-t border-[#806256]/20 pt-4">
              <p className="text-sm font-bold leading-6 text-[#8b7169]">{t('wifi.teamAssist', lang)}</p>
            </div>
          </section>
        </main>
      </div>

      <div className="hidden md:block">
        <main className="relative mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-7xl items-center px-10 py-16">
          <div className="grid w-full grid-cols-12 gap-8 lg:gap-10">
            <section className="col-span-5 flex flex-col justify-center">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-px w-12 bg-[#922f05]" />
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#922f05]">{t('common.connectedStay', lang)}</span>
              </div>
              <h1 className="font-serif text-6xl font-bold leading-[1.04] text-[#922f05] lg:text-7xl">{t('wifi.title', lang)}</h1>
              <p className="mt-4 max-w-lg text-lg leading-8 text-[#57423b]">{t('wifi.receptionSub', lang)}</p>
              <div className="mt-8">
                <WifiCredentials lang={lang} />
              </div>
            </section>

            <section className="col-span-7">
              <ReceptionPanel lang={lang} desktop />
            </section>
          </div>
        </main>
      </div>
    </PageShell>
  );
}

export default WifiReception;
