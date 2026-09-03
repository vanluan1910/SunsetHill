import { RECEPTION_TEL, RECEPTION_WHATSAPP, RECEPTION_ZALO } from '../../data/contact';

function ContactCTA({ title, description, actionLabel, icon = 'support_agent', variant = 'light', className = '' }) {
  const dark = variant === 'dark';

  return (
    <section className={`${dark ? 'bg-[#2a170e] text-white' : 'border border-[#922f05]/20 bg-[#922f05]/10 text-[#1d1b19]'} rounded-[28px] p-6 md:rounded-[32px] md:p-10 ${className}`}>
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center md:gap-10">
        <div className="flex max-w-3xl items-start gap-4">
          <span className={`material-symbols-outlined text-4xl ${dark ? 'text-[#ffdbcd]' : 'text-[#922f05]'}`} aria-hidden="true">{icon}</span>
          <div>
            <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
            {description ? <p className={`mt-3 text-sm leading-6 md:text-lg md:leading-8 ${dark ? 'text-white/70' : 'text-[#57423b]'}`}>{description}</p> : null}
          </div>
        </div>
        <div className="flex flex-wrap w-full shrink-0 items-center gap-3 md:w-auto">
          <a href={RECEPTION_TEL} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#922f05] px-6 py-3.5 text-sm font-bold text-white no-underline shadow-lg shadow-[#922f05]/20 transition-transform hover:scale-[1.03]">
            <span className="material-symbols-outlined text-lg" aria-hidden="true">call</span>
            {actionLabel}
          </a>
          <a href={RECEPTION_ZALO} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0068FF] px-6 py-3.5 text-sm font-bold text-white no-underline shadow-lg shadow-[#0068FF]/20 transition-transform hover:scale-[1.03]">
            <span className="font-sans text-xs font-black tracking-widest">ZALO</span>
          </a>
          <a href={RECEPTION_WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white no-underline shadow-lg shadow-[#25D366]/20 transition-transform hover:scale-[1.03]">
            <span className="material-symbols-outlined text-lg" aria-hidden="true">chat</span>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
