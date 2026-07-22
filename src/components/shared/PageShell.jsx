function PageShell({ children, className = '' }) {
  return (
    <div className={`warm-page-bg min-h-screen pt-16 font-sans text-[#1d1b19] ${className}`}>
      {children}
    </div>
  );
}

export default PageShell;
