import { t } from '../i18n';
import MapLink from './shared/MapLink';
import PageShell from './shared/PageShell';
import PageHero from './shared/PageHero';
import SectionHeading from './shared/SectionHeading';
import ContactCTA from './shared/ContactCTA';

const SIGNATURE = [
  {
    nameKey: 'attr.vinwonders', descKey: 'attr.vinwondersDesc',
    timeKey: 'attr.travel35', hoursKey: 'attr.hoursVinwonders',
    maps: 'https://maps.app.goo.gl/TEUqujT55kNfuPBU7',
    img: 'https://app-api.glodival.vn/storage/4/images/u07fZg6zSRuCpsB4exIekVZinrk1JqJAIak4tWj5.png',
  },
  {
    nameKey: 'attr.safari', descKey: 'attr.safariDesc',
    timeKey: 'attr.travel40', hoursKey: 'attr.hoursSafari',
    maps: 'https://maps.app.goo.gl/yWXRLLzgDY3ZWrS5A',
    img: 'https://cassiacottage.com/wp-content/uploads/2025/10/Vinpearl-Phu-Quoc-Cassia-Cottage-Resort-and-Spa-4.jpg',
  },
  {
    nameKey: 'attr.kissBridge', descKey: 'attr.kissBridgeDesc',
    timeKey: 'attr.travel35', hoursKey: 'attr.kissBridgeSub',
    maps: 'https://maps.app.goo.gl/va5sNfcey29BddTS8',
    img: 'https://eholiday.vn/wp-content/uploads/2023/02/show-kiss-the-stars-phu-quoc.jpg',
  },
];

const SIGHTSEEING = [
  {
    nameKey: 'attr.pagoda', descKey: 'attr.pagodaDesc', icon: 'temple_buddhist',
    distanceKey: 'attr.travel30', hoursKey: 'attr.hoursPagoda',
    maps: 'https://maps.app.goo.gl/2MMgpsxQA92s4RQAA',
    img: 'https://static.wixstatic.com/media/9d8ed5_9686a257279d4a72aeaf9cefe7d9bc2b~mv2.jpg/v1/fill/w_900,h_548,al_c,q_85,enc_avif,quality_auto/9d8ed5_9686a257279d4a72aeaf9cefe7d9bc2b~mv2.jpg',
  },
  {
    nameKey: 'attr.prison', descKey: 'attr.prisonDesc', icon: 'history_edu',
    distanceKey: 'attr.travel30', hoursKey: 'attr.hoursPrison',
    maps: 'https://maps.app.goo.gl/D4r9LKhuYXdgEzzEA',
    img: '/phu-quoc-prison.jpg',
  },
  {
    nameKey: 'attr.pepperFarm', descKey: 'attr.pepperFarmDesc', icon: 'spa',
    distanceKey: 'attr.travel10', hoursKey: 'attr.hoursPepper',
    maps: 'https://maps.app.goo.gl/DneokAsKm5STDES66',
    img: 'https://hatienvegas.com/wp-content/uploads/2025/02/Tim-hieu-ve-Vuon-tieu-Kampot-Du-lich-Kampot-Hatienvegas-1-1200x800.jpg',
  },
  {
    nameKey: 'attr.pearlFarm', descKey: 'attr.pearlFarmDesc', icon: 'diamond',
    distanceKey: 'attr.travel10', hoursKey: 'attr.hoursCraft',
    maps: 'https://maps.app.goo.gl/ULXWtshbNX8SsuG19',
    img: '/pearl-farm.jpg',
  },
  {
    nameKey: 'attr.fishSauce', descKey: 'attr.fishSauceDesc', icon: 'kitchen',
    distanceKey: 'attr.travel10', hoursKey: 'attr.hoursCraft',
    maps: 'https://maps.app.goo.gl/ZbYkdG31qpEm1n4x5',
    img: 'https://viettourist.com/resources/images/Blog-BienDao/mamthung-3.jpg',
  },
  {
    nameKey: 'attr.sunsetTown', descKey: 'attr.sunsetTownDesc', icon: 'wb_twilight',
    distanceKey: 'attr.travel35', hoursKey: 'explore.open24h',
    maps: 'https://maps.app.goo.gl/nmC99ZSPtADYbHzr8',
    img: 'https://vpq.vn/bai-viet/Sunset-Town.jpg',
  },
];

const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUp-VXkhPUwe6yXcD5z_C1M5jn344utJAHP_Y7-gHRtYJGWw4XTv2KCwvVH7Uxd2KEv89C5S8Gh9be-PkzzFiBQgnnauDGlMEFTZhrxr2LNHg3rxTgW8hKRaBDu-J6ZobLREE4c0yg6fBeeZmsPQtcVj9zHDwWnrz993vvwPD_2vh9TQxhSM6FDcXT-ogPB7O15td1i-cksZVAPwFNGD2BrdThOvZMC1qIXSCzVuOIi5DRAw2Mr8E';

const CULTURE = [SIGHTSEEING[0], SIGHTSEEING[1], SIGHTSEEING[5]];
const CRAFTS = [SIGHTSEEING[2], SIGHTSEEING[3], SIGHTSEEING[4]];

function Meta({ item, lang, light = false }) {
  return (
    <div className={`flex flex-wrap gap-x-4 gap-y-2 text-sm ${light ? 'text-white/85' : 'text-[#57423b]'}`}>
      <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base" aria-hidden="true">moped</span>{item.timeKey ? t(item.timeKey, lang) : t(item.distanceKey, lang)}</span>
      <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base" aria-hidden="true">schedule</span>{t(item.hoursKey, lang)}</span>
    </div>
  );
}

function SignatureCard({ item, lang, className = '', feature = false }) {
  return (
    <article className={`group relative min-h-[390px] overflow-hidden rounded-[30px] shadow-lg shadow-[#120B06]/10 ${className}`}>
      <img alt={t(item.nameKey, lang)} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={item.img} loading="lazy" decoding="async" />
      <div className={`absolute inset-0 ${feature ? 'bg-gradient-to-r' : 'bg-gradient-to-t'} from-[#120B06]/85 via-[#120B06]/25 to-transparent`} />
      <div className={`absolute bottom-0 left-0 p-6 text-white md:p-8 ${feature ? 'max-w-2xl' : ''}`}>
        <Meta item={item} lang={lang} light />
        <h3 className="mt-4 font-sans text-2xl font-bold leading-tight md:text-3xl">{t(item.nameKey, lang)}</h3>
        <p className="mt-3 max-w-xl text-sm leading-6 text-white/82 md:text-base">{t(item.descKey, lang)}</p>
        <div className="mt-5"><MapLink href={item.maps} lang={lang} className="inline-flex rounded-full bg-[#922f05] px-5 py-2.5 text-sm font-bold text-white no-underline" /></div>
      </div>
    </article>
  );
}

function CultureCard({ item, lang }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-[#dfc0b7]/40 bg-[#FDF8F4]/88 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden">
        <img alt={t(item.nameKey, lang)} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={item.img} loading="lazy" decoding="async" />
        <span className="absolute right-4 top-4 rounded-full bg-[#922f05]/90 px-3 py-1 text-xs font-bold text-white">{t(item.distanceKey, lang)}</span>
      </div>
      <div className="p-5 md:p-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#922f05]"><span className="material-symbols-outlined text-base" aria-hidden="true">{item.icon}</span>{t('attr.sightseeing', lang)}</div>
        <h3 className="mt-3 font-sans text-xl font-bold text-[#1d1b19]">{t(item.nameKey, lang)}</h3>
        <p className="mt-2 text-sm leading-6 text-[#57423b]">{t(item.descKey, lang)}</p>
        <div className="mt-5 border-t border-[#dfc0b7]/45 pt-4"><Meta item={item} lang={lang} /><div className="mt-3"><MapLink href={item.maps} lang={lang} className="text-sm font-bold text-[#922f05]" /></div></div>
      </div>
    </article>
  );
}

function CraftCard({ item, lang }) {
  return (
    <article className="flex items-center gap-4 rounded-[24px] border border-[#dfc0b7]/40 bg-[#FDF8F4]/72 p-4 backdrop-blur-xl transition-colors hover:border-[#922f05]/30">
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl"><img alt={t(item.nameKey, lang)} className="h-full w-full object-cover" src={item.img} loading="lazy" decoding="async" /></div>
      <div className="min-w-0"><h3 className="font-sans text-lg font-bold text-[#8a501a]">{t(item.nameKey, lang)}</h3><p className="mt-1 text-xs leading-5 text-[#57423b]">{t(item.descKey, lang)}</p><div className="mt-2"><MapLink href={item.maps} lang={lang} className="text-xs font-bold uppercase tracking-wide text-[#922f05]" /></div></div>
    </article>
  );
}

function ChurchSection({ lang }) {
  return (
    <div className="mt-8 overflow-hidden rounded-[28px] border border-[#dfc0b7]/50 bg-[#FDF8F4] shadow-md">
      <div className="flex flex-col lg:flex-row">
        {/* Church Image Banner */}
        <div className="relative aspect-[16/9] lg:aspect-auto lg:w-5/12 overflow-hidden shrink-0 min-h-[220px]">
          <img
            alt={t('attr.churchName', lang)}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            src="https://i.ytimg.com/vi/AC9toodzkVY/maxresdefault.jpg"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
            <span className="material-symbols-outlined text-sm text-[#e8c39e]" aria-hidden="true">church</span>
            <span>{t('attr.churchName', lang)}</span>
          </div>
        </div>

        {/* Schedule Info */}
        <div className="flex flex-1 flex-col justify-between p-5 md:p-6">
          <div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-[#dfc0b7]/50 pb-3 mb-4">
              <h3 className="font-sans text-lg md:text-xl font-bold text-[#1d1b19]">
                {t('attr.churchTitle', lang)}
              </h3>
              <a
                className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-full bg-[#922f05] px-4 py-1.5 text-xs font-bold text-white no-underline transition-all hover:bg-[#722403]"
                href="https://maps.app.goo.gl/ctf1g9iH5J3baDzK7"
                rel="noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-sm" aria-hidden="true">location_on</span>
                {t('common.viewMaps', lang)}
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-[18px] bg-white/90 p-4 border border-[#dfc0b7]/40">
                <div className="mb-2 flex items-center gap-2 text-sm font-bold text-[#1d1b19]">
                  <span className="material-symbols-outlined text-base text-[#922f05]" aria-hidden="true">calendar_today</span>
                  {t('attr.monSat', lang)}
                </div>
                <ul className="space-y-1.5 text-xs text-[#57423b]">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#922f05]" />
                    {t('attr.morningMass', lang)}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#922f05]" />
                    {t('attr.eveningMass', lang)}
                  </li>
                </ul>
              </div>

              <div className="rounded-[18px] bg-white/90 p-4 border border-[#dfc0b7]/40">
                <div className="mb-2 flex items-center gap-2 text-sm font-bold text-[#1d1b19]">
                  <span className="material-symbols-outlined text-base text-[#922f05]" aria-hidden="true">event</span>
                  {t('attr.sunday', lang)}
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#57423b]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#922f05]" />
                    {t('attr.mass1', lang)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#922f05]" />
                    {t('attr.mass2', lang)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#922f05]" />
                    {t('attr.mass3', lang)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#922f05]" />
                    {t('attr.mass4', lang)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-xs italic text-[#922f05]/90">
            "{t('attr.churchBlessing', lang)}"
          </p>
        </div>
      </div>
    </div>
  );
}

function Attractions({ lang = 'en' }) {
  return (
    <PageShell>
      <div className="md:hidden">
        <main className="mx-auto max-w-lg px-4 py-5.5">
          <PageHero image={HERO_IMG} imageAlt={t('attr.title', lang)} title={t('attr.title', lang)} description={t('attr.desc', lang)} variant="center" />

          <section className="mb-9"><SectionHeading title={t('attr.signature', lang)} className="mb-4" /><div className="space-y-4">{SIGNATURE.map((item) => <SignatureCard key={item.nameKey} item={item} lang={lang} />)}</div></section>
          <section><SectionHeading kicker={t('common.islandSoul', lang)} title={t('attr.sightseeing', lang)} className="mb-4" /><div className="space-y-4">{CULTURE.map((item) => <CultureCard key={item.nameKey} item={item} lang={lang} />)}{CRAFTS.map((item) => <CraftCard key={item.nameKey} item={item} lang={lang} />)}</div></section>
          <ChurchSection lang={lang} />
          <ContactCTA title={t('services.needAssistance', lang)} description={t('tips.contactReception', lang)} actionLabel={t('rules.contactReception', lang)} icon="moped" variant="dark" className="mt-6" />
        </main>
      </div>

      <div className="hidden md:block">
        <main>
          <PageHero image={HERO_IMG} imageAlt={t('attr.title', lang)} title={t('attr.title', lang)} description={t('attr.desc', lang)} variant="center" />

          <section className="mx-auto max-w-7xl px-10 py-16"><SectionHeading title={t('attr.signature', lang)} className="mb-10" /><div className="grid grid-cols-12 gap-6"><SignatureCard item={SIGNATURE[0]} lang={lang} className="col-span-8" /><SignatureCard item={SIGNATURE[1]} lang={lang} className="col-span-4" /><SignatureCard item={SIGNATURE[2]} lang={lang} className="col-span-12 min-h-[400px]" feature /></div></section>

          <section className="bg-[#f8f3ef] px-10 py-16"><div className="mx-auto max-w-7xl"><SectionHeading kicker={t('common.islandSoul', lang)} title={t('attr.sightseeing', lang)} className="mb-12" /><div className="grid grid-cols-3 gap-6">{CULTURE.map((item) => <CultureCard key={item.nameKey} item={item} lang={lang} />)}</div><div className="mt-8 grid grid-cols-3 gap-6">{CRAFTS.map((item) => <CraftCard key={item.nameKey} item={item} lang={lang} />)}</div><ChurchSection lang={lang} /></div></section>

          <ContactCTA title={t('services.needAssistance', lang)} description={t('tips.contactReception', lang)} actionLabel={t('rules.contactReception', lang)} icon="moped" variant="dark" className="mx-10 mb-10" />
        </main>
      </div>
    </PageShell>
  );
}

export default Attractions;
