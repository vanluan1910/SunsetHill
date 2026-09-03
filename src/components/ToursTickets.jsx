import { t } from '../i18n';
import PageShell from './shared/PageShell';
import PageHero from './shared/PageHero';
import ContactCTA from './shared/ContactCTA';

const TOURS = [
  { nameKey: 'tours.cableCar', subKey: 'tours.cableCarSub', subIcon: 'location_on', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfg50q7dXuhh1K5NS2bWwOCxJE8-0RDHWvrxcwS_fB1c-1gheKtzB-eH7H6vfQBevW49MMwetZYeJ7rXt9AEZiaeHMm6CZjXwYhPmPJhmiDP-UmWMFdoUKcKKt4jwQ2wlQoQS10P54wPrHIk8RfLTrb3lsMnygyTy31K_vpa9cZDtOdtAAyQt9L2Ztj39pQb6rZ9Fsv5STQfNWLUL8nGTwr2TbOZnSF5wLu6wp7bcvuvhXwO0L9lSz' },
  { nameKey: 'tours.vinwonders', subKey: 'tours.vinwondersSub', subIcon: 'theater_comedy', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRBqlNDbQSepKhCP0NhMOLjcTU1g-NC09UWFHNRWYvgXGkNu04mTdy_f7_hGvjIfo0xMSJn1x5UftjeP7gqkuZBW-dXcRm-1uvG1l2i76FnmPGbR5M9WLA5cAWqDCUIF_0FRx5qqauFQ1_7-1EU2AJwdDv-5HrPIlFZZPg0XAXpJ9YJk2tvN1MC6hRVWNiIcM7LrUOPnMr5mbWSzH3WJYCfgbIuvDtWZV-Ze8KCD8IW3AQG2n3dFnt' },
  { nameKey: 'tours.safari', subKey: 'tours.safariSub', subIcon: 'pets', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpa2fkijcg3Pd81kDgBbobLeSr3BiyKKAAVZ63t1Eiif91GIkInJLcKIu9wPUWaQXdgbMZtsB9oEHU6ZCUdFoPaS5IxfSfui0DmgU4-XDt9_8pwdbjIeHAc_mH6fBxtYCG5q4RJbnpRuk7Px2FL8oArZIWrZG37YG9a_SzNf7W_UyaJs5sKniYUJvwGz1IWrV9KLy55WF6BhAoubXXEZTFEQAmzLFmgFegHyfnkRyjNE5iz_2rtx_Y' },
  { nameKey: 'tours.kissShow', subKey: 'tours.kissShowSub', subIcon: 'auto_awesome', img: 'https://visitphuquoc.com.vn/VisitPhuQuoc/Banner/Home/91/image-thumb__91__720_jpg/Kiss%20of%20the%20Sea%20show.078db5d3.jpg' },
  { nameKey: 'tours.symphonyShow', subKey: 'tours.symphonyShowSub', subIcon: 'water', img: 'https://mediaen.vietnamplus.vn/images/a3e83da2a8493973440145e94a426b30d83c8c49346187a7388749456aca907fa4b830121790b8bb533e020b7d4cb563dcd06c5a19fd4fd827a9fe1161574d9d/ban-sao-cua-symphony-of-the-sea.jpg' },
  { nameKey: 'tours.islandHopping', subKey: 'tours.islandHoppingSub', subIcon: 'sailing', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfg50q7dXuhh1K5NS2bWwOCxJE8-0RDHWvrxcwS_fB1c-1gheKtzB-eH7H6vfQBevW49MMwetZYeJ7rXt9AEZiaeHMm6CZjXwYhPmPJhmiDP-UmWMFdoUKcKKt4jwQ2wlQoQS10P54wPrHIk8RfLTrb3lsMnygyTy31K_vpa9cZDtOdtAAyQt9L2Ztj39pQb6rZ9Fsv5STQfNWLUL8nGTwr2TbOZnSF5wLu6wp7bcvuvhXwO0L9lSz' },
  { nameKey: 'tours.snorkeling', subKey: 'tours.snorkelingSub', subIcon: 'scuba_diving', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvcu_cIKw9pVGb9D9jDRXZLctoBZSiCVS8kqRQEloAqd14--tivcGSfBRC_CtHa90DFxy1RHpGl20vNxibAg5MHckgEabb0MpMNjRQrMJ1iUfupt9R-TJjnI-VCyJy9ZDFuIoP5E1Oi7hOBZQdCoAd2Sm2WTnELqIeiQvtwoRbuVP6-UgAG8g1-0IZHzjdYq-8eEXGGHRYHpFG0nHLaCho-v6FJf-KsYVaaQkBKahbb53qlXEZnwAK' },
  { nameKey: 'tours.scubaDiving', subKey: 'tours.scubaDivingSub', subIcon: 'auto_timer', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdaU-d6JTTUpXxeHfxBLttwoxza3Zp3rbpPZgBLKIZSOu-rCh0Kc04nzLbE2eXPr5K4QpSvKdw3SPV2O0YVV-y-T0QI_feujhZT2TRo1M7llickeEOU0VCWh9WY_iQppqiScwuLVf9hEgy1xL6J6C-MiRu9D1J66iZzW4CCm3SgZnlj0JiwFlgPCq98HTUOEH6vN2vO-UrRJDP_JZUMiJp58Ey9AF6k_eEXzA_69PvS_c7GtVkHXoL' },
  { nameKey: 'tours.fishing', subKey: 'tours.fishingSub', subIcon: 'phishing', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIpuA5QXW6C65_5Y0p3x4oIBtA8860AZMkB3XaDQZ75qO3EiImhsYbYdNG1QiQpFeG56q_t8pffTStMyGCRtJ5xeznatjt3dp2pfqByZWqGi-ZPrBxsoWWamoty4gPa586dAf8jSWhbLDbm02vSuQrSGGem9Ii2vhv2qW92BcL2btieSPyqSiiQ-oS6bgNfQ6mvbsPe3re_WRQMwTkIoB4Z47IklEzUrBJ8HtbeFwsGb__a9Asu3YP' },
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
