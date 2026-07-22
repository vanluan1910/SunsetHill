import { t } from '../../i18n';

function MapLink({ href, lang = 'en', className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center font-bold text-[#D39A53] transition hover:text-[#B87935] ${className}`}
    >
      <span className="material-symbols-outlined mr-2 text-base" aria-hidden="true">
        map
      </span>
      {t('common.viewMaps', lang)}
    </a>
  );
}

export default MapLink;
