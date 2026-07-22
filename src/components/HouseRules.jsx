import { t } from '../i18n';
import { HOUSE_RULES_FOOTER_IMAGE } from '../data/pageImages';
import PageShell from './shared/PageShell';
import ContactCTA from './shared/ContactCTA';

const RULES = [
  { icon: 'badge', titleKey: 'rules.idTitle', textKey: 'rules.idText', wide: true },
  { icon: 'volume_off', titleKey: 'rules.quietTitle', textKey: 'rules.quietText', wide: true },
  { icon: 'smoke_free', titleKey: 'rules.smokeTitle', textKey: 'rules.smokeText' },
  { icon: 'block', titleKey: 'rules.restrictedTitle', textKey: 'rules.restrictedText', highlight: true, wide: true },
  { icon: 'group_add', titleKey: 'rules.visitorTitle', textKey: 'rules.visitorText' },
  { icon: 'pool', titleKey: 'rules.poolTitle', textKey: 'rules.poolText' },
  { icon: 'lock', titleKey: 'rules.valuablesTitle', textKey: 'rules.valuablesText' },
  { icon: 'key', titleKey: 'rules.checkoutTitle', textKey: 'rules.checkoutText', dark: true, wide: true },
];

function RuleIcon({ icon, variant = 'light' }) {
  const classes = variant === 'dark'
    ? 'bg-[#ffdbcd] text-[#8a501a]'
    : variant === 'highlight'
      ? 'bg-[#ffe4db] text-[#922f05]'
      : 'bg-[#ffdcc3] text-[#8a501a]';

  return (
    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${classes}`}>
      <span className="material-symbols-outlined text-[26px]" style={{ fontVariationSettings: variant === 'highlight' ? "'FILL' 1" : "'FILL' 0" }} aria-hidden="true">{icon}</span>
    </div>
  );
}

function RuleCard({ rule, lang, mobile = false }) {
  if (rule.highlight) {
    return (
      <article className={`${mobile ? '' : 'md:col-span-2'} relative overflow-hidden rounded-[28px] bg-[#b3461d] p-6 text-white shadow-lg shadow-[#922f05]/15 transition-transform duration-300 hover:-translate-y-1 md:p-8`}>
        <div className="relative z-10">
          <RuleIcon icon={rule.icon} variant="highlight" />
          <h3 className="mt-5 font-serif text-2xl font-semibold leading-tight text-white md:text-3xl">{t(rule.titleKey, lang)}</h3>
          <p className="mt-3 text-base leading-7 text-[#ffe4db]">{t(rule.textKey, lang)}</p>
        </div>
        <span className="material-symbols-outlined absolute -bottom-10 -right-8 text-[128px] text-white/10" aria-hidden="true">warning</span>
      </article>
    );
  }

  if (rule.dark) {
    return (
      <article className={`${mobile ? '' : 'md:col-span-2'} rounded-[28px] bg-[#806256] p-6 text-[#ffe3d9] shadow-lg shadow-[#654b40]/10 transition-transform duration-300 hover:-translate-y-1 md:p-8`}>
        <div className="flex items-start gap-5">
          <RuleIcon icon={rule.icon} variant="dark" />
          <div>
            <h3 className="font-serif text-2xl font-semibold leading-tight text-white md:text-3xl">{t(rule.titleKey, lang)}</h3>
            <p className="mt-2 text-base leading-7 text-white/78">{t(rule.textKey, lang)}</p>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={`${!mobile && rule.wide ? 'md:col-span-2' : ''} rounded-[28px] border border-[#dfc0b7]/45 bg-[#f8f3ef]/90 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8`}>
      <div className={rule.wide || mobile ? 'flex items-start gap-5' : 'flex min-h-full flex-col justify-between gap-6'}>
        <RuleIcon icon={rule.icon} />
        <div>
          <h3 className={`${rule.wide || mobile ? 'font-serif text-2xl md:text-3xl' : 'text-sm uppercase tracking-[0.16em]'} font-semibold leading-tight text-[#8a501a]`}>
            {t(rule.titleKey, lang)}
          </h3>
          <p className="mt-2 text-base leading-7 text-[#57423b]">{t(rule.textKey, lang)}</p>
        </div>
      </div>
    </article>
  );
}

function HouseRules({ lang = 'en' }) {
  return (
    <PageShell>
      <div className="md:hidden">
        <main className="mx-auto max-w-lg px-4 py-5">
          <section className="relative mb-6 min-h-[272px] overflow-hidden rounded-[32px] shadow-lg shadow-[#120B06]/10">
            <img alt={t('rules.hotelSuite', lang)} className="absolute inset-0 h-full w-full object-cover" src={HOUSE_RULES_FOOTER_IMAGE} loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#fdf8f4] via-[#fdf8f4]/55 to-[#120B06]/15" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#120B06] text-[#D39A53]">
                <span className="material-symbols-outlined text-3xl" aria-hidden="true">gavel</span>
              </div>
               <h1 className="font-serif text-4xl font-bold leading-tight text-[#8a501a]">{t('rules.title', lang)}</h1>
              <p className="mt-2 text-base leading-7 text-[#57423b]">{t('rules.request', lang)}</p>
            </div>
          </section>

          <section className="space-y-4">
            {RULES.map((rule) => (
              <RuleCard key={rule.titleKey} rule={rule} lang={lang} mobile />
            ))}
          </section>

          <ContactCTA title={t('rules.clarification', lang)} description={t('rules.clarificationDesc', lang)} actionLabel={t('rules.contactReception', lang)} icon="info" className="mt-5 border border-[#dfc0b7]/45 bg-[#ffdcc3]/65" />
        </main>
      </div>

      <div className="hidden md:block">
        <main>
          <section className="relative h-[460px] w-full overflow-hidden">
            <img alt={t('rules.hotelSuite', lang)} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" src={HOUSE_RULES_FOOTER_IMAGE} loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#fdf8f4] via-[#fdf8f4]/42 to-[#120B06]/15" />
            <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-10 pb-14">
               <h1 className="font-serif text-6xl font-bold leading-tight text-[#8a501a]">{t('rules.title', lang)}</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#57423b]">{t('rules.request', lang)}</p>
            </div>
          </section>

          <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-10 py-16 md:grid-cols-4">
            {RULES.map((rule) => (
              <RuleCard key={rule.titleKey} rule={rule} lang={lang} />
            ))}
          </section>

          <ContactCTA title={t('rules.clarification', lang)} description={t('rules.clarificationDesc', lang)} actionLabel={t('rules.contactReception', lang)} icon="info" className="mx-10 mb-10 bg-[#f2ede9]" />
        </main>
      </div>
    </PageShell>
  );
}

export default HouseRules;
