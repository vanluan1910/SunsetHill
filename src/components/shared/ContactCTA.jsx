import { RECEPTION_TEL } from '../../data/contact';

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
        <a href={RECEPTION_TEL} className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#922f05] px-8 py-4 text-base font-bold text-white no-underline shadow-lg shadow-[#922f05]/20 transition-transform hover:scale-[1.03] md:w-auto">
          <span className="material-symbols-outlined" aria-hidden="true">headset_mic</span>
          {actionLabel}
        </a>
      </div>
    </section>
  );
}

export default ContactCTA;
