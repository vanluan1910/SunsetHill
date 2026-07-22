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
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRBqlNDbQSepKhCP0NhMOLjcTU1g-NC09UWFHNRWYvgXGkNu04mTdy_f7_hGvjIfo0xMSJn1x5UftjeP7gqkuZBW-dXcRm-1uvG1l2i76FnmPGbR5M9WLA5cAWqDCUIF_0FRx5qqauFQ1_7-1EU2AJwdDv-5HrPIlFZZPg0XAXpJ9YJk2tvN1MC6hRVWNiIcM7LrUOPnMr5mbWSzH3WJYCfgbIuvDtWZV-Ze8KCD8IW3AQG2n3dFnt',
  },
  {
    nameKey: 'attr.safari', descKey: 'attr.safariDesc',
    timeKey: 'attr.travel40', hoursKey: 'attr.hoursSafari',
    maps: 'https://maps.app.goo.gl/yWXRLLzgDY3ZWrS5A',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpa2fkijcg3Pd81kDgBbobLeSr3BiyKKAAVZ63t1Eiif91GIkInJLcKIu9wPUWaQXdgbMZtsB9oEHU6ZCUdFoPaS5IxfSfui0DmgU4-XDt9_8pwdbjIeHAc_mH6fBxtYCG5q4RJbnpRuk7Px2FL8oArZIWrZG37YG9a_SzNf7W_UyaJs5sKniYUJvwGz1IWrV9KLy55WF6BhAoubXXEZTFEQAmzLFmgFegHyfnkRyjNE5iz_2rtx_Y',
  },
  {
    nameKey: 'attr.kissBridge', descKey: 'attr.kissBridgeDesc',
    timeKey: 'attr.travel35', hoursKey: 'attr.kissBridgeSub',
    maps: 'https://maps.app.goo.gl/va5sNfcey29BddTS8',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu4vVsCUuo17cFyCXiPJB8FcnNSl6v3lTPZZ7veQbpDjCM_oQsxDyeFxH127n2_O4VlmwMkYwD8YmbnyyrsVjJXx5kjQDAXMcEOoW4SvyEOVnMUCFingiS9YkDVO5wQ7RV9EmZcwjRcinHKHyIKwN2-QA6MnSUm58gL9loVdD3T0NACCv6MI-kdIcHHt5S6qKV-nlb5ER27dJEZFEFLy3lkwa2oanrJxC8_OBg5T48DaS3rXZeOZRJ',
  },
];

const SIGHTSEEING = [
  {
    nameKey: 'attr.pagoda', descKey: 'attr.pagodaDesc', icon: 'temple_buddhist',
    distanceKey: 'attr.travel30', hoursKey: 'attr.hoursPagoda',
    maps: 'https://maps.app.goo.gl/2MMgpsxQA92s4RQAA',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6IlxDB6rO82ANvOTj4glcQFkct5a9fA_2U9NTBxKEV3PmAyoBZZMHAdaJ26kh6NL2SFId3Tq3IDOlYICuno64NRdZrqLcZAc53SSuokDu3s0RhOs6jClWvMOuudXg4G2E9pXbohYehU1ixMEWfs0wIc5tTXuZMxu2KGGaak9lTtb2Q1bjHbc-_Kkg_bXAgmE1QdB3ch3TNXDiP1pPPv-MhQfwFxeud2ri3tAMDkNVOiYPAmibvWDt',
  },
  {
    nameKey: 'attr.prison', descKey: 'attr.prisonDesc', icon: 'history_edu',
    distanceKey: 'attr.travel30', hoursKey: 'attr.hoursPrison',
    maps: 'https://maps.app.goo.gl/D4r9LKhuYXdgEzzEA',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMGyc-MoZqLM84IflgVkyrXh_eRNu27fSWre6UymMV-9zHGkfKwpTqWn30A_iY9N4v7SwNdvKBHltf0clHGF9CBQQuTxvQSSk291BqaBtQFdG4hjusmH8q73GBzn0tRj5BYB7WAImXzdjpeC78l8i0k8hYa7Hz4W2wf7XhCo7NiDwdyqIbfIRUnHeKUpHD6TKe1VR077LPPzQHq50vUrFv5SoO9vg5hOoTZeKCs7ysHr9H_9gREom5',
  },
  {
    nameKey: 'attr.pepperFarm', descKey: 'attr.pepperFarmDesc', icon: 'spa',
    distanceKey: 'attr.travel10', hoursKey: 'attr.hoursPepper',
    maps: 'https://maps.app.goo.gl/DneokAsKm5STDES66',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAg8Olk-UYQTzkHKWRcs2dtzqwFD0RYmllJZ8r5sjEH22rMg8EAQ0FiVj3XxQ1C4dEBHK6qZozeNUZQ2CV8WsXI8a6dkQCLkUmgZgxPD_pznbXKt7SURZEGYod0qG8hiYOyeYAZPUEkaYTsFq3BHLnjKnS6MXBFSpGNs88pN_jPTAZOpHveB1p1LmVm9df-oXzAfY2rURRqcN8-uI7TaI1SwOViXXx2i7STI8gImXvP4Jd_8snGSIr',
  },
  {
    nameKey: 'attr.pearlFarm', descKey: 'attr.pearlFarmDesc', icon: 'diamond',
    distanceKey: 'attr.travel10', hoursKey: 'attr.hoursCraft',
    maps: 'https://maps.app.goo.gl/ULXWtshbNX8SsuG19',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOkMWmT8k0Nl0Nb_D90DZ-ZriXSFYrKCq1WDCE15W99luHnyXTYe5vQ-6k3TrMBTJ4yXxUsklHju6UVO7zrreylIo8JMIIrvqKkVg8-27avDBOhUSlJEg6Fcjvaj73CmlIgUNmOkXWOSZ1Rh_kGXKzPXIRnxPxUCPFA7EBgnVNJ330cR-Jh2cVlnjQ9Ki111lrooMSd_swbLG3MVa13g3Jlas_Q6wTRSrq4kbzyoQI0zTi3rXwUb9i',
  },
  {
    nameKey: 'attr.fishSauce', descKey: 'attr.fishSauceDesc', icon: 'kitchen',
    distanceKey: 'attr.travel10', hoursKey: 'attr.hoursCraft',
    maps: 'https://maps.app.goo.gl/ZbYkdG31qpEm1n4x5',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTaaKeoO0fZnHWTn-kCWLBjpFIOdzGCavLYzNDSCSTegf1hF-1IlcWLTSr-FTsPuKOuFZVZ-aEeiU2fvJK6micqjbpT19URFwLIdmIEb86NOX4XFX2A2eyIUi2RlK62AOSGC7cqlF337Y03ObihlJfdD8mDXaUq_cQ9041CT-c7kaGN4zzUpL3l9vkDs5LFxlXTXK8D_9seULrFTqCb9PUmiZPBkyKAgqcVUH3sESSGN0hjSSqGma-',
  },
  {
    nameKey: 'attr.sunsetTown', descKey: 'attr.sunsetTownDesc', icon: 'wb_twilight',
    distanceKey: 'attr.travel35', hoursKey: 'explore.open24h',
    maps: 'https://maps.app.goo.gl/nmC99ZSPtADYbHzr8',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqxZslTX-hgyUstrIDBVfyAC4xwqCZhwAF7igtJAedspbhD97m8EBSuRkBktStdvwOAXwMOKSrK8oBoL47Ygpjeo1XgMemRC2jXWZtOvYlyjjcQOyYVbELp_Z-XAYTamPR_ewbOevLgw1bGBKXkoW1240C-ILydzoZjK6ojDK18ey8GmGR9lhGuy37JwRAxOdgb4zdQh0SvJjro0xn85vr5Mdcq3wX3TfE4Hv3rYVTuhABxh3nz3vw',
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

function Attractions({ lang = 'en' }) {
  return (
    <PageShell>
      <div className="md:hidden">
        <main className="mx-auto max-w-lg px-4 py-5.5">
          <PageHero image={HERO_IMG} imageAlt={t('attr.title', lang)} title={t('attr.title', lang)} description={t('attr.desc', lang)} variant="center" />

          <section className="mb-9"><SectionHeading title={t('attr.signature', lang)} className="mb-4" /><div className="space-y-4">{SIGNATURE.map((item) => <SignatureCard key={item.nameKey} item={item} lang={lang} />)}</div></section>
          <section><SectionHeading kicker={t('common.islandSoul', lang)} title={t('attr.sightseeing', lang)} className="mb-4" /><div className="space-y-4">{CULTURE.map((item) => <CultureCard key={item.nameKey} item={item} lang={lang} />)}{CRAFTS.map((item) => <CraftCard key={item.nameKey} item={item} lang={lang} />)}</div></section>
          <ContactCTA title={t('services.needAssistance', lang)} description={t('tips.contactReception', lang)} actionLabel={t('rules.contactReception', lang)} icon="moped" variant="dark" className="mt-6" />
        </main>
      </div>

      <div className="hidden md:block">
        <main>
          <PageHero image={HERO_IMG} imageAlt={t('attr.title', lang)} title={t('attr.title', lang)} description={t('attr.desc', lang)} variant="center" />

          <section className="mx-auto max-w-7xl px-10 py-16"><SectionHeading title={t('attr.signature', lang)} className="mb-10" /><div className="grid grid-cols-12 gap-6"><SignatureCard item={SIGNATURE[0]} lang={lang} className="col-span-8" /><SignatureCard item={SIGNATURE[1]} lang={lang} className="col-span-4" /><SignatureCard item={SIGNATURE[2]} lang={lang} className="col-span-12 min-h-[400px]" feature /></div></section>

          <section className="bg-[#f8f3ef] px-10 py-16"><div className="mx-auto max-w-7xl"><SectionHeading kicker={t('common.islandSoul', lang)} title={t('attr.sightseeing', lang)} className="mb-12" /><div className="grid grid-cols-3 gap-6">{CULTURE.map((item) => <CultureCard key={item.nameKey} item={item} lang={lang} />)}</div><div className="mt-8 grid grid-cols-3 gap-6">{CRAFTS.map((item) => <CraftCard key={item.nameKey} item={item} lang={lang} />)}</div></div></section>

          <ContactCTA title={t('services.needAssistance', lang)} description={t('tips.contactReception', lang)} actionLabel={t('rules.contactReception', lang)} icon="moped" variant="dark" className="mx-10 mb-10" />
        </main>
      </div>
    </PageShell>
  );
}

export default Attractions;
