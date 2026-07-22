function PageHero({ image, imageAlt, kicker, title, description, variant = 'bottom' }) {
  const centered = variant === 'center';

  return (
    <section className={`relative overflow-hidden shadow-lg shadow-[#120B06]/10 ${centered ? 'h-[360px] rounded-[32px] md:h-[520px] md:rounded-none' : 'min-h-[320px] rounded-[32px] md:h-[450px]'}`}>
      <img alt={imageAlt} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" src={image} loading="lazy" decoding="async" />
      <div className={`absolute inset-0 ${centered ? 'bg-gradient-to-b from-[#120B06]/25 via-transparent to-[#120B06]/45' : 'bg-gradient-to-t from-[#120B06]/78 via-[#120B06]/20 to-transparent'}`} />
      <div className={`absolute inset-0 flex px-6 py-6 text-white md:px-12 md:py-12 ${centered ? 'items-center justify-center text-center' : 'items-end'}`}>
        <div className="max-w-4xl">
          {kicker ? <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#ffdcc3] md:text-sm">{kicker}</p> : null}
          <h1 className="font-serif text-4xl font-bold leading-tight drop-shadow-lg md:text-6xl lg:text-7xl">{title}</h1>
          {description ? <p className="mt-3 max-w-3xl text-sm font-medium leading-6 text-white/90 drop-shadow-md md:mt-5 md:text-lg md:leading-8">{description}</p> : null}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
