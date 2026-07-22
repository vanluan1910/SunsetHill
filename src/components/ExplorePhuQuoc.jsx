import { t } from '../i18n';
import MapLink from './shared/MapLink';
import PageShell from './shared/PageShell';
import PageHero from './shared/PageHero';
import SectionHeading from './shared/SectionHeading';
import ContactCTA from './shared/ContactCTA';

const BEACHES = [
  { nameKey: 'explore.ongLang', distKey: 'explore.ongLangDist', descKey: 'explore.ongLangDesc', maps: 'https://maps.google.com/?q=Ong+Lang+Beach+Phu+Quoc', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvcu_cIKw9pVGb9D9jDRXZLctoBZSiCVS8kqRQEloAqd14--tivcGSfBRC_CtHa90DFxy1RHpGl20vNxibAg5MHckgEabb0MpMNjRQrMJ1iUfupt9R-TJjnI-VCyJy9ZDFuIoP5E1Oi7hOBZQdCoAd2Sm2WTnELqIeiQvtwoRbuVP6-UgAG8g1-0IZHzjdYq-8eEXGGHRYHpFG0nHLaCho-v6FJf-KsYVaaQkBKahbb53qlXEZnwAK', imgM: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2lfVlpSsxaM2iE_R6bs4U_eGr4CCd5QGv12XgJtXYQSDIV_1RHHT8ZVZ37MHo2W_d3AOADmD9phH15RvaG8l2BEfvsUmIoxmkaR-XWTbOURtls5xy-Ki9r3RqjLpTvjMSeybdUa6JpPbJsF9RA-W-ohrTbxEuAQvGTBQRmd-ejf_R16-qexcIShKNOuvNyULcSHJcYEfP1ZLIMFFCW_lKWFiNyJwcEHPS6UnW0mq7n1lnsPsiDDhV' },
  { nameKey: 'explore.sao', distKey: 'explore.saoDist', descKey: 'explore.saoDesc', maps: 'https://maps.app.goo.gl/9iW6Lw3dM4jJmL6V6', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdaU-d6JTTUpXxeHfxBLttwoxza3Zp3rbpPZgBLKIZSOu-rCh0Kc04nzLbE2eXPr5K4QpSvKdw3SPV2O0YVV-y-T0QI_feujhZT2TRo1M7llickeEOU0VCWh9WY_iQppqiScwuLVf9hEgy1xL6J6C-MiRu9D1J66iZzW4CCm3SgZnlj0JiwFlgPCq98HTUOEH6vN2vO-UrRJDP_JZUMiJp58Ey9AF6k_eEXzA_69PvS_c7GtVkHXoL', imgM: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWIcNQnZHM9WqWc45niz5-naiT-clJ9qo0rKsgzfRtM-aOTHKjfywKHi-a7X00xIh5Xl8PAIrBW48GRAH0UqAmNnvF10pPCAMGIvNGfMkVf-agQNsSnFzzY-qv25ZO5fvY2Xx84EgbLFbogNXoif6dQrBsiNF5FXqZ24to-ZBsdRcU5PSX_KyZSMGUJn1oVPopx70BdWLepPk4OZVSJ0ufTjL_6Cia9vtAs1JvxtddNx-B_GwmOPiN' },
  { nameKey: 'explore.khem', distKey: 'explore.khemDist', descKey: 'explore.khemDesc', maps: 'https://maps.app.goo.gl/Jv6o7cYj6eG2mX7r9', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIpuA5QXW6C65_5Y0p3x4oIBtA8860AZMkB3XaDQZ75qO3EiImhsYbYdNG1QiQpFeG56q_t8pffTStMyGCRtJ5xeznatjt3dp2pfqByZWqGi-ZPrBxsoWWamoty4gPa586dAf8jSWhbLDbm02vSuQrSGGem9Ii2vhv2qW92BcL2btieSPyqSiiQ-oS6bgNfQ6mvbsPe3re_WRQMwTkIoB4Z47IklEzUrBJ8HtbeFwsGb__a9Asu3YP', imgM: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOqW8UK_qe6yaqkEzhGrJTRc7u4Fv4pB5QDz-OQTnoDtXIv8jA1-ZCbBC7hgwiLqBij6ZjLtXxwGO4yk0jUBpRs_4oM6XZ0DnsDDykA428uVkc8kK_W70ZdQaWilx2nUELqrYOlC5l2cUpgs3OqQMcrulQt7UcU3mXSMbIi_ZZsnqmybTmV5cfX8vHTdFwM6Jdiur2ePI55fcoVKLeO79-xrYt_3dOgWiFICSnW6XckZ_ck8t9Sb4d' },
];

const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfg50q7dXuhh1K5NS2bWwOCxJE8-0RDHWvrxcwS_fB1c-1gheKtzB-eH7H6vfQBevW49MMwetZYeJ7rXt9AEZiaeHMm6CZjXwYhPmPJhmiDP-UmWMFdoUKcKKt4jwQ2wlQoQS10P54wPrHIk8RfLTrb3lsMnygyTy31K_vpa9cZDtOdtAAyQt9L2Ztj39pQb6rZ9Fsv5STQfNWLUL8nGTwr2TbOZnSF5wLu6wp7bcvuvhXwO0L9lSz';

function BeachCard({ beach, lang, mobile = false }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#dfc0b7]/45 bg-[#FDF8F4]/86 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className={`${mobile ? 'h-48' : 'aspect-video'} w-full overflow-hidden bg-[#dfc0b7]/30`}>
        <img alt={t(beach.nameKey, lang)} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={mobile ? beach.imgM : beach.img} loading="lazy" decoding="async" />
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-3 flex items-start gap-3">
          <span className="material-symbols-outlined mt-1 text-2xl text-[#8a501a]" aria-hidden="true">waves</span>
          <div>
            <h3 className="font-sans text-xl font-bold leading-tight text-[#1d1b19] md:text-2xl">{t(beach.nameKey, lang)}</h3>
            <p className="mt-1 text-sm font-semibold text-[#8a501a]">{t(beach.distKey, lang)}</p>
          </div>
        </div>
        <p className="flex-1 text-base leading-7 text-[#57423b]">{t(beach.descKey, lang)}</p>
        <div className="mt-5 space-y-3 border-t border-[#dfc0b7]/45 pt-4">
          <div className="flex items-center gap-2 text-sm text-[#8a501a]">
            <span className="material-symbols-outlined text-base" aria-hidden="true">schedule</span>
            <span className="font-bold">{t('common.openingHours', lang)}</span>
            <span>{t('explore.open24h', lang)}</span>
          </div>
          <MapLink href={beach.maps} lang={lang} className="inline-flex items-center text-sm font-bold text-[#922f05] underline" />
        </div>
      </div>
    </article>
  );
}

function ExplorePhuQuoc({ lang = 'en' }) {
  return (
    <PageShell>
      <div className="md:hidden">
        <main className="mx-auto max-w-lg px-4 py-5.5">
          <PageHero image={HERO_IMG} imageAlt={t('explore.coastline', lang)} kicker={t('common.adventureAwaits', lang)} title={t('explore.title', lang)} description={t('explore.desc', lang)} />

          <section className="mt-6.5">
            <div className="space-y-4">
              {BEACHES.map((beach) => (
                <BeachCard key={beach.nameKey} beach={beach} lang={lang} mobile />
              ))}
            </div>
          </section>

          <ContactCTA title={t('services.needAssistance', lang)} description={t('tips.contactReception', lang)} actionLabel={t('rules.contactReception', lang)} icon="concierge" className="mt-6" />
        </main>
      </div>

      <div className="hidden md:block">
        <main className="mx-auto max-w-7xl px-10 py-16">
          <PageHero image={HERO_IMG} imageAlt={t('explore.beach', lang)} kicker={t('common.adventureAwaits', lang)} title={t('explore.title', lang)} description={t('explore.descDesktop', lang)} />

          <section className="py-12">
            <SectionHeading kicker={t('common.adventureAwaits', lang)} title={t('common.discoverPhuQuoc', lang)} align="center" className="mb-10" />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {BEACHES.map((beach) => (
                <BeachCard key={beach.nameKey} beach={beach} lang={lang} />
              ))}
            </div>
          </section>

          <ContactCTA title={t('services.needAssistance', lang)} description={t('tips.contactReception', lang)} actionLabel={t('rules.contactReception', lang)} icon="concierge" className="mb-10" />
        </main>
      </div>
    </PageShell>
  );
}

export default ExplorePhuQuoc;
