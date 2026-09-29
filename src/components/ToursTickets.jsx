import { t } from '../i18n';
import PageShell from './shared/PageShell';
import PageHero from './shared/PageHero';
import ContactCTA from './shared/ContactCTA';

const TOURS = [
  { nameKey: 'tours.cableCar', subKey: 'tours.cableCarSub', subIcon: 'location_on', img: 'https://visitourvietnam.com/wp-content/uploads/2024/01/Hon-Thom-Cable-Car.jpg' },
  { nameKey: 'tours.vinwonders', subKey: 'tours.vinwondersSub', subIcon: 'theater_comedy', img: 'https://app-api.glodival.vn/storage/4/images/u07fZg6zSRuCpsB4exIekVZinrk1JqJAIak4tWj5.png' },
  { nameKey: 'tours.safari', subKey: 'tours.safariSub', subIcon: 'pets', img: 'https://cassiacottage.com/wp-content/uploads/2025/10/Vinpearl-Phu-Quoc-Cassia-Cottage-Resort-and-Spa-4.jpg' },
  { nameKey: 'tours.kissShow', subKey: 'tours.kissShowSub', subIcon: 'auto_awesome', img: 'https://eholiday.vn/wp-content/uploads/2023/02/show-kiss-the-stars-phu-quoc.jpg' },
  { nameKey: 'tours.symphonyShow', subKey: 'tours.symphonyShowSub', subIcon: 'water', img: 'https://mediaen.vietnamplus.vn/images/a3e83da2a8493973440145e94a426b30d83c8c49346187a7388749456aca907fa4b830121790b8bb533e020b7d4cb563dcd06c5a19fd4fd827a9fe1161574d9d/ban-sao-cua-symphony-of-the-sea.jpg' },
  { nameKey: 'tours.islandHopping', subKey: 'tours.islandHoppingSub', subIcon: 'sailing', img: 'https://bcp.cdnchinhphu.vn/334894974524682240/2025/6/23/phu-quoc-17506756503251936667562.jpg' },
  { nameKey: 'tours.snorkeling', subKey: 'tours.snorkelingSub', subIcon: 'scuba_diving', img: 'https://phuquocgo.vn/wp-content/uploads/2026/03/so-sanh-seawalker-vs-snorkeling-phu-quoc.jpg' },
  { nameKey: 'tours.scubaDiving', subKey: 'tours.scubaDivingSub', subIcon: 'auto_timer', img: 'https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/asset/SunWorldHaNam/google-doc/post_id_17876/AD_4nXe-Zytj7gzVt5K9fdj5RTyK9Tl7MbKe32CWcj6_yygWPUBOc7gRHzxwe79EtPQgrHqSNcf9Tnq3sMq0oIb7fAP8Mas6l3fvCyo7oEoXE_ha_BnV49GJdi_7I1gjQ_3twa2kojX2P5m2yQBFY3vFNOQwE-EdItsgu1tuzCDJd4i0VbLcHqo.webp' },
  { nameKey: 'tours.fishing', subKey: 'tours.fishingSub', subIcon: 'phishing', img: 'https://dulichkhampha24.com/wp-content/uploads/2021/02/dich-vu-cau-ca-cau-muc-cu-lao-cham-1-2.jpg' },
];

const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuArbfAN9ehP5OP3NgKEyZD56dHEeydTCQmy61c5-fKEcnARffZE7PbzN10XUvNNTekZpF4GNTvzjYaI5IOi3p5qgsT2072ysaEGEeQuG6p3HY-CHm0XyoVSOfb2impE1ybne1T-HP1tsBfpzjTmgJo7gc5r_oLL3yAiA1DfIIjTkA7_wwhEheHswvbI_fnrrZTPLP2N0BgfAVNZQ-bDTdu6kCKFt7ojRXZCSafIcjhMI1Kiqvg5lw4';

function TourCard({ tour, lang }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#dfc0b7]/45 bg-[#FDF8F4]/88 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-video w-full overflow-hidden bg-[#dfc0b7]/30">
        <img alt={t(tour.nameKey, lang)} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={tour.img} loading="lazy" decoding="async" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-sans text-xl font-bold leading-tight text-[#1d1b19]">{t(tour.nameKey, lang)}</h3>
        <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-[#57423b]">
          <span className="material-symbols-outlined text-base text-[#922f05]" aria-hidden="true">{tour.subIcon}</span>
          <span>{t(tour.subKey, lang)}</span>
        </div>
      </div>
    </article>
  );
}

function ToursTickets({ lang = 'en' }) {
  return (
    <PageShell>
      <div className="md:hidden">
        <main className="mx-auto max-w-lg px-4 py-5.5">
          <PageHero image={HERO_IMG} imageAlt={t('tours.title', lang)} kicker={t('common.adventureAwaits', lang)} title={t('tours.title', lang)} description={t('tours.desc', lang)} />

          <section className="mt-6">
            <div className="grid grid-cols-1 gap-4">
              {TOURS.map((tour) => (
                <TourCard key={tour.nameKey} tour={tour} lang={lang} />
              ))}
            </div>
          </section>

          <ContactCTA title={t('services.needAssistance', lang)} description={t('tours.recommend', lang)} actionLabel={t('tours.speakWithConcierge', lang)} icon="concierge" className="mt-6" />
        </main>
      </div>

      <div className="hidden md:block">
        <main className="mx-auto max-w-7xl px-10 py-16">
          <PageHero image={HERO_IMG} imageAlt={t('tours.title', lang)} kicker={t('common.adventureAwaits', lang)} title={t('tours.title', lang)} description={t('tours.desc', lang)} />

          <section className="py-11">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TOURS.map((tour) => (
                <TourCard key={tour.nameKey} tour={tour} lang={lang} />
              ))}
            </div>
          </section>

          <ContactCTA title={t('services.needAssistance', lang)} description={t('tours.recommend', lang)} actionLabel={t('tours.speakWithConcierge', lang)} icon="concierge" className="mb-10" />
        </main>
      </div>
    </PageShell>
  );
}

export default ToursTickets;
