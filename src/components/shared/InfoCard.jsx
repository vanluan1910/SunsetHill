function InfoCard({
  icon,
  title,
  children,
  className = '',
  iconClassName = '',
  iconWrapperClassName = '',
  titleClassName = '',
  bodyClassName = '',
  layout = 'vertical',
}) {
  if (layout === 'horizontal') {
    return (
      <article className={`rounded-[28px] border border-[#E6D3BB] bg-white/80 p-6 shadow-sm ${className}`}>
        {icon ? (
          <div className={iconWrapperClassName}>
            <span className={`material-symbols-outlined text-3xl text-[#D39A53] ${iconClassName}`} aria-hidden="true">
              {icon}
            </span>
          </div>
        ) : null}
        <div className="min-w-0 flex-1">
          {title ? <h2 className={`mb-1 font-semibold text-[#2A160A] ${titleClassName}`}>{title}</h2> : null}
          <div className={`text-sm leading-7 text-[#5C4330] md:text-base ${bodyClassName}`}>{children}</div>
        </div>
      </article>
    );
  }

  return (
    <article className={`rounded-[28px] border border-[#E6D3BB] bg-white/80 p-6 shadow-sm ${className}`}>
      {icon ? (
        <span
          className={`material-symbols-outlined mb-4 text-3xl text-[#D39A53] ${iconClassName}`}
          aria-hidden="true"
        >
          {icon}
        </span>
      ) : null}
      {title ? (
        <h2 className={`mb-3 font-serif text-2xl font-semibold text-[#2A160A] ${titleClassName}`}>
          {title}
        </h2>
      ) : null}
      <div className={`text-sm leading-7 text-[#5C4330] md:text-base ${bodyClassName}`}>{children}</div>
    </article>
  );
}

export default InfoCard;
