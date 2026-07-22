function SectionHeading({ kicker, title, align = 'left', level = 2, className = '' }) {
  const Heading = level === 1 ? 'h1' : level === 3 ? 'h3' : 'h2';
  const centered = align === 'center';

  return (
    <header className={`${centered ? 'flex flex-col items-center text-center' : ''} ${className}`}>
      {kicker ? <p className="mb-2 text-sm font-bold uppercase tracking-[0.22em] text-[#922f05]">{kicker}</p> : null}
      <Heading className="font-serif text-3xl font-semibold leading-tight text-[#1d1b19] md:text-5xl">{title}</Heading>
      <div className={`mt-5 h-0.5 w-16 bg-[#922f05] ${centered ? 'mx-auto' : ''}`} />
    </header>
  );
}

export default SectionHeading;
